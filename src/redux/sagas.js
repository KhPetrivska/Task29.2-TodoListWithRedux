import { takeEvery, put } from "redux-saga/effects";
import "./actions/updateTask";
import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  EDIT_TASK,
  CLEAR_COMPLETED,
} from "./actions/actionTypes";
import { addTaskSuccess, addTaskError } from "./actions/updateTask";
function* addTaskSaga(action) {
  try {
    const task = action.payload;
    yield put(addTaskSuccess(task));
  } catch (error) {
    yield put(addTaskError(error));
  }
}

function* deleteTaskSaga(action) {
  yield put({ type: DELETE_TASK, payload: action.payload });
}

function* toggleTaskSaga(action) {
  yield put({ type: TOGGLE_TASK, payload: action.payload });
}

function* editTaskSaga(action) {
  yield put({ type: EDIT_TASK, payload: action.payload });
}

function* clearCompletedSaga() {
  yield put({ type: CLEAR_COMPLETED });
}

export default function* rootSaga() {
  yield takeEvery(ADD_TASK, addTaskSaga);
  yield takeEvery(DELETE_TASK, deleteTaskSaga);
  yield takeEvery(TOGGLE_TASK, toggleTaskSaga);
  yield takeEvery(EDIT_TASK, editTaskSaga);
  yield takeEvery(CLEAR_COMPLETED, clearCompletedSaga);
}
