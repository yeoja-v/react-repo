import { BUY_COOKIE, RETURN_COOKIE, RESET_COOKIE} from './cookieTypes'

export const buyCookie = () => {
    return {
    type: BUY_COOKIE
    }
}

export const returnCookie = () => {
    return {
        type: RETURN_COOKIE
    }
}

 export const resetCookie = () => {
    return {
        type: RESET_COOKIE
    }
    
}