import { FC } from "react"

interface Props {
  children: React.ReactNode;
}

export const Form: FC<Props> = ({ children }) => {
  return (
    <form
      className="flex flex-wrap justify-center space-x-8 mx-10 pt-28 pb-10 gap-4 w-[480px]"
    >
      { children }
    </form>
  )
}