import { useState } from "react";

// Esta funcion lo que nos permite es almacenar nuestras variables o keys en el localstorage
export function useSessionStorage (key, initialValue){
    const [storedValue, setStoredValue] = useState(()=>{
        try {
            const item = window.sessionStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.error(error);
            return initialValue
        }
    });

    const setValue = value =>{
        try {
            setStoredValue(value)
            window.sessionStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error(error)
        }
    }
    return [storedValue, setValue]
}