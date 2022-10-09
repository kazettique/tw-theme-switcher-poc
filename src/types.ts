export type ThemeItem = {
  name: ThemeEnum;
  label: string;
  colorPalette: ColorPalette;
};

export type ColorPalette = [string, string, string, string, string];

export enum ThemeEnum {
  Ikari,
  Ayanami,
  Asuka,
  Miku,
  Haruhi,
}
