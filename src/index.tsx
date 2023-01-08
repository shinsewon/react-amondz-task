import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainProvider } from 'context/main';
import { QueryClientProvider, QueryClient } from 'react-query';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import App from './App';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <QueryClientProvider client={queryClient}>
    <MainProvider>
      <App />
    </MainProvider>
  </QueryClientProvider>,
);
