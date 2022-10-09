import { ThemeEnum, ThemeItem } from './types';

export const themeList: ThemeItem[] = [
  // https://www.color-hex.com/color-palette/39832
  {
    name: ThemeEnum.Ayanami,
    label: 'Eva No.00',
    colorPalette: ['#1d446c', '#f1f1f1', '#571a1a', '#000000', '#525252'],
  },
  // https://www.color-hex.com/color-palette/43957
  {
    name: ThemeEnum.Ikari,
    label: 'Eva No.01',
    colorPalette: ['#3f6d4e', '#8bd450', '#1d1a2f', '#965fd4', '#734f9a'],
  },
  // https://www.color-hex.com/color-palette/25527
  {
    name: ThemeEnum.Asuka,
    label: 'Eva No.02',
    colorPalette: ['#281d2d', '#ed2323', '#ea8533', '#fbe6e5', '#f99d52'],
  },
  // https://www.color-hex.com/color-palette/19601
  {
    name: ThemeEnum.Miku,
    label: 'Miku 😆',
    colorPalette: ['#373b3e', '#bec8d1', '#86cecb', '#137a7f', '#e12885'],
  },
  // https://wall.alphacoders.com/big.php?i=941835
  {
    name: ThemeEnum.Haruhi,
    label: 'Haruhi 😎',
    colorPalette: ['#f3ab1f', '#563529', '#4d9aaf', '#f00306', '#ffffff'],
  },
];
