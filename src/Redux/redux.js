import {combineReducers, legacy_createStore} from "redux";
import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';


let redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
})

let store = legacy_createStore(redusers);

export default store;


// import profileReducer from './reducers/profileReducer';
// import messagesReducer from './reducers/messagesReducer';
// import { configureStore } from 'redux/toolkit';

// let store = configureStore({
//     reducer: {
//         profilePage: profileReducer,
//         messagesPage: messagesReducer,
//     }
// });
// export default store;