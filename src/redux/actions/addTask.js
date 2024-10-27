
const addTask =  (id, taskDescription) => ({
  type: "ADD_TASK",
  payload: {
    id,
    taskDescription,
  },
});
export default addTask