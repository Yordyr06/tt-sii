import { FC } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}


export const Container: FC<Props> = ({ children, className })=> {
  return (
    <div className={`container flex items-center mx-auto mb-6 ${className}`}>
      { children }
    </div>
  );
}