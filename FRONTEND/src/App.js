import React, { Component } from "react";
import "./App.css";

//Components
import Carrito from "./components/carrito/carrito";
import ListaPizzas from "./components/listaPizzas/ListaPizzas";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articulos: 0,
      list: [],
      // prueba: 0
    };
  }

  //AÑADIR ARTICULOS
  addPizza = (nombre, precio, size, qty) => {

    function getOccurrence(array, value) {
      return array.filter((v) => (v === value)).length;
    }
    //Hay que sumarle uno porque por defecto empieza desde cero el length
    console.log(1 + getOccurrence(this.state.list, nombre));

    this.setState(previousState => ({
    list: [...previousState.list,{nombre, precio, size, qty}]  
    }));

    this.setState({ articulos: this.state.articulos + 1 });

    console.log(this.state.list)

  }


  render() {
    return (
      <div className="App">
        <Carrito articulos={this.state.articulos} pizzas={this.state.list} />
        <h3>Todos nuestros ingredientes son veganos (incluso la carne)</h3>
        {/* <button onClick={this.addItem}>PRUEBA SUMAR ITEM</button> */}
        <div className="container">
          <ListaPizzas add={this.addItem} addPizza={this.addPizza} />
        </div>
      </div>
    );
  }
}

export default App;
