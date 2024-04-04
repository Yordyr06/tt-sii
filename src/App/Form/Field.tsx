import { useEffect } from "react";
import { useAppContext } from "../data/Context";
import type { FC, ChangeEvent } from "react";
import type { CreditCard } from "../data/index";

type OnChange = (event: ChangeEvent<HTMLInputElement>) => void;
type CreditCardKeys = keyof CreditCard;
interface Props {
  id: CreditCardKeys;
  componentName: string;
  validations: (value: string) => void;
  className?: string;
}

export const Field: FC<Props> = ({ id, componentName, className, validations }) => {
  const { creditCard, setCreditCard } = useAppContext();

  useEffect(() => {
    function getValue(key: CreditCardKeys) {
      const obj: CreditCard = {
        "name": creditCard.name,
        "digits": creditCard.digits,
        "date": creditCard.date,
        "cvv": creditCard.cvv,
      };
      return obj[key];
    }

    validations(getValue(id));
  }, [
    id, 
    componentName, 
    creditCard, 
    validations, 
    setCreditCard, 
    creditCard.name, 
    creditCard.digits, 
    creditCard.date, 
    creditCard.cvv
  ]);

  const handleChange: OnChange = (event) => {
    setCreditCard({
      ...creditCard,
      [id]: event.target.value,
    });
    validations(event.target.value);
  }

  return (
    <article
      id={id}
      className={`flex flex-col basis-2/5 ${className}`}
    >
      <label
        typeof="string"
        className="text-sm font-semibold mb-2 text-justify"
      >{ componentName }</label>
      <input 
        type="text"
        value={creditCard[id] || ""}
        onChange={handleChange}
        className={`border border-gray-300/30 px-4 h-8 rounded-md focus:outline-none ${componentName === "CVV" ? "w-1/2" : "w-full"}`}
      />
      
    </article>
  );
}