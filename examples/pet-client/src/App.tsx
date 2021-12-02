import React from 'react';
import './App.css';
import { QueryFactory } from './api';
import { Status } from './api/axios-client';

function App() {
  const petsQuery = QueryFactory.Query.useFindPetsByStatusQuery({
    status: [Status.Pending],
  });
  const petQuery = QueryFactory.Query.useGetPetByIdQuery(1);
  return (
    <div className="App">
      <div style={{ flex: 1 }}>
        <h1>Pets</h1>
        {petQuery.isLoading && 'Loading...'}
        {petQuery.isError && petQuery.error}
        {petQuery.data?.name ?? '-'}
        <ol>
          {petsQuery.data?.map((pet, index) => (
            <li key={index}>{pet.name}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
