import React, { Component } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

//Componentes
// import Mostrar from '../mostrar/Mostrar';

// import React from 'react'

// const Carrito = (props) => {
//     return <span>{props.articulos}<button onClick=""><FontAwesomeIcon icon={faShoppingCart}/></button></span>
// }

// export default Carrito

class Carrito extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  mostrarContainer = () => {
    let caja = document.getElementById("container");
    caja.style.display = "block";
    // console.log(caja);
  };
  cerrarContainer = () => {
    let caja = document.getElementById("container");
    caja.style.display = "none";
  };
  render() {
    return (
      <div>
        {/* <div>
        <span>COMPRA </span>{this.props.articulos}<button onClick={this.mostrarContainer}><FontAwesomeIcon icon={faShoppingCart}/></button>
        <div id = "container" style={{display: "none"}}>
            <Mostrar/>
            <button onClick={this.cerrarContainer}><FontAwesomeIcon icon={faArrowUp}/></button>
        </div>
      </div> */}
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">PIZZERIA</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  {this.props.articulos}{this.props.pizzas}
                  <button onClick={this.toggle}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Carrito;
