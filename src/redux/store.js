import {createStore } from 'redux'
import cookieReducer from './cookie/cookieReducer'
import pizzaReducer from './pizza/pizzaReducer'

export const store = createStore(pizzaReducer)