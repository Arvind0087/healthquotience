import {useContext} from 'react'
import {globalContext} from '../context/GlobalState'

import HistoryTable from './HistoryTable'

function History() {
  const {initialState} = useContext (globalContext)
  return (
    <>
    <table>
      {
          initialState.map((data, index) =>{
            return <HistoryTable key={index} id={data.id} {...data}/>
          })
      }
    </table>      
    </>
  )
}

export default History
