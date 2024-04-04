import React from 'react'
import { useAppContext } from './data/Context'
import { Container } from './Components/Container'
import { Img } from './Components/Img'
import { Form } from './Form/Form'
import { Field } from './Form/Field'
import { Button } from './Components/Button'

function App() {
  const { validations } = useAppContext();

  return (
    <>
      <Container 
        className='flex-col mt-52'
      >
        <Img />
        <Container
          className='w-auto flex-col border border-gray-300 rounded-lg shadow-xs'
        >
          <Form>
            <Field 
              name="Numero de Tarjeta"
              validations={validations.number}
            />
            <Field 
              name="Fecha de Vencimiento"
              validations={validations.date}
            />
            <Field 
              name="Nombre del Titular"
              validations={validations.name}
            />
            <Field 
              name="CVV"
              validations={validations.cvv}
            />
          </Form>
          <Container 
            className='justify-start gap-x-4 px-20'
          >
            <Button 
              name='Agregar Tarjeta'
              className='bg-blue-500 hover:bg-blue-700 text-white border'
            />
            <Button 
              name='Cancelar'
              className='border border-gray-300 text-white hover:bg-gray-100/90 hover:text-gray-500'
            />
          </Container>
        </Container>
      </Container>
    </>
  )
}

export default App
