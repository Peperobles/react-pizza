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


  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">PIZZERIA</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  {this.props.articulos}
                  <button onClick={this.toggle}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} className="text-center">
            CARRITO
          </ModalHeader>
          <ModalBody>
            {this.props.pizzas.map((pizza, index) => (
              <div key={index}>
                <h6>{pizza.nombre}</h6>
                <p>{pizza.size}</p>
                {pizza.size === 'Familiar'
                  ? <div><p>{pizza.qty} x {pizza.precio * 1.5} €</p></div>
                  : <div><p>{pizza.qty} x {pizza.precio} €</p></div>}


              </div>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              CESTA DE LA COMPRA
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              CERRAR
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Carrito;
