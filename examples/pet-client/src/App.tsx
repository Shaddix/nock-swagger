import React from 'react';
import './App.css';
import { AxiosQuery } from './api';
import { Status } from './api/axios-client';

function App() {
  const petsQuery = AxiosQuery.Query.useFindPetsByStatusQuery({
    status: [Status.Pending],
  });

  return (
    <div className="App">
      <div style={{ flex: 1 }}>
        <h1>Pets</h1>
        {petsQuery.isLoading && 'Loading...'}
        {petsQuery.isError && petsQuery.error}
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
