import { combineReducers } from 'redux';
import childReducer from './childReducer';
import secondReducer from './secondReducer';


//import and add more child reducers as your project builds.
export default combineReducers({
 childReducer, secondReducer
});