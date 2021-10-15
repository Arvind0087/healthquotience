import {useContext} from 'react'
import {globalContext} from '../context/GlobalState'

function HistoryTable({types, desc, calories, ctime, id}) {

  const {deleteTransaction, findItem} = useContext (globalContext)



 // useEffect(()=>{
  //   setEditItem(initialState)
  // },[initialState])

//console.log(editItem)

  return (
    <>
        <tr><td>{types}</td>
          <td>{desc}</td>
          <td>{calories}</td>
          <td>{ctime}</td>
          <td><button className="edit-btn" onClick={() => findItem(id)}>Edit</button></td>
           <td><button className="del-btn" onClick={() => deleteTransaction(id)}>Delete</button></td>
          </tr>
    </>
  )
}

export default HistoryTable
