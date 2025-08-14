import { useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
    const [storeValue, setStoreValue] = useState<T>(
        () => {
            try {
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item) : initialValue
            }
            catch (error) {
                console.error(error)
                return initialValue;
            }
        }
    )
    const setValue = (value: T) => {
        try {
            setStoreValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        }
        catch (error) {
            console.error(error)
        }

    }
    return [storeValue, setValue]
}