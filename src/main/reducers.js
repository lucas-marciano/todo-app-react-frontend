import {combineReducers} from "redux"
import todoReducer from "../todo/reducer"

const rootReducers = combineReducers({
    todo: todoReducer
})

export default rootReducers