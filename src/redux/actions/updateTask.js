import {
  ADD_TASK,
  ADD_TASK_ERROR,
  ADD_TASK_SUCCESS,
  DELETE_TASK,
  TOGGLE_TASK,
  EDIT_TASK,
  CLEAR_COMPLETED,
} from "./actionTypes";

export const addTask = (id, taskDescription) => ({
  type: ADD_TASK,
  payload: { id, taskDescription, completed: false },
});

export const addTaskError = (error) => ({
  type: ADD_TASK_ERROR,
  payload: error,
});

export const addTaskSuccess = (task) => ({
  type: ADD_TASK_SUCCESS,
  payload: task,
});

// export const loadTask = () => ({
//   type:LOAD_TASK,
//   payload: {id, taskDescription}
// })

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const editTask = (id, taskDescription) => ({
  type: EDIT_TASK,
  payload: { id, taskDescription },
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
});
