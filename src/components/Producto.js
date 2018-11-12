import React, { Component } from 'react';
import { Link } from  'react-router-dom';

import { connect } from 'react-redux';
import { deleteProductoById } from '../actions/productosActions';

class Producto extends Component {

  deleteProducto = () => {
    const {id} = this.props.info;
    console.log('Eliminando: ', id);
    this.props.deleteProductoById(id);
  }

  render() {
    const {id, nombre, precio} = this.props.info;
    return (
      <tr className="table-warning">
        <th scope="row">{id}</th>
        <td>{nombre}</td>
        <td>{precio}</td>
        <td>
          <Link to={`/productos/editar/${id}`} className="btn btn-success mr-1">Editar</Link>
          <button type="button" className="btn btn-danger" onClick={this.deleteProducto} >Eliminar</button>
        </td>
      </tr>
    )
  }
}
 
export default connect(null, { deleteProductoById })(Producto);

