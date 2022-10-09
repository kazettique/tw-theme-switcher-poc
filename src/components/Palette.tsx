import { ThemeItem } from '@/types';
import PaletteItem from './PaletteItem';

interface IProps {
  currentTheme: ThemeItem;
}

export default function Palette(props: IProps) {
  const { currentTheme } = props;

  return (
    <div className="p-2 border rounded-md">
      <h1 className="font-bold capitalize text-neutral-200 py-2">current palette: {currentTheme.label}</h1>
      <div className="w-full flex">
        <PaletteItem className="bg-color-one" name="color one" colorCode={currentTheme.colorPalette[0]} />
        <PaletteItem className="bg-color-two" name="color two" colorCode={currentTheme.colorPalette[1]} />
        <PaletteItem className="bg-color-three" name="color three" colorCode={currentTheme.colorPalette[2]} />
        <PaletteItem className="bg-color-four" name="color four" colorCode={currentTheme.colorPalette[3]} />
        <PaletteItem className="bg-color-five" name="color five" colorCode={currentTheme.colorPalette[4]} />
      </div>
    </div>
  );
}
