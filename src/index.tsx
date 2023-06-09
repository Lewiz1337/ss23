import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { MantineProvider } from '@mantine/core';
import './scss/index.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider
        withCSSVariables
        withNormalizeCSS
        theme={{
          fontFamily: 'Poppins, sans-serif',
        }}>
        <App />
      </MantineProvider>
    </Provider>
    ,
  </React.StrictMode>,
);
