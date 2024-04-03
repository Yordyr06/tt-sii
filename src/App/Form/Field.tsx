import { useState } from "react";
import type { FC, ChangeEvent } from "react";

type OnChange = (event: ChangeEvent<HTMLInputElement>) => void;
interface Props {
  name: string;
  onChanges?: OnChange[];
  className?: string;
}

export const Field: FC<Props> = ({ name, className }) => {
  const [value, setValue] = useState("");

  const handleChange: OnChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <article 
      className={`flex flex-col basis-2/5 ${className}`}
    >
      <label
        typeof="string"
        title="number"
        className="text-sm font-semibold mb-2 text-justify"
      >{ name }</label>
      <input 
        type="text"
        value={value}
        onChange={handleChange}
        className={`border border-gray-300/30 px-4 h-8 rounded-md focus:outline-none ${name === "CVV" ? "w-1/2" : "w-full"}`}
      />
    </article>
  );
}