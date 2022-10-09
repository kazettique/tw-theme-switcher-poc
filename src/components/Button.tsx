import { ThemeItem } from '@/types';

interface IProps {
  onClick: (themeItem: ThemeItem) => void;
  themeItem: ThemeItem;
  active: boolean;
}

export default function Button(props: IProps) {
  const { themeItem, onClick, active } = props;

  return (
    <button
      type="button"
      className={`p-2 m-2 rounded capitalize text-neutral-200 
      ${active ? 'bg-cyan-800' : 'bg-neutral-500 hover:bg-neutral-600 active:bg-neutral-700'}`}
      onClick={() => onClick(themeItem)}
    >
      {themeItem.label}
    </button>
  );
}
