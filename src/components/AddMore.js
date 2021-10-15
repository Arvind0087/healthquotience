import {useState} from 'react'
import AddCaloriesForm from './AddCaloriesForm'

function AddMore() {
  const [toogle, setToogle] = useState(false)
  return (
    <>
      <button className="btn btn-default" onClick={() =>setToogle(!toogle) }>Add More</button>
      {toogle && <AddCaloriesForm toogle={toogle} setToogle={setToogle}/>}
    </>
  )
}

export default AddMore
