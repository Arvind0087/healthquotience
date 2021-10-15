import {useContext} from 'react'
import {globalContext} from '../context/GlobalState'

function TotalCalories() {
  const {initialState} = useContext (globalContext)

  //console.log(initialState)

  const foodcal = initialState.filter(food=>food.types === 'Food')
    .map(cal=> cal.calories)
    .reduce((acc,item) => (acc += +item), 0)

    const exeCal = initialState.filter(exe=>exe.types === 'Exercise')
    .map(cal=> cal.calories)
    .reduce((acc,item) => (acc += +item), 0)

    const totalCalories = foodcal - exeCal

  //console.log(exeCal)

  return (
    <>
     <p className="total-cal">{totalCalories}</p> 
     <p className="total-caltext">total calories...</p>
    </>
  )
}

export default TotalCalories
