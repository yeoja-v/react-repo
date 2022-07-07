import { BUY_COOKIE, RETURN_COOKIE, RESET_COOKIE } from "./cookieTypes";

const initialState = {
    numOfCookies: 144
}

const cookieReducer = (state = initialState , action) => {
    switch (action.type) {
        case BUY_COOKIE:
            return { ...state, numOfCookies: state.numOfCookies - 1 }
        case RETURN_COOKIE:
            return { ...state, numOfCookies: state.numOfCookies + 1 }
        case RESET_COOKIE:
            return { numOfCookies: 144 }
        default:
            return state
    }
}

export default cookieReducer