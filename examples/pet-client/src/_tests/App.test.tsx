import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { mainRender } from './infrastructure';
import { Category, Nock, Pet, PetStatus } from './nock-helpers';
import nock from 'nock';
import { QueryClient, QueryClientProvider } from 'react-query';
import { QueryFactory } from '../api';
import { Status } from '../api/axios-client';

test('simple get without query params', async () => {
  Nock.getPetByIdReply(
    { petId: 1 },
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
  ).persist();

  mainRender();
  await waitFor(() => {
    const linkElement = screen.getByText(/learn react/i);

    expect(linkElement).toBeInTheDocument();
  });
});

test('get with query params', async () => {
  Nock.findPetsByStatusReply({ status: [Status.Pending] }, [
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
    Nock.findPetsByStatusReply(
      {},
      [
        new Pet({
          name: 'asd',
          photoUrls: [],
        }),
      ],
      true,
    );
    const result = await QueryFactory.Query.Client.findPetsByStatus([
      Status.Available,
    ]);
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('asd');
  });

  it('array parameter with 2 items', async () => {
    Nock.findPetsByStatusReply(
      {
        status: [Status.Available, Status.Sold],
      },
      [
        new Pet({
          name: 'asd1',
          photoUrls: [],
        }),
      ],
      true,
    );
    const result = await QueryFactory.Query.Client.findPetsByStatus([
      Status.Available,
      Status.Sold,
    ]);
    expect(result[0].name).toBe('asd1');
  });

  it('array parameter with 1 item', async () => {
    Nock.findPetsByStatusReply(
      {
        status: [Status.Available],
      },
      [
        new Pet({
          name: 'asd2',
          photoUrls: [],
        }),
      ],
      true,
    );
    const result = await QueryFactory.Query.Client.findPetsByStatus([
      Status.Available,
    ]);
    expect(result[0].name).toBe('asd2');
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
    Nock.getPetByIdReply({ petId: 1 }, new Pet({ id: 2 } as any)).persist();
    Nock.getPetByIdReply(
      { petId: 1 },
      new Pet({ id: 3 } as any),
      false,
    ).persist();

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
    Nock.getPetByIdReply(
      { petId: 1 },
      { id: 4, photoUrls: [], name: 'a' },
    ).persist();
    Nock.getPetByIdReply(
      { petId: 1 },
      { id: 5, photoUrls: [], name: 'a' },
    ).persist();

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

test('test url builder', () => {
  const tags = [1, 2];
  const getUrl = function (this: { baseUrl: string }) {
    let url_ = this.baseUrl + '/pet/findByTags?';
    if (tags === undefined || tags === null)
      throw new Error(
        "The parameter 'tags' must be defined and cannot be null.",
      );
    else
      tags &&
        tags.forEach((item) => {
          url_ += 'tags=' + encodeURIComponent('' + item) + '&';
        });
    url_ = url_.replace(/[?&]$/, '');
    return url_;
  }.bind({ baseUrl: '' });
  const url = getUrl();
  expect(url).toBe('/pet/findByTags?tags=1&tags=2');
});
