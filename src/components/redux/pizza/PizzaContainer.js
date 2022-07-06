import { useSelector, useDispatch } from "react-redux/es/exports"
import { buyPizza, returnPizza, resetPizza } from "../../../redux/pizza/pizzaActions"

const PizzaContainer = () => {
    const numOfPizza = useSelector((state) => state.numOfPizza)
    const dispatch = useDispatch()

    const buyPizzaHandler = () => {
        dispatch(buyPizza())
    }

    const returnPizzaHandler = () => {
        dispatch(returnPizza())
    }

    const resetPizzaHandler = () => {
        dispatch(resetPizza())
    }

    return (
    <div className="space-y-4">
        <h1 className="text-3xl"><strong>Pizza Container</strong></h1>
        <div className="text-xl">Pizza in stock: {numOfPizza}</div>
        <div className="flex flex-col space-y-2 w-1/2 mx-auto">
            <button className="bg-emerald-500 text-white px-3 py-2 rounded-md" onClick={buyPizzaHandler}>Buy Pizza</button>
            <button className="bg-red-500 text-white px-3 py-2 rounded-md" onClick={returnPizzaHandler}>Return Pizza</button>
            <button className="bg-indigo-500 text-white px-3 py-2 rounded-md" onClick={resetPizzaHandler}>Reset Number Of Pizza</button>
        </div>
    </div>)
}

export default PizzaContainer