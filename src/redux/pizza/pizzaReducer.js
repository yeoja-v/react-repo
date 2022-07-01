import { BUY_PIZZA, RETURN_PIZZA, RESET_PIZZA} from './pizzaTypes'

const initialState = {
    numOfPizza: 50,
}

const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PIZZA:
            return { ...state, numOfPizza: state.numOfPizza - 1 }
        
        case RETURN_PIZZA:
            return { ...state, numOfPizza: state.numOfPizza + 1 }

        case RESET_PIZZA:
            return { numOfPizza: 50 }  
            
        default:
            return state    
    }
}

export default pizzaReducer