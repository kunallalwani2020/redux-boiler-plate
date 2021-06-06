import {combineReducers} from'redux';
import App_reducer from'./App_reducer';
export default combineReducers({
    app:App_reducer,
})