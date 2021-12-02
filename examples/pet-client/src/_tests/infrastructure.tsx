import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from '../App';
import { QueryFactory } from '../api';
import { setBaseUrl } from './nock-helpers';
import axios from 'axios';

axios.defaults.adapter = require('axios/lib/adapters/http');
QueryFactory.setBaseUrl('https://localhost');
QueryFactory.setAxiosFactory(() => axios);
setBaseUrl('https://localhost');
const queryClient = new QueryClient();

export function mainRender() {
  return render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
  );
}
