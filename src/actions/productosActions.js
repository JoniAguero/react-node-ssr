import {
    FETCH_PRODUCTOS_REQUEST,
    FETCH_PRODUCTOS_SUCCESS,
    FETCH_PRODUCTO_SUCCESS,
    FETCH_PRODUCTO_REQUEST,
    AGREGAR_PRODUCTO,
    DELETE_PRODUCTO,
    EDITAR_PRODUCTO
} from './types';

import axios from 'axios';

export const fetchProductos = () => async dispatch => {
    dispatch({
        type: FETCH_PRODUCTOS_REQUEST
    })
    const respuesta = await axios.get('http://localhost:5000/productos');
    dispatch({
        type: FETCH_PRODUCTOS_SUCCESS,
        payload: respuesta.data
    })
}

export const fetchProductoById = id => async dispatch => {
    dispatch({
        type: FETCH_PRODUCTO_REQUEST
    })
    const respuesta = await axios.get(`http://localhost:5000/productos/${id}`);
    dispatch({
        type: FETCH_PRODUCTO_SUCCESS,
        payload: respuesta.data
    })
}

export const postProducto = (producto) => async dispatch => {
    const respuesta = await axios.post(`http://localhost:5000/productos`, producto);
    dispatch({
        type: AGREGAR_PRODUCTO,
        payload: respuesta.data
    })
}

export const deleteProductoById = (id) => async dispatch => {
    await axios.delete(`http://localhost:5000/productos/${id}`);
    dispatch({
        type: DELETE_PRODUCTO,
        payload: id
    })
}

export const editProductoById = (producto) => async dispatch => {
    const respuesta = await axios.put(`http://localhost:5000/productos/${producto.id}`, producto);
    dispatch({
        type: EDITAR_PRODUCTO,
        payload: respuesta.data
    })
}