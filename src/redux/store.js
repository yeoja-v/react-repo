import {createStore, combineReducers } from 'redux'
import cookieReducer from './cookie/cookieReducer'
import pizzaReducer from './pizza/pizzaReducer'
import userReducer from './user/userReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import profileUserReducer from './profileUser/profileUserReducer'

const rootReducer = combineReducers({
    pizza: pizzaReducer,
    user: userReducer,
    profileUser: profileUserReducer
})

export const store = createStore(rootReducer, composeWithDevTools())