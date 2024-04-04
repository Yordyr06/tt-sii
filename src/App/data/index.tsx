import { useState } from "react";
import { useStorage } from "./useStorage";
import { validations } from "./validations";

export type Name = string
export type Digits = string; 
export type Date = string; 
export type CVV = string;
export type Value = string;

export interface CreditCard {
  "name": Name;
  "digits": Digits;
  "date": Date;
  "cvv": CVV;
}

export const useData = () => {
  const {
    data,
    loading,
    error,
    setStorage
  } = useStorage("DATA_V1", [])
  const [creditCard, setCreditCard] = useState<CreditCard>({
    "name": "",
    "digits": "",
    "date": "",
    "cvv": ""
  })

  const getData = () => {
    return data
  }

  const addData = (value: CreditCard) => {
    const newData = []
    if (validations.bool(
      value.digits, 
      value.name, 
      value.date, 
      value.cvv
    )) {
      newData.push(...data, value)
      setStorage(newData)
      clearFields()
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
    setCreditCard({
      "name": "",
      "digits": "",
      "date": "",
      "cvv": ""
    })
  }

  return ({
    data,
    loading,
    error,
    getData,
    addData,
    setData,
    deleteData,
    creditCard, 
    setCreditCard,
    clearFields
  })
}