import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { mainRender } from './__tests__/infrastructure';
import { Category, Nock, Pet, PetStatus } from './__tests__/nock-helpers';
import { Status } from './api/axios-client';

test('renders learn react link', async () => {
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
      name: 'asdasd',
      photoUrls: [],
    }),
  ).persist();

  mainRender();
  await waitFor(() => {
    const linkElement = screen.getByText(/learn react/i);

    expect(linkElement).toBeInTheDocument();
  });
});
