import React, { Component } from 'react';
import { Link } from  'react-router-dom';

import { connect } from 'react-redux';
import { fetchProductoById, editProductoById } from '../actions/productosActions';

class EditarProducto extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      id: '',
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

  editar = (e) => {
    e.preventDefault();
    const { id, nombre, precio } = this.state;

    if( nombre === '' || precio === '' || id === '') {
      this.setState({error: true})
    } else {
      this.setState({error: false})

      const PRODUCTO = {
        id,
        nombre,
        precio
      }

      this.props.editProductoById(PRODUCTO);

      this.props.history.push('/');
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchProductoById(id);
  }

  componentWillReceiveProps(nextProps) {
    const { id, nombre, precio } = nextProps.productoSelected;
    this.setState({
      id,
      nombre,
      precio
    })
  }

  renderInfo = (producto) => {
    const { id, nombre, precio } = producto;
    return(<form onSubmit={this.editar}>
            <fieldset className="mt-5">
            <div className="form-group">
                <label>ID</label>
                <input type="text" className="form-control" id="ID" value={id} disabled />
              </div>
              <div className="form-group">
                <label>Nombre</label>
                <input type="text" className="form-control" id="nombre" defaultValue={nombre} onChange={this.changeNombre} />
              </div>
              <div className="form-group">
                <label>Precio</label>
                <input type="number" className="form-control" id="precio" defaultValue={precio} onChange={this.changePrecio} />
              </div>
            </fieldset>
            <Link to={'/'} className="btn btn-danger mr-2">Cancelar</Link>
            <button type="submit" className="btn btn-primary">Guardar</button>
            <div>{ this.state.error === true ? this.showError() : null }</div>
          </form>
    )
  }

  renderProgress = () => {
    return (
      <div className="progress mt-5">
        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}></div>
      </div>
    )
  }

  render() {
    return(
      <div>
        {
          this.props.productoSelected !== null ?
          this.renderInfo(this.props.productoSelected) :
          this.renderProgress()
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
    productoSelected: state.listado.productoSelected
})
 
export default connect(mapStateToProps, { fetchProductoById, editProductoById })(EditarProducto);
