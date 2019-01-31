import React, { Component } from 'react'

import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

// import './pizzaMitades.css'


export class PizzaIngredientes extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
      size: "mediana",
      qty: 1,
      ing1: "Salsa de Tomate",
      ing2: "--",
      ing3: "--",
      ing4: "--",
      ing5: "--",
      nombre: "Pizza Ingredientes",
      price: 20
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
  handleIng1 = (event) => {
    this.setState({
        ing1: event.target.value
    })
  }
  handleIng2 = (event) => {
    this.setState({
        ing2: event.target.value
    })
  }
  handleIng3 = (event) => {
    this.setState({
        ing3: event.target.value
    })
  }
  handleIng4 = (event) => {
    this.setState({
        ing4: event.target.value
    })
  }
  handleIng5 = (event) => {
    this.setState({
        ing5: event.target.value
    })
  }

  render() {
    return (
        <div>
            <div className="col shadow p-3 mb-5 bg-white rounded m-1">
          <div id="pizza-mitades">
            <img src="http://www.buscorestaurantes.com/files/images/Dominos-Pizza--Cordoba-70278.jpg" alt={this.nombre} />
            <p>Pizza por ingredientes</p>
            <p>PRECIO: {this.state.price} €</p>
            <Button
              id={"Popover-Ingredientes"}
              type="button"
              className="btn btn-dark"
            >
              ELEGIR INGREDIENTES 
          </Button>
            <Popover
              placement="top"
              isOpen={this.state.popoverOpen}
              target={"Popover-Ingredientes"}
              toggle={this.toggle}
              trigger="legacy"
            >
              <PopoverHeader className="text-center">{this.nombre}</PopoverHeader>
              <PopoverBody>
                  Ingrediente 1:
                  <br/>
                  <select onChange={this.handleIng1}>
                  {this.props.ingredientes.map((nombre, index) =>(
                      <option key={index} value={nombre}>{nombre}</option>
                  ))}
                  </select>
                  <br/>
                  Ingrediente 2:
                  <br/>
                  <select onChange={this.handleIng2}>
                  {this.props.ingredientes.map((nombre, index) =>(
                      <option key={index} value={nombre}>{nombre}</option>
                  ))}
                  </select>
                  <br/>
                  Ingrediente 3:
                  <br/>
                  <select onChange={this.handleIng3}>
                  {this.props.ingredientes.map((nombre, index) =>(
                      <option key={index} value={nombre}>{nombre}</option>
                  ))}
                  </select>
                  <br/>
                  Ingrediente 4:
                  <br/>
                  <select onChange={this.handleIng4}>
                  {this.props.ingredientes.map((nombre, index) =>(
                      <option key={index} value={nombre}>{nombre}</option>
                  ))}
                  </select>
                  <br/>
                  Ingrediente 5:
                  <br/>
                  <select onChange={this.handleIng5}>
                  {this.props.ingredientes.map((nombre, index) =>(
                      <option key={index} value={nombre}>{nombre}</option>
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

              <button
                className="btn btn-danger col"
                id={this.id}
                onClick={this.props.addPizza.bind(this, ["Ing 1: "+this.state.ing1 +" - Ing 2: "+ this.state.ing2 + " - Ing 3: "+this.state.ing3 + " - Ing 4: " + this.state.ing4 + " - Ing 5: "+this.state.ing5], this.state.price, this.state.size, this.state.qty)}
              >
                COMPRAR
            </button>
            </Popover>
          </div>
        </div>




            
        </div>
    )


  }
}

export default PizzaIngredientes
