import { useState } from "react";

function useLocalStorage(key: string, initialValue: boolean) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      /**
       * Check here if for window type to avoid the below error
       * Didn't receive it anywhere else
       *
       * ReferenceError: window is not defined
       */
      if (typeof window === "undefined") return initialValue;

      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: boolean) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
