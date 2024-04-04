import { FC } from "react";
import type { CreditCard } from "../data/useStorage";

interface Props {
  name: string;
  onClick: (newData: CreditCard) => void;
  className?: string;
}

export const Button: FC<Props> = ({ name, className, onClick }) => {
  return (
    <button
      type="submit"
      onClick={() => onClick}
      className={`w-auto rounded-full px-4 py-1 text-xs font-medium inline-block align-top ${className}`}
    >
      { name }
    </button>
  );
}