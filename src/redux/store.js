import {createStore } from 'redux'
import pizzaReducer from './pizza/pizzaReducer'

export const store = createStore(pizzaReducer)