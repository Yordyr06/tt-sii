import React from 'react'
import { Container } from './Components/Container'
import { Form } from './Form/Form'
import { Button } from './Components/Button'
import { Img } from './Components/Img'

function App() {
  return (
    <>
      <Container 
        className='flex-col mt-52'
      >
        <Img />
        <Container
          className='w-auto flex-col border border-gray-300 rounded-lg shadow-xs'
        >
          <Form />
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
