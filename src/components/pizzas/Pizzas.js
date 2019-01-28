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
      popoverOpen: false
    };
  }
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div  className="col shadow p-3 mb-5 bg-white rounded m-1">
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
            <PopoverBody>{this.ingredientes}</PopoverBody>
            <button
              className="btn btn-danger col"
              id={this.id}
              // onClick={this.props.add}
              onClick={this.props.addPizza.bind(this, this.nombre)}
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
