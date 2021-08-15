import {useState, useEffect} from 'react';

const useLocalStorageState = (key, defaultVal) => {
  const [state, state] = useState(() => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
    } catch (err) {
      value = defaultVal
    }
  })
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state])
  return [state, setState]
}

export {useLocalStorageState}