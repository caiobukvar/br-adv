import { useState, useEffect } from "react";

export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(
    (window && window.localStorage.getItem(key)) || defaultValue,
  );

  useEffect(() => {
    if (window) {
      window.localStorage.setItem(key, value);
    }
  }, [key, value]);

  return [value, setValue];
}
