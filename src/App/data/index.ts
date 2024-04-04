import { useState } from "react";
import { useStorage } from "./useStorage";
import { response } from "./validations";
import type { CreditCard } from "./useStorage";

export type Name = string
export type Digits = string; 
export type Date = string; 
export type CVV = string; 

export const useData = () => {
  const {
    data,
    loading,
    error,
    setStorage
  } = useStorage("DATA_V1", [])

  const [name, setName] = useState<Name>("");
  const [digits, setDigits] = useState<Digits>("");
  const [date, setDate] = useState<Date>("");
  const [cvv, setCVV] = useState<CVV>("");

  const getData = () => {
    return data
  }

  const addData = (value: CreditCard) => {
    const newValue = []
    if (response.bool) {
      newValue.push(...data, value)
      setStorage(newValue)
    }
  }

  const setData = (value: CreditCard[]) => {
    setStorage(value)
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

  const clearFields = () => {
    setName("")
    setDigits("")
    setDate("")
    setCVV("")
  }


  return ({
    data,
    loading,
    error,
    getData,
    addData,
    setData,
    deleteData,
    name,
    setName,
    digits,
    setDigits,
    date,
    setDate,
    cvv,
    setCVV,
    clearFields
  })
}