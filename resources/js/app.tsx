import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './src/store/store';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0093',
    },
    secondary: {
      main: '#ff4680',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.tsx`,
      import.meta.glob('./Pages/**/*.tsx')
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App {...props} />
        </ThemeProvider>
      </Provider>
    );
  },
  progress: {
    color: '#4B5563',
  },
});
