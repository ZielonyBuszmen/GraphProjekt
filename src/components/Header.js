import React from 'react';

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Container } from 'reactstrap';

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