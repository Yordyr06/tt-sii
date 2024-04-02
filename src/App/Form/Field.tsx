import { ChangeEvent, FC } from "react";

interface Props {
  name: string;
  type: string;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => boolean;
}

export const Field: FC<Props> = ({ name, type, className }) => {
  return (
    <article 
      className={`flex flex-col basis-1/3 ${className}`}
    >
      <label
        typeof="string"
        title="number"
        className="text-sm font-semibold mb-2 text-justify"
      >{ name }</label>
      <input 
        type={type}
        className="border border-gray-300/30 p-2 rounded-xl focus:outline-none"
      />
    </article>
  );
}