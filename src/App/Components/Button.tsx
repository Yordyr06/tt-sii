import { FC } from "react";
import type { CreditCard } from "../data/index";

interface Props {
  name: string;
  addData?: (newData: CreditCard) => void;
  clearFields?: () => void;
  className?: string;
}

export const Button: FC<Props> = ({ name, className, addData, clearFields }) => {
  const handleClick = () => {
    if (name === 'Agregar Tarjeta' && addData) {
      // return addData()
    } else if (name === 'Cancelar' && clearFields) {
      return clearFields()
    }
  }
  
  return (
    <button
      type="submit"
      onClick={handleClick}
      className={`w-auto rounded-full px-4 py-1 text-xs font-medium inline-block align-top ${className}`}
    >
      { name }
    </button>
  );
}