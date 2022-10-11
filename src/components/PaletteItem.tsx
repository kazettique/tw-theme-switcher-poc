interface IProps {
  className: string;
  name: string;
  colorCode: string;
}

export default function PaletteItem(props: IProps) {
  const { className, name, colorCode } = props;
  return (
    <div className="grow m-4">
      <div className={`h-14 m-2 rounded-md border ${className}`} />
      <div className="text-center text-neutral-200 underline">{colorCode}</div>
      <div className="text-center capitalize text-neutral-200">{name}</div>
    </div>
  );
}
