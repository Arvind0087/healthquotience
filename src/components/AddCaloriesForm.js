import { useState, useEffect } from "react"
import {useContext} from 'react'
import uuid from 'react-uuid'
import {globalContext} from '../context/GlobalState'

const AddCaloriesForm = ({toogle, setToogle}) => {

  const {addTransaction, initialState, editItem, setEditItem} = useContext (globalContext)

  //const time = new Date();class
    //const cTime = time.getHours() + ":" + time.getMinutes()
    //setInterval(cTime, 1000)
    //console.log(cTime)

    //console.log(editItem.types)

    var date = new Date();
    var options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
    };
    var cTime = date.toLocaleString('en-US', options);
    //console.log(timeString);

  //const [title, setTitle] = useState('')

    // Edit task
    const editTask = (id) => {
        const newTasks = initialState.map(task => (task.id === id ? { ...data, types:editItem.types } : task))
    
        //console.log(editItem.types)
    
        setData(newTasks)
        setEditItem(null)
      }

    const [data, setData] = useState ({
        types: "",
        desc: "",
        calories: "",
        ctime: cTime,
       });


            //    // Edit task
            //    const editTask = (types, desc, calories, ctime, id) => {
            //     const newTasks = initialState.map(task => (task.id === id ? { types, desc, calories, ctime, id } : initialState))
    
            //     //console.log(types)
    
            //     setData(newTasks)
            //     setEditItem(null)
            // }
            
       const InputChange = (e) => {
            const {name, value} = e.target;
            if (!editItem) {
                setData((preval) => {
                    return {
                        ...preval,
                        id: uuid(),
                        ctime: cTime,
                        [name]: value,
                    }
                })
            }else{
                editTask(editItem.id)
            }
        }

        const formSubmit = (e) => {
            e.preventDefault();
            addTransaction(data)
            //console.log(data)
        };

   

    useEffect(() => {
        if (editItem) {
            setData(editItem)
          //console.log(editItem)
        } else {
            setData('')
        }
      }, [editItem])
    
    return (
            <>
           
                <div className="container">
                    <div className="main">
                          <form onSubmit={formSubmit}>
                        <div className="mb-1">
                                <label className="form-label">Type:</label>
                                <select name="types" 
                                    value={data.types}
                                    onChange={InputChange}>
                                    <option>Please Select...</option>
                                    <option>Food</option>
                                    <option>Exercise</option>
                                </select>
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Description:</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"
                                name="desc" 
                                value={data.desc} 
                                onChange={InputChange} required>
                                </textarea>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Calories</label>
                                <input type="number" className="form-control" id="exampleFormControlInput"
                                name="calories" 
                                value={data.calories} 
                                onChange={InputChange} required/>
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Time</label>
                                <input type="text" className="form-control" id="exampleFormControlInput3"
                                name="ctime" 
                                value={cTime} 
                                onChange={InputChange} placeholder="1:40 PM" />
                            </div>

                            <div className="button-container">
                                <button className="submit-btn" type="submit">{editItem ? 'Edit Task' : 'Add Task'}</button>
                                <button className="delete-btn1" type="button" onClick={()=>setToogle(!toogle)}>Cancel</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </>
        )
}
export default AddCaloriesForm;