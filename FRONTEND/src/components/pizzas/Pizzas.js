import React, { Component } from "react";

import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

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
    console.log(event.target.value)
    this.setState({
      size: event.target.value
    })    
  }
  handleQty = (event) => {
    this.setState({
      qty: event.target.value
    })
  }

  render() {
    //Pasar array de ingredientes a string.
    const ingredientesMapeados = this.props.ingredientes.toString();
    if (this.state.size === "Familiar"){
      console.log("HOLA")
    } 

    return (
      <div className="col shadow p-3 mb-5 bg-white rounded m-1">
        <div id={this.id}>
          <img src={this.foto} alt={this.nombre} />
          <p>{this.nombre}</p>
          <p>PRECIO: {this.precio} €</p>
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
              onClick={this.props.addPizza.bind(this, this.nombre, this.precio, this.state.size, this.state.qty)}
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
