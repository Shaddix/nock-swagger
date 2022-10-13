import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { mainRender } from './infrastructure';
import { Category, Nock, Pet, PetStatus } from './nock-helpers';
import nock from 'nock';
import { QueryClient, QueryClientProvider } from 'react-query';
import { QueryFactory, QueryFactory2 } from '../api';
import { Order, Status } from '../api/axios-client';
import { ProductNock, setBaseUrl as setBaseUrlNock2 } from './nock-helpers2';

beforeEach(() => {
  nock.cleanAll();
  QueryFactory2.setBaseUrl('http://localhost');
  setBaseUrlNock2('http://localhost');
});

test('simple get without query params', async () => {
  Nock.getPetById({ petId: 1 })
    .reply(
      200,
      new Pet({
        status: PetStatus.Pending,
        id: 1,
        category: new Category({
          id: 2,
          name: 'category',
        }),
        tags: [],
        name: 'learn react',
        photoUrls: [],
      }),
    )
    .persist();

  mainRender();
  await waitFor(() => {
    const linkElement = screen.getByText(/learn react/i);

    expect(linkElement).toBeInTheDocument();
  });
});

test('get with query params', async () => {
  Nock.findPetsByStatus({ status: [Status.Pending] }).reply(200, [
    new Pet({
      status: PetStatus.Pending,
      id: 1,
      category: new Category({
        id: 2,
        name: 'category',
      }),
      tags: [],
      name: 'asdasd',
      photoUrls: [],
    }),
  ]);

  mainRender();
  await waitFor(() => {
    const linkElement = screen.getByText(/asdasd/i);

    expect(linkElement).toBeInTheDocument();
  });
});

describe('POST/PUT tests', () => {
  it('POST simple', async () => {
    let q = 0;
    Nock.addPet().reply(() => {
      q = 1;
      return [200];
    });
    await QueryFactory.Query.Client.addPet(
      new Pet({
        name: 'asd',
        photoUrls: ['123'],
      }),
    );
    expect(q).toBe(1);
  });
  it('POST with body matcher', async () => {
    let q = 0;
    Nock.addPet({ name: 'asd', photoUrls: ['123'] }).reply(() => {
      q = 2;
      return [200];
    });
    await QueryFactory.Query.Client.addPet(
      new Pet({
        name: 'asd',
        photoUrls: ['123'],
      }),
    );
    expect(q).toBe(2);
  });

  it('POST with body matcher function', async () => {
    let q = 0;
    Nock.addPet((body) => body.name === 'asd').reply(() => {
      q = 3;
      return [200];
    });
    await QueryFactory.Query.Client.addPet(
      new Pet({
        name: 'asd',
        photoUrls: ['123'],
      }),
    );
    expect(q).toBe(3);
  });
});

describe('GET with reply based on parameters', () => {
  it('parameters not specified - mock is still used', async () => {
    Nock.findPetsByStatus({}).reply(200, [
      new Pet({
        name: 'asd',
        photoUrls: [],
      }),
    ]);
    const result = await QueryFactory.Query.Client.findPetsByStatus([
      Status.Available,
    ]);
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('asd');
  });

  it('array parameter with 2 items', async () => {
    Nock.findPetsByStatus({
      status: [Status.Available, Status.Sold],
    }).reply(200, [
      new Pet({
        name: 'asd1',
        photoUrls: [],
      }),
    ]);
    const result = await QueryFactory.Query.Client.findPetsByStatus([
      Status.Available,
      Status.Sold,
    ]);
    expect(result[0].name).toBe('asd1');
  });

  it('array parameter with 1 item', async () => {
    Nock.findPetsByStatus({
      status: [Status.Available],
    }).reply(200, [
      new Pet({
        name: 'asd2',
        photoUrls: [],
      }),
    ]);
    const result = await QueryFactory.Query.Client.findPetsByStatus([
      Status.Available,
    ]);
    expect(result[0].name).toBe('asd2');
  });

  it('#3: set up response depending on query params GET request - simple', async () => {
    Nock.getPetById({ petId: 1 }).reply(200, (uri, body) => {
      console.log(uri, body);
      return {
        name: 'oo',
        id: 2,
      };
    });
    const result = await QueryFactory.Query.Client.getPetById(1);
    expect(result.id).toBe(2);
  });

  it('#3: set up response depending on query params GET request - advanced', async () => {
    Nock.getPetById({} as any)
      .reply(200, (uri, body) => {
        const petId = parseInt(uri.replace('/pet/', ''));
        return {
          name: 'oo',
          id: petId + 1,
        };
      })
      .persist();
    const result = await QueryFactory.Query.Client.getPetById(1);
    expect(result.id).toBe(2);

    const result2 = await QueryFactory.Query.Client.getPetById(3);
    expect(result2.id).toBe(4);
  });

  it('#3: any querystring param GET request', async () => {
    Nock.findPetsByStatus({})
      .reply(200, (uri, body) => {
        return [
          {
            name: uri,
          },
        ];
      })
      .persist();
    const result = await QueryFactory.Query.Client.findPetsByStatus([
      Status.Available,
    ]);
    expect(result[0].name).toBe('/pet/findByStatus?status=available');
  });

  it('#3: set up response depending on body POST request', async () => {
    Nock.placeOrder()
      .reply(200, (uri, body) => {
        return {
          name: 'oo',
          id: body.id! + 1,
        };
      })
      .persist();
    const result = await QueryFactory.Query.Client.placeOrder(
      new Order({
        id: 123,
      }),
    );
    expect(result.id).toBe(124);
  });

  it('overlapping urls', async () => {
    ProductNock.search({}).reply(200, (uri, body) => {
      return [
        {
          title: 'oo',
        },
      ];
    });
    ProductNock.get({ id: 1 }).reply(200, (uri, body) => {
      return {
        title: '123',
      };
    });
    const e = nock.pendingMocks();
    console.log(e);
    const result = await QueryFactory2.ProductQuery.Client.get(1);
    expect(result.title).toBe('123');
  });

  it('date in url', async () => {
    ProductNock.search({ lastStockUpdatedAt: new Date(2022, 1, 2) }).reply(
      200,
      {
        totalCount: 1,
        data: [{ title: 'oo' }],
      } as any,
    );
    ProductNock.search(
      { lastStockUpdatedAt: new Date(2022, 2, 2) },
      undefined,
      { preservePreviousInterceptors: true },
    ).reply(200, {
      totalCount: 1,
      data: [{ title: '22' }],
    } as any);
    const e = nock.pendingMocks();
    //throw new Error(JSON.stringify(e));
    console.log(e);
    const result = await QueryFactory2.ProductQuery.Client.search(
      undefined,
      undefined,
      new Date(2022, 1, 2),
    );
    expect(result.totalCount).toBe(1);
    expect(result.data[0].title).toBe('oo');
  });
});

describe('interceptor removal tests', () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: any) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  beforeEach(() => {
    nock.cleanAll();
    queryClient.clear();
  });

  it('interceptor exist, add another interceptor with removePreviousInterceptors set to false - first interceptor is still used', async () => {
    Nock.getPetById({ petId: 1 })
      .reply(200, { id: 2, name: 'asd', photoUrls: [] })
      .persist();
    Nock.getPetById({ petId: 1 }, undefined, {
      preservePreviousInterceptors: true,
    })
      .reply(200, { id: 3, name: '3', photoUrls: [] })
      .persist();

    const { result, waitFor } = renderHook(
      () => QueryFactory.Query.useGetPetByIdQuery(1),
      {
        wrapper,
      },
    );
    await waitFor(() => {
      return result.current.isSuccess;
    });

    expect(result.current.data!.id).toBe(2);
  });

  it('interceptor exist, add another interceptor with removePreviousInterceptors set to true - second interceptor is still used', async () => {
    Nock.getPetById({ petId: 1 })
      .reply(200, { id: 4, photoUrls: [], name: 'a' })
      .persist();
    Nock.getPetById({ petId: 1 })
      .reply(200, { id: 5, photoUrls: [], name: 'a' })
      .persist();

    const { result, waitFor } = renderHook(
      () => QueryFactory.Query.useGetPetByIdQuery(1),
      {
        wrapper,
      },
    );
    await waitFor(() => {
      return result.current.isSuccess;
    });

    expect(result.current.data!.id).toBe(5);
  });
});

describe('parse url tests', () => {
  test('no queryparams', () => {
    const parsed = Nock.parseGetPetByIdUrl('http://mail.ru/pet/1');
    expect(parsed.petId).toBe('1');
  });
  test('template without queryparams, url contains them', () => {
    const parsed = Nock.parseGetPetByIdUrl('http://mail.ru/pet/12?asd=qwe');
    expect(parsed.petId).toBe('12');
  });
  test('with queryparams', () => {
    const parsed = Nock.parseFindPetsByStatusUrl('http://mail.ru/?status=123');
    expect(parsed.status).toBe('123');
  });
  test('with queryparams - no parameter', () => {
    const parsed = Nock.parseFindPetsByStatusUrl('http://mail.ru/');
    expect(parsed.status).toBeNull();
  });

  test('with queryparams - array', () => {
    const parsed = Nock.parseFindPetsByStatusUrl(
      'http://mail.ru/?status=1&status=2',
    );
    // this is not perfect actually. URL parsing will be moved to query-string someday
    expect(parsed.status).toBe('1');
  });

  it('integration test for parse url', async () => {
    Nock.findPetsByStatus({})
      .reply(200, (url) => {
        const parsedUrl = Nock.parseFindPetsByStatusUrl(url);
        return [{ id: 1, photoUrls: [], name: parsedUrl.status }];
      })
      .persist();

    const result = await QueryFactory.Query.Client.findPetsByStatus([
      Status.Available,
    ]);

    expect(result[0].name).toBe('available');
  });
});
