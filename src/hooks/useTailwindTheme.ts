import { CUSTOM_THEME_ID } from '@/constants';
import { ThemeItem } from '@/types';
import { genCSSString } from '@/utils';
import { useEffect } from 'react';

// References
// https://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript
// https://stackoverflow.com/questions/574944/how-to-load-up-css-files-using-javascript
export default function useTailwindTheme(currentTheme: ThemeItem): void {
  useEffect(() => {
    if (!document.getElementById(CUSTOM_THEME_ID)) {
      const head = document.head;
      const newStyleElement: HTMLStyleElement = document.createElement('style');

      head.appendChild(newStyleElement);
      newStyleElement.id = CUSTOM_THEME_ID;
      newStyleElement.innerHTML = genCSSString(currentTheme.colorPalette);
    } else {
      const styleElement: HTMLElement | null = document.getElementById(CUSTOM_THEME_ID);

      if (styleElement) {
        styleElement.innerHTML = genCSSString(currentTheme.colorPalette);
      }
    }
  }, [currentTheme]);
}
