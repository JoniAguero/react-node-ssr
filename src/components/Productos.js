import React, { Component } from 'react'

import Producto from './Producto';

import { connect } from 'react-redux';
import { fetchProductos } from '../actions/productosActions';

class Productos extends Component {

  componentDidMount() {
    this.props.fetchProductos();
  }

  render() {
    const {productos} = this.props;
    return (
      <div className="mt-5">
        <table className="table table-hover text-center">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(productos).map(producto => (
              <Producto info={productos[producto]}
                key={producto} />
            ))}
        </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    productos: state.listado.productos
})
 
export default connect(mapStateToProps, { fetchProductos })(Productos);
