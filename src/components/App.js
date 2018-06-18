import React from 'react';
import Home from './Home';
import { Row, Col } from 'reactstrap';
import Header from './Header';
import { connect } from 'react-redux';


class App extends React.Component {
  render() {

    const containerType = (this.props.graphSize >= 12) ? 'container-fluid' : 'container';

    return (
      <div>
        <header>
          <Header/>
        </header>

        <main>
          <div className={containerType}>
            <Row>
              <Col>
                <Home/>
              </Col>
            </Row>
          </div>
        </main>
      </div>
    );
  }
};


const mapStateToProps = (state) => {
  return {
    graphSize: state.graphSize,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
