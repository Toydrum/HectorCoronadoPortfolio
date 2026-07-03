import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withNavigationErrorHandler,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
      // A tab opened before a deploy references hashed chunks that no longer
      // exist; lazy navigation then fails silently. Recover with a full load
      // of the intended URL, which fetches the fresh index.html.
      withNavigationErrorHandler((error) => {
        const message = String((error.error as Error | undefined)?.message ?? error.error ?? '');
        if (/dynamically imported module|ChunkLoadError|Importing a module script failed/i.test(message)) {
          location.assign(new URL('.' + error.url, document.baseURI).toString());
        }
      }),
    ),
  ],
};
