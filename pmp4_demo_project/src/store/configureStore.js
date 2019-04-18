import {createStore,combineReducers} from 'redux';
import itemsReducer from './reducers/Items';

const rootReducer = combineReducers({
    Items:itemsReducer
});
const configureStore =()=>{
    return createStore(rootReducer);
};

export default configureStore;