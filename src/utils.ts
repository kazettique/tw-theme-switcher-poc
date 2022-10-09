import { ColorPalette } from './types';

export const genCSSString = (colorPalette: ColorPalette) => `:root {
  --color-one: ${colorPalette[0]};
  --color-two: ${colorPalette[1]};
  --color-three: ${colorPalette[2]};
  --color-four: ${colorPalette[3]};
  --color-five: ${colorPalette[4]};
}`;
