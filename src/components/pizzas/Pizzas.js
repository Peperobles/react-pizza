import React, { Component } from "react";
// import "../../add/css/bootstrap.min.css";

import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

//COMPONENTE
// import Carrito from '../carrito/carrito';

export class Pizzas extends Component {
  constructor(props) {
    super(props);
    const { id, nombre, ingredientes, precio, foto } = props;

    this.id = id;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
    this.foto = foto;

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
      size: "mediana",
      qty: 1
    };
  }
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  handleSize = (event) => {
    this.setState({
      size: event.target.value
    })
  }
  handleQty = (event) => {
    console.log(event.target.value)
    this.setState({
      qty: event.target.value
    })
  }

  render() {
    //Pasar array de ingredientes a string.
    const ingredientesMapeados = this.props.ingredientes.toString();

    return (
      <div className="col shadow p-3 mb-5 bg-white rounded m-1">
        <div id={this.id}>
          <img src={this.foto} alt={this.nombre} />
          <p>{this.nombre}</p>
          {/* <p>INGREDIENTES: {this.ingredientes}</p> */}
          <p>PRECIO: {this.precio}</p>
          <Button
            id={"Popover-" + this.props.id}
            type="button"
            className="btn btn-dark"
          >
            VER PIZZA
          </Button>
          <Popover
            placement="top"
            isOpen={this.state.popoverOpen}
            target={"Popover-" + this.props.id}
            toggle={this.toggle}
            trigger="legacy"
          >
            <PopoverHeader className="text-center">{this.nombre}</PopoverHeader>
            <PopoverBody>
              {/* {this.ingredientes}
             */}
             {ingredientesMapeados}
              <br/>
              <select name="" id="" onChange={this.handleSize}>
                <option value="Mediana">Mediana</option> 
                <option value="Familiar">Familiar</option>
              </select>
              <select name="" id="" onChange={this.handleQty}>
                <option value="1">1</option> 
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </PopoverBody>

            <button
              className="btn btn-danger col"
              id={this.id}
              // onClick={this.props.add}
              // onClick={this.props.addPizza.bind(this, this.nombre)}
              //CAMBIAR FUNCION PARA PASAR EL ESTADo QUE SEA UN OBJETO DE SIZE, QTY Y NOPMBRE
              // onClick={() => this.props.addPizza({this.})}

              // title={this.nombre}
            >
              COMPRAR
            </button>
          </Popover>
        </div>
      </div>
    );
  }
}

export default Pizzas;
