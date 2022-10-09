import { useState } from 'react';
import Button from './components/Button';
import Palette from './components/Palette';
import useTailwindTheme from './hooks/useTailwindTheme';
import { themeList } from './themeList';
import { ThemeItem } from './types';

function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeItem>(themeList[0]);
  useTailwindTheme(currentTheme);

  const handleThemeChange = (_theme: ThemeItem): void => setCurrentTheme(_theme);

  return (
    <div className="h-screen w-screen bg-neutral-800 p-4">
      <div className="text-neutral-200 text-2xl font-bold text-center">Theme of Evangelions</div>
      <div className="m-4 flex justify-center">
        {themeList.map((themeItem) => (
          <Button themeItem={themeItem} onClick={handleThemeChange} active={themeItem.name === currentTheme.name} />
        ))}
      </div>
      <Palette currentTheme={currentTheme} />
    </div>
  );
}

export default App;
