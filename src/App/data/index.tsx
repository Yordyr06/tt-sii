import { useState } from "react";
import { useStorage } from "./useStorage";
import type { CreditCard } from "./useStorage";

export const useData = () => {
  const {
    data,
    loading,
    error,
    setStorage
  } = useStorage("DATA_V1", [])

  const [value, setValue] = useState("")

  const getData = data.filter(item => item.number === value) 

  const addData = (value: CreditCard) => {
    const newValue = []
    newValue.push(...data, value)
    setStorage(newValue)
  }

  const deleteData = (value: CreditCard) => {
    const updateData = [...data]
    const index = updateData.findIndex((item) => item === value)

    if (index !== -1) {
      updateData.splice(index, 1)
      setStorage(updateData)
    } else {
      console.log("No se encontró el valor")
    }
  }

  return (
    {
      data,
      loading,
      error,
      value,
      setValue,
      getData,
      addData,
      deleteData
    }
  )
}