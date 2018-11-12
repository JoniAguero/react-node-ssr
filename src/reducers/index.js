import { combineReducers } from 'redux';

import productosReducer from './productosReducer';

export default combineReducers({
    listado: productosReducer
})