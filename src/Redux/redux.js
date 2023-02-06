import {combineReducers, legacy_createStore} from "redux";
import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';
import usersReducer from "./reducers/usersReducer";


let redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
})

let store = legacy_createStore(redusers);

window.store = store;

export default store;