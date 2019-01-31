import React, { Component } from 'react'

import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

import './pizzaMitades.css'


export class PizzaMitades extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
      size: "mediana",
      qty: 1,
      mitad1: "De la Huerta",
      mitad2: "De la Huerta",
      nombre: "Pizza Personalizada",
      price: 25
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
    this.setState({
      qty: event.target.value
    })
  }
  handleMitad1 = (event) => {
    this.setState({
      mitad1: event.target.value
    })
  }
  handleMitad2 = (event) => {
    this.setState({
      mitad2: event.target.value
    })
  }

  render() {
    return (
      <div>
        <div className="col shadow p-3 mb-5 bg-white rounded m-1">
          <div id="pizza-mitades">
            <img src="https://www.scoozipizza.com/wp-content/uploads/2018/07/MAIN-3.png" alt={this.nombre} />
            <p>Pizza por mitades</p>
            <p>PRECIO: {this.state.price} €</p>
            <Button
              id={"Popover-" + this.props.id}
              type="button"
              className="btn btn-dark"
            >
              ELEGIR MITADES 
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
                Mitad 1:
                <br/>
                <select name="" id="" onChange={this.handleMitad2}>
                  {this.props.pizzasNombres.map((nombre, index) => (
                    <option key = {index} value={nombre}>{nombre}</option>
                  ))}                  
                </select>                 
                <br/>
                Mitad 2:
                <br/>
                <select name="" id="" onChange={this.handleMitad2}>
                  {this.props.pizzasNombres.map((nombre, index) => (
                    <option key = {index} value={nombre}>{nombre}</option>
                  ))}                  
                </select>
                <br/>
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

              <Button
                className="btn btn-danger col"
                id={this.id}
                onClick={this.props.addPizza.bind(this, ["Mitad 1: "+this.state.mitad1 +" - Mitad 2: "+ this.state.mitad2], this.state.price, this.state.size, this.state.qty)}
              >
                COMPRAR
            </Button>
            </Popover>
          </div>
        </div>


      </div>


    )


  }
}

export default PizzaMitades
