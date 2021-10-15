
import { createContext, useReducer, useState} from "react"
import {AppReducer} from './AppReducer'

//initial State

const initialState = [
    //{types: 'food', desc: 'veggies', calories: 1000, ctime: '12:00'},
    // {types: 'exercise', description: 'aerobics', calories: 500, ctime: '11:00'},
    // {types: 'food', description: 'sandwitch', calories: 2600, ctime: '13:00'},
    // {types: 'exercise', description: 'aerobics', calories: 700, ctime: '11:00'}
];
 

//create Context

export const globalContext = createContext(initialState)


//Provider Component

export const GlobalProvider = ({children}) => {

    const [editItem, setEditItem] = useState(null)

    const [state, dispatch] = useReducer (AppReducer, initialState)

        // Actions
        function deleteTransaction(id) {
            dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
            });
        }

        function addTransaction(transaction) {
            dispatch({
              type: 'ADD_TRANSACTION',
              payload: transaction
            });
          }

              // FsetTasksind task
    const findItem = id => {
        const item = state.find(task => task.id === id)
    
        setEditItem(item)
      }

      return (<globalContext.Provider value={{
        initialState: state,
        deleteTransaction,
        addTransaction,
        findItem,
        editItem,
        setEditItem
        }}>
            {children}
    </globalContext.Provider>
    )

}