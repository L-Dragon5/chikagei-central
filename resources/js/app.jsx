import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const theme = extendTheme({
  styles: {
    global: {
      '#app': {
        height: '100%',
        display: 'grid',
        gridTemplateRows: '56px 1fr auto',
      },
    },
  },
});

createInertiaApp({
  title: (title) => `${title} | CC`,
  progress: {
    color: '#29d',
  },
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.jsx`,
      import.meta.glob('./Pages/**/*.jsx'),
    ),
  setup({ el, App, props }) {
    createRoot(el).render(
      <ChakraProvider theme={theme}>
        <App {...props} />
      </ChakraProvider>,
    );
  },
});
