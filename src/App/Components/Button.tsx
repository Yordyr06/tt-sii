import { FC } from "react";

type OnClick = () => void;
interface Props {
  name: string;
  className?: string;
  onClicks?: OnClick[];
}



export const Button: FC<Props> = ({ name, className }) => {
  return (
    <button
      type="submit"
      className={`w-auto rounded-full px-4 py-1 text-xs font-medium inline-block align-top ${className}`}
    >
      { name }
    </button>
  );
}