import { CUSTOM_THEME_ID } from '@/constants';
import { ThemeItem } from '@/types';
import { genCSSString } from '@/utils';
import { useEffect } from 'react';

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
