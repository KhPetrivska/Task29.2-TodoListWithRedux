import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector, connect } from "react-redux";
import {
  addTask,
  deleteTask,
  toggleTask,
  editTask,
  clearCompleted,
} from "../redux/actions/updateTask";
import "./todo.css";

const ToDo = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);

  //const [taskLength, setTaskLength] = useState(0);

  // useEffect(() => {
  //   setTaskLength(tasks.length);
  // }, [tasks]);

  //for check
  useEffect(() => {
    console.log("Tasks has changed:", tasks);
  }, [tasks]);
  //

  const formik = useFormik({
    initialValues: { taskDescription: "" },
    onSubmit: (values) => {
      // debugger;
      if (formik.errors.taskDescription) return;
      else if (values.taskDescription.trim().length < 5) {
        alert("Task must be at least 5 characters");
        return;
      }
      const newTask = {
        id: Date.now(),
        taskDescription: values.taskDescription,
      };
      dispatch(addTask(newTask.id, newTask.taskDescription));
      console.log(tasks);
      formik.resetForm();
    },
  });

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    console.log(tasks);
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  const handleEdit = (id, newDescription) => {
    dispatch(editTask(id, newDescription));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  function updateTaskDescription(task) {
    const newDescription = prompt("New description:", task.taskDescription);
    return newDescription !== null ? newDescription : task.taskDescription;
  }

  return (
    <div className="main-container">
      <h2 className="title">TO DO LIST</h2>
      <form className="form" onSubmit={formik.handleSubmit}>
        <input
          className="task-input"
          name="taskDescription"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.taskDescription}
          placeholder="Enter task description"
        />
        <button className="button" type="submit">
          Add
        </button>
        {formik.errors.taskDescription && formik.touched.taskDescription && (
          <div className="main-container" style={{ color: "red" }}>
            {formik.errors.taskDescription}
          </div>
        )}
      </form>

      <div className="added-tasks">
        <ul className="task-list-container">
          {tasks
            .slice()
            .reverse()
            .map((task) => (
              <li key={task.id} className="task-list-item">
                <div>
                  <label>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggle(task.id)}
                    />
                  </label>
                  <span>{task.taskDescription}</span>
                </div>
                <div className="btns-edit-delete">
                  <button
                    className="button delete-btn icon-btn"
                    onClick={() => handleDelete(task.id)}
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                  <button
                    className="button edit-btn icon-btn"
                    onClick={() =>
                      handleEdit(
                        task.id,
                        prompt("New description:", task.taskDescription)
                      )
                    }
                  >
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="footer-container">
        <button className="button" onClick={handleClearCompleted}>
          Clear Completed
        </button>
        {/* //{<span>Total: {tasks.length}</span>} */}
      </div>
    </div>
  );
};

export default ToDo;
