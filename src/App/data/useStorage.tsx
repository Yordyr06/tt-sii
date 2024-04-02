import { useEffect, useState } from "react";

export function useStorage(storage, initialStorage) {
  const [data, setData] = useState(initialStorage)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      setLoading(true)
      let dataList
      const getStorage = localStorage.getItem(storage)

      if (getStorage) {
        dataList = JSON.parse(getStorage)
        setData(dataList)
      } else {
        localStorage.setItem(storage, JSON.stringify(initialStorage))
        dataList = initialStorage
      }
    } catch (error) {
      setError(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [storage])

  const setStorage = (newStorage) => {
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