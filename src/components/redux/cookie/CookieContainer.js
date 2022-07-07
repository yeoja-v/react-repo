import { useSelector, useDispatch } from "react-redux"
import { buyCookie, returnCookie, resetCookie } from "../../../redux/cookie/cookieActions"

//1. make cookie container function and access state
//2. create dispatch variable
//3. create event handlers 
//4. give dispatch function with different action creators
//5. attach handler functions to buttons

const CookieContainer = () => {
    const numOfCookies = useSelector((state) => state.numOfCookies)
    const dispatch = useDispatch()

    const buyCookieHandler = () => {
        dispatch(buyCookie())
    }

    const returnCookieHandler = () => {
        dispatch(returnCookie())
    }

    const resetCookieHandler = () => {
        dispatch(resetCookie())
    }

    return (
        <div className="space-y-4">
            <h1 className="text-3xl" ><strong>Cookie BakeShop</strong></h1>
            <div className="text-2xl">Cookies in shop: {numOfCookies}</div>
        <div className="flex flex-col space-y-2 w-1/3 mx-auto">
            <button className="bg-blue-300" onClick={buyCookieHandler}>Buy Cookie</button>
            <button className="bg-red-300" onClick={returnCookieHandler}>Return Cookie</button>
            <button className="bg-green-300" onClick={resetCookieHandler}>Reset Cookies</button>
            </div>
        </div>
    )
}

export default CookieContainer