import { Provider } from "react-redux";
import ToDo from "./components/ToDo";
import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./redux/redusers/taskReducer.js";
import rootSaga from "./redux/sagas.js";

function App() {
  //const [count, setCount] = useState(0)
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(sagaMiddleware),
    preloadedState: {
      tasks: [],
    },
  });

  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      <ToDo />
    </Provider>
  );
}

export default App;
