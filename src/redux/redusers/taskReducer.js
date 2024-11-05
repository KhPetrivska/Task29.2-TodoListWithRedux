import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  EDIT_TASK,
  CLEAR_COMPLETED,
} from "../actions/actionTypes";

const initialState = {
  tasks: [],
  error: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
     

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, taskDescription: action.payload.taskDescription }
            : task
        ),
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.filter((task) => !task.completed),
      };
    default:
      return state;
  }
};

export default taskReducer;
