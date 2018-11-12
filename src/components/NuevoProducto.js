import React, { Component } from 'react';
import { Link } from  'react-router-dom';

import { connect } from 'react-redux';
import { editProductoById } from '../actions/productosActions';

class NuevoProducto extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      nombre: '',
      precio: ''
    }
  }

  showError = () => {
    return (
        <div className="alert alert-dismissible alert-danger mt-2">
          <strong>Error!</strong> Complete todos los datos, por favor.
        </div>
    )
  }

  changeNombre = (e) => {
    this.setState({nombre: e.target.value})
  }

  changePrecio = (e) => {
    this.setState({precio: e.target.value})
  }

  submit = (e) => {
    e.preventDefault();
    const { nombre, precio } = this.state;

    if( nombre === '' || precio === '') {
      this.setState({error: true})
    } else {
      this.setState({error: false})

      const PRODUCTO = {
        nombre,
        precio
      }

      this.props.editProductoById(PRODUCTO);

      this.props.history.push('/');
    }
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <fieldset className="mt-5">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" className="form-control" id="nombre" placeholder="Nombre del Producto" onChange={this.changeNombre} />
          </div>
          <div className="form-group">
            <label>Precio</label>
            <input type="number" className="form-control" id="precio" placeholder="Precio del Producto" onChange={this.changePrecio} />
          </div>
        </fieldset>
        <Link to={'/'} className="btn btn-danger mr-2">Cancelar</Link>
        <button type="submit" className="btn btn-primary">Crear</button>
        <div>{ this.state.error === true ? this.showError() : null }</div>
      </form>
    )
  }
}
 
export default connect(null, { editProductoById })(NuevoProducto);
