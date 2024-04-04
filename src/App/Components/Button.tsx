import { FC } from "react";
import { useAppContext } from "../data/Context";
import type { CreditCard } from "../data/index";

interface Props {
  name: string;
  addData?: (newData: CreditCard) => void;
  clearFields?: () => void;
  getData?: () => CreditCard[];
  className?: string;
}

export const Button: FC<Props> = ({ name, className, addData, clearFields, getData}) => {
  const { creditCard } = useAppContext();

  const handleClick = () => {
    if (name === 'Agregar Tarjeta' && addData) {
      return addData(creditCard)
    } else if (name === 'Cancelar' && clearFields) {
      return clearFields()
    } else if (name === 'Ver Data' && getData) {
      return console.log(getData())
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