import {createStore } from 'redux'
import cookieReducer from './cookie/cookieReducer'
import pizzaReducer from './pizza/pizzaReducer'
import userReducer from './user/userReducer'

export const store = createStore(userReducer)