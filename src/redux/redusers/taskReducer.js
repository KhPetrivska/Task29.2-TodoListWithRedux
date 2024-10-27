const initialState = {
    tasks: [],
  };
  
  export default (previousState = initialState, action) => {
    switch(action.type) {
      case "ADD_TASK": {
        return {
          ...previousState, 
          tasks: [...previousState.tasks, action.payload], 
        };
      }
      default: 
        return previousState; 
    }
  };