import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoReducer from "../features/todos/todoSlice";

const reducers = combineReducers({
  todos: todoReducer,
});
const persistConfig = {
  key: "root",
  storage,
  // you could add the following:
  // whitelist: ['reducerNameYouWantToPersist']

  // as we do not have that, everything is stored!
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
