import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { mainRender } from './__tests__/infrastructure';
import {
  Category,
  Nock,
  Pet,
  PetStatus,
  Status,
} from './__tests__/nock-helpers';
import nock from 'nock';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

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

test('manual request and stub', async () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: any) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  nock('http://localhost').get('/api/data?b=2&a=1').reply(200, {
    name: 'asd',
  });

  const { result, waitFor } = renderHook(() => useFetchDataManual(), {
    wrapper,
  });

  await waitFor(() => {
    return result.current.isSuccess;
  });

  expect(result.current.data?.name).toEqual('asd');
});

function useFetchDataManual() {
  return useQuery('fetchData', async () => {
    const response = await fetch('http://localhost/api/data?a=1&b=2');
    return await response.json();
  });
}

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
