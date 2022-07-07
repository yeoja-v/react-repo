import { ADD_USER, REMOVE_USER, RESET_USER } from "./userTypes"


const initialState = []

const userReducer = (state = initialState, action) => {
    const actionObj = {
        type: ADD_USER,
        payload: "user2"
    }

    switch (action.type) {
        case ADD_USER:
            return [...state, action.payload]

        case REMOVE_USER:
           return state.filter(user => user !== action.payload )

        case RESET_USER:
            return []

        default:
            return state
    }
}

export default userReducer