import {createStore} from 'redux'
import reducer from'./reduce'
const initialState ={
    count:2
}
let store = createStore(reducer,initialState)
export default store;