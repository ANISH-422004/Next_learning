import { useEffect, useState } from "react"
//We wanted to build a custom hook that allows you to store values in localStorage while keeping the state in sync with it.

export const useLocalStorage = <t>(key: string, initialValue: t) => {

    const [storedValue, setStoredValue] = useState<t>(() => {
        try {
            // Get from local storage by key
            // Parse stored json or if none return initialValue
            const item = localStorage.getItem(key)
            const itemValue = item ? JSON.parse(item) : initialValue
            return itemValue

        } catch (e) {
            // If error also return initialValue
            console.error("Error reading localStorage key “" + key + "”: ", e);
            return initialValue
        }
    })


    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue))
        } catch (e) {
            console.log("Error setting local storage", e)
        }
    }, [key, storedValue])



    return [storedValue, setStoredValue] as const;

    //as const tells TypeScript: “ Please treat this value exactly as it is. Don’t generalize it.”  It helps make your code strict, safe, and predictable.


}