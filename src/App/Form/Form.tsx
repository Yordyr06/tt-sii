import { FC } from "react"
import type { FormEvent } from "react";

interface Props {
  children: React.ReactNode;
}

const handleSubmit = (event: FormEvent) => {
  event.preventDefault()
}

export const Form: FC<Props> = ({ children }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap justify-center mx-10 pt-28 pb-10 gap-x-10 gap-y-8 w-[480px]"
    >
      { children }
    </form>
  )
}