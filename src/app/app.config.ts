import type {ApplicationConfig} from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import { tuiLanguageSwitcher } from '@taiga-ui/i18n/utils';
import type { TuiLanguageName} from '@taiga-ui/i18n/types';

export const appConfig: ApplicationConfig = {
    providers: [
        provideClientHydration(),
        provideAnimations(),
        NG_EVENT_PLUGINS,
        {
            provide: 'Pythons',
            useValue: [
                'John Cleese',
                'Eric Idle',
                'Michael Palin',
                'Graham Chapman',
                'Terry Gilliam',
                'Terry Jones',
            ],
        },
        tuiLanguageSwitcher(
            /**
             * @note:
             * then the i18n language files will be loaded from node_modules
             */
            async (language: TuiLanguageName): Promise<unknown> =>
              import(
                /* webpackMode: "lazy" */
                /* webpackChunkName: "i18n-lazy-" */
                `@taiga-ui/i18n/languages/${language}`
                // also you can override the paths to your i18n language files
              ),
          ),
    ],
};
