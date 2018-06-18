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
        <Navbar light expand="md" style={{'backgroundColor': '#290004'}}>
          <Container>
              <NavbarBrand style={{'color': '#efe7e7'}} href="/"><b>Silna spójność grafów</b></NavbarBrand>
          <NavbarToggler />
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default Header;