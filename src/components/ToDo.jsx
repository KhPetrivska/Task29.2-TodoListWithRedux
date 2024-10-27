import React, {UseState, useEffect} from "react";
import { useFormik } from "formik";
import addTask from "../redux/actions/addTask.js"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import './todo.css'

const ToDo = () => {



const dispatch = useDispatch()
const tasks = useSelector(state => state.tasks); 
const [taskLength, setTaskLength] = useState(0);

useEffect(() => {
    setTaskLength(tasks.length); 
}, [tasks]);


    const formik = useFormik({
        initialValues: {
            taskDescription: ''
        },
        onSubmit: (values) => {

  const newTask = {
    id: Date.now(), 
        taskDescription: values.taskDescription
  }
            dispatch(addTask(newTask.id, newTask.taskDescription))
            formik.resetForm(); 


        },
        validate: values => {
            let errors = {}
            if (!values.taskDescription) {
                errors.taskDescription = "Do not add this field empty!"
            }else if (values.taskDescription.length < 5 ) {
                errors.taskDescription = "Task must be at least 5 characters"
            }
            return errors
            }

    }) 

   
  
    return(
<div className="main-container">
    <h2 className="title">TO DO LIST</h2>
<form className="form" onSubmit={formik.handleSubmit}>
    <input className="task-input"
    name="taskDescription"
    type="text"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.taskDescription || ''}/>
        <button className="button" type="submit">Add</button>
       {formik.errors.taskDescription && formik.touched.taskDescription && (
        <div className="main-container"  style={{ color: "red" }}>{formik.errors.taskDescription}</div>
      )}
   </form>
   <div className="added-tasks">
   <ul className="task-list-container">
          {tasks.slice().reverse().map((task) => (
            <li  className="task-list-item" key={task.id}>{task.taskDescription}</li> 
        ))}
      </ul>
   </div>
   <span>Total: {taskLength}</span>
</div>
    )
}

export default ToDo