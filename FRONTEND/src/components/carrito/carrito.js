import React, { Component } from "react";

import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
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
      isOpen: false,
      modal: false
    };
  }

  toggle() {
    this.setState({
      // isOpen: !this.state.isOpen
      modal: !this.state.modal
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
                  {this.props.articulos} {this.props.pizzas}
                  <button
                    onClick={this.toggle}
                    // type="button"
                    // data-toggle="collapse"
                    // data-target="#collapseExample"
                    // aria-expanded="false"
                    // aria-controls="collapseExample"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </button>
                </NavLink>
                <div class="collapse" id="collapseExample">
                  <div className="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </div>
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Carrito;
