import { FETCH_PRODUCTOS_SUCCESS, FETCH_PRODUCTO_SUCCESS, AGREGAR_PRODUCTO, EDITAR_PRODUCTO, DELETE_PRODUCTO } from './../actions/types';

const initialState = {
    productos: [],
    productoSelected: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTOS_SUCCESS:
            return {
                ...state,
                productos: action.payload
            }
        case FETCH_PRODUCTO_SUCCESS:
            return {
                ...state,
                productoSelected: action.payload
            }
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                productos: [...state.productos, action.payload]
            }
        case EDITAR_PRODUCTO:
            return {
                ...state,
                productos: state.productos.map(producto => producto.id === action.payload.id ? producto = action.payload : producto)
            }
            
        case DELETE_PRODUCTO:
            return {
                ...state,
                productos: state.productos.filter((producto) => producto.id !== action.payload)
            }
            
        default:
            return state;
    }
}