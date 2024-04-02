import { Field } from "./Filed"



export const Form = (): JSX.Element => {
  return (
    <form
      className="flex flex-wrap justify-center space-x-8 mx-10 pt-28 pb-10 gap-4 w-[480px]"
    >
      <Field 
        name="Numero de Tarjeta"
        type="password"
        className=""
      />
      <Field 
        name="Fecha de Vencimiento"
        type="date"
      />
      <Field 
        name="Nombre del Titular"
        type="text"
      />
      <Field 
        name="CVV"
        type="password"
      />
    </form>
  )
}