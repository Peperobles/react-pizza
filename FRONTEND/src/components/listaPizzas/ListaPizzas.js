import React, { Component } from "react";

// import pizzas from '../../data/pizzas.json';

import axios from 'axios';

import Pizzas from '../pizzas/Pizzas';

export class ListaPizzas extends Component {

  state = {
    posts: []
  }
  
  componentDidMount() {
    axios.get('http://localhost:3006/tareas')
    .then(response => {
      //Los datos recibidos van al estado post, que después será mapeado
      this.setState({
        posts: response.data
      })
    })
}

  render (){

    return (
      <div className="row">
        {this.state.posts.map((pizza) =>
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
      </div>
    )
  }

}


export default ListaPizzas;

