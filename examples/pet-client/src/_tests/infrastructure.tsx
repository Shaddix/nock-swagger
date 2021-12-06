import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from '../App';
import { QueryFactory, QueryFactory2 } from '../api';
import { setBaseUrl } from './nock-helpers';
import { setBaseUrl as setBaseUrl2 } from './nock-helpers2';
import axios from 'axios';

axios.defaults.adapter = require('axios/lib/adapters/http');
setBaseUrl('https://localhost');
setBaseUrl2('https://localhost');

QueryFactory.setBaseUrl('https://localhost');
QueryFactory.setAxiosFactory(() => axios);
QueryFactory2.setBaseUrl('https://localhost');
QueryFactory2.setAxiosFactory(() => axios);

const queryClient = new QueryClient();

export function mainRender() {
  return render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
  );
}
