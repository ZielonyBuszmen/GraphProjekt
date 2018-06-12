import React from 'react'
import { connect } from 'react-redux'
import MacierzSasiedztwa from './MacierzSasiedztwa';
import ListySasiedztwa from './ListySasiedztwa';
import { Row, Col, Button } from 'reactstrap';
import ConnectivityButtonChecker from './ConnectivityButtonChecker';
import '../css/style.css';
import BlockMask from './BlockMask';
import VertexQuantityInput from './VertexQuantityInput';

class Home extends React.Component {

  render() {
    const {graphSize} = this.props;

    return <div>
      <h1>Home</h1>
      <p>Welcome home!</p>
      <br/>
      <Row>
        <Col>
          <BlockMask/>
          <Row>
            <Col>
              <VertexQuantityInput/>
            </Col>
          </Row>
          <Row>
            <Col md='8'>
              <MacierzSasiedztwa size={graphSize}/>
            </Col>
            <Col md='4'>
              <ListySasiedztwa/>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <ConnectivityButtonChecker/>
        </Col>
      </Row>
    </div>;
  }

}


const mapStateToProps = (state) => {
  return {
    likes: state.likes,
    matrix: state.matrix,
    graphSize: state.graphSize,
  };
};

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   changePage: () => push('/about-us')
// }, dispatch);

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);