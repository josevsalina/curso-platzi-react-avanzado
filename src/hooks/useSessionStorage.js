import { useState } from 'react'
export function useSessionStorage (key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (err) {
      return initialValue
    }
  })

  const setSessionStorage = value => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (err) {
      console.error(err)
    }
  }

  return [storedValue, setSessionStorage]
}
