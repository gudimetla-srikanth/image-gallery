import React, { useReducer } from 'react'
import { createContext } from 'react'
import reducer from './Reducer'
export const myUserContext = createContext()
export default function Context({ children }) {
    const initial = {
        data: {},
        toggle: false,
        showpopup: false
    }
    const [state, dispatch] = useReducer(reducer, initial)
    return (
        <myUserContext.Provider value={{ state, dispatch }}>
            {children}
        </myUserContext.Provider>
    )
}
