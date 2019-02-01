import React, { Component } from "react";

import axios from 'axios';

import Pizzas from '../pizzas/Pizzas';
import PizzaMitades from '../pizzaMitades/pizzaMitades';
import PizzaIngredientes from '../pizzaIngredientes/pizzaIngredientes';

export class ListaPizzas extends Component {

  state = {
    pizzas: [],
    ingredientes: []
  }
  
  componentDidMount() {
    axios.get('http://localhost:3006/pizzas')
    .then(response => {
      //Los datos recibidos van al estado pizzas, que después será mapeado
      this.setState({
        pizzas: response.data
      })
    })
    axios.get('http://localhost:3006/ingredientes')
    .then(response => {
      //Los datos recibidos van al estado ingredientes, que después será mapeado
      this.setState({
        ingredientes: response.data
      })
    })
}

  render (){
    return (
      <div className="row">
        {this.state.pizzas.map((pizza) =>
          <Pizzas 
          key = {pizza._id}
          id = {pizza._id}
          nombre = {pizza.nombre}
          ingredientes = {pizza.ingredientes}
          precio = {pizza.precio}
          foto = {pizza.foto}
          addPizza = {this.props.addPizza}
          />
          )}

          <PizzaMitades 
          addPizza = {this.props.addPizza}
          pizzas = {this.state.pizzas}
          />
          <PizzaIngredientes 
          ingredientes = {this.state.ingredientes.map((ingrediente) => ingrediente.nombre)}
          addPizza = {this.props.addPizza}
          />
      </div>
    )
  }

}


export default ListaPizzas;

