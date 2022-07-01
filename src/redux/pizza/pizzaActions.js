import { BUY_PIZZA, RETURN_PIZZA, RESET_PIZZA } from "./pizzaTypes";

// ACTION CREATOR FUNCTIONS RETURNS AN ACTION OBJECT 
export const buyPizza = () => {
    return {
        type: BUY_PIZZA
    }
}

// buyPizza() => { type: BUY_PIZZA }

export const returnPizza = () => {
    return {
        type: RETURN_PIZZA
    }
}

export const resetPizza = () => {
    return {
        type: RESET_PIZZA
    }
}