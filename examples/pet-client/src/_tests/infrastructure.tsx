import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from '../App';
import { QueryFactory } from '../api';
import { setBaseUrl } from './nock-helpers';
import axios from 'axios';

axios.defaults.adapter = require('axios/lib/adapters/http');
setBaseUrl('https://localhost');

QueryFactory.setBaseUrl('https://localhost');
QueryFactory.setAxiosFactory(() => axios);

const queryClient = new QueryClient();

export function mainRender() {
  return render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
  );
}
