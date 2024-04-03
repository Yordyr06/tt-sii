import { useState } from "react";
import { useStorage } from "./useStorage";

export const useData = () => {
  const {
    data,
    loading,
    error,
    setStorage
  } = useStorage("DATA_V1", [])

  const [value, setValue] = useState("")

  const getData = data.filter(item => item.value === value) 

  const addData = (value) => {
    const newValue = [...data,]
    newValue.push({
      value
    })
    setStorage(newValue)
  }

  const deleteData = (data) => {
    const updateData = [...data]
    const index = updateData.findIndex((item) => item === data)

    if (index !== -1) {
      updateData.splice(index, 1)
      setStorage(updateData)
    } else {
      console.log("No se encontró el valor")
    }
  }

  return (
    {

    }
  )
}