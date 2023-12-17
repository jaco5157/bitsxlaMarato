import { useEffect, useState } from 'react'
import { AsyncStorage } from '@react-native-async-storage/async-storage'

interface IUseAsyncStorage {
  key?: string
  initialValue?: unknown
}

export const useStorage = ({ key, initialValue }: IUseAsyncStorage) => {
  const [data, setData] = useState(initialValue)
  const [retrievedFromStorage, setRetrievedFromStorage] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem(key as string)
        if (!value) {
          return
        }
        setData(JSON.parse(value) || initialValue)
        setRetrievedFromStorage(true)
      } catch (error) {
        console.error(`useAsyncStorage getItem ${key} error:`, error)
      }
    }

    fetchData()
  }, [key, initialValue])

  const setNewData = async (value: unknown) => {
    try {
      await AsyncStorage.setItem(key as string, JSON.stringify(value))
      setData(value)
    } catch (error) {
      console.error(`useAsyncStorage setItem ${key} error:`, error)
    }
  }

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem(key as string)
    } catch (error) {
      console.error(`useAsyncStorage removeItem ${key} error:`, error)
    }
  }

  const clearData = async () => {
    try {
      await AsyncStorage.clear()
    } catch (error) {
      console.error(`useAsyncStorage clear error:`, error)
    }
  }

  if (key !== undefined && initialValue !== undefined) {
    return [data, setNewData, retrievedFromStorage]
  } else if (key !== undefined) {
    return [removeData, clearData]
  } else {
    return [clearData]
  }
}