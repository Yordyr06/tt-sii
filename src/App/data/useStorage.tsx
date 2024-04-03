import { useEffect, useState } from "react";

export interface CreditCard {
  name: string;
  number: string;
  cvv: string;
  date: string;
}
interface StorageHook {
  data: CreditCard[];
  loading: boolean;
  error: Error | null;
  setStorage: (newStorage: CreditCard[]) => void;
}

export function useStorage(storage: string, initialStorage: CreditCard[]): StorageHook {
  const [data, setData] = useState(initialStorage)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    try {
      setLoading(true)
      let dataList: CreditCard[] = initialStorage
      const getStorage = localStorage.getItem(storage)

      if (getStorage) {
        dataList = JSON.parse(getStorage)
        setData(dataList)
      } else {
        localStorage.setItem(storage, JSON.stringify(initialStorage))
        dataList = initialStorage
      }
    } catch (error) {
      setError(new Error(`Error al obtener los datos: ${error}`))
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [storage, initialStorage])

  const setStorage = (newStorage: CreditCard[]) => {
    localStorage.setItem(storage, JSON.stringify(newStorage))
    setData(newStorage)
  }

  return {
    data,
    loading,
    error,
    setStorage
  }
}