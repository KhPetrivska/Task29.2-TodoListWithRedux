import { Provider } from "react-redux";
import ToDo from "./components/ToDo";
import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";

import rootReducer from "./redux/redusers/taskReducer.js";

function App() {
  //const [count, setCount] = useState(0)
  const initialState = {
    tasks: [],
  };

  const store = createStore(rootReducer, initialState);

  return (
    <Provider store={store}>
      <ToDo />
    </Provider>
  );
}

export default App;
