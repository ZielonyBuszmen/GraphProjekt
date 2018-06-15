import React from 'react';
import {Route, Link} from 'react-router-dom';
import Home from './Home';
import {Button, Row, Container, Col} from 'reactstrap';
import Header from "./Header";

const App = () => (
  <div style={{'color': '#2c2626','backgroundColor': '#fbefef'}}>
    <header>
      <Header />
    </header>

    <main>
      <Container>
        <Row>
          <Col>
            <Home/>
          </Col>
        </Row>
      </Container>
    </main>
  </div>
);

export default App;