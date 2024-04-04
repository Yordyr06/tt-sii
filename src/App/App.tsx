import React from 'react'
import { useAppContext } from './data/Context'
import { Container } from './Components/Container'
import { Img } from './Components/Img'
import { Form } from './Form/Form'
import { Field } from './Form/Field'
import { Button } from './Components/Button'

function App() {
  const {
    validations, 
    addData,
    clearFields
  } = useAppContext();

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
              id = "digits"
              componentName="Numero de Tarjeta"
              validations={validations.number}
            />
            <Field
              id="date"
              componentName="Fecha de Vencimiento"
              validations={validations.date}
            />
            <Field 
              id="name"
              componentName="Nombre del Titular"
              validations={validations.name}
            />
            <Field
              id="cvv"
              componentName="CVV"
              validations={validations.cvv}
            />
            <Container 
              className='justify-start gap-x-4 px-20'
            >
              <Button 
                name='Agregar Tarjeta'
                addData={addData}
                className='bg-blue-500 hover:bg-blue-700 text-white border'
              />
              <Button 
                name='Cancelar'
                clearFields={clearFields}
                className='border border-gray-300 text-white hover:bg-gray-100/90 hover:text-gray-500'
              />
            </Container>
          </Form>
        
        </Container>
      </Container>
    </>
  )
}

export default App
