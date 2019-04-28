import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import {userStore} from "./user"

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  userStore: persistReducer(persistConfig, userStore)
});

export default rootReducer;
