import { FC } from "react"

interface Props {
  children: React.ReactNode;
}

export const Form: FC<Props> = ({ children }) => {
  return (
    <form
      className="flex flex-wrap justify-center mx-10 pt-28 pb-10 gap-x-10 gap-y-8 w-[480px]"
    >
      { children }
    </form>
  )
}