import React from 'react';
import Home from './Home';
import {Button, Row, Container, Col} from 'reactstrap';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Header extends React.Component {
  render() {
    return(
      <div>
        <Navbar light expand="md" style={{'background-color': '#e3f2fd'}}>
          <Container>
          <NavbarBrand href="/">Nazwa serwisu</NavbarBrand>
          <NavbarToggler />
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default Header;