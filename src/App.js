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
  addPizza = (nombre) => {

    function getOccurrence(array, value) {
      return array.filter((v) => (v === value)).length;
    }
    //Hay que sumarle uno porque por defecto empieza desde cero el length
    console.log(1 + getOccurrence(this.state.list, nombre));
    // let a = 1 + getOccurrence(this.state.list, nombre);

    // let b = a+nombre;
    // console.log(1 + getOccurrence(this.state.list, b));


    // if (this.state.list.includes(nombre)) {
    //   this.setState(previousState => ({
    //     list: [...previousState.list, nombre]
    //   }));
    // }
    this.setState(previousState => ({
    list: [...previousState.list, nombre]  
    }));
    // Añadir nombre de pizza al array
    // this.setState(previousState => ({
    //   list: [...previousState.list, nombre]
    // }));
    // Sumar uno al estado del articulo
    this.setState({ articulos: this.state.articulos + 1 });


    console.log(this.state.list)
    console.log("PRUEBA: " + this.state.prueba);

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
