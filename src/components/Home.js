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

    return <div className='mt-4'>
      <p>Silnie spójna składowa jest maksymalnym podgrafem, w którym istnieją ścieżki pomiędzy każdymi dwoma wierzchołkami.
          Jeśli podgraf ten obejmuje wszystkie wierzchołki grafu, to mówimy, że dany graf skierowany jest silnie spójny (w grafach nieskierowanych każdy graf spójny jest również silnie spójny).
          Aby sprawdzić czy graf jest silnie spójny podaj liczbę wierzchołków, a później uzupełnij macierz sąsiedztwa lub listę sąsiedztw.</p>
      <br/>
      <a href='' className='btn mb-4' style={{'color': '#ffffff','backgroundColor': '#6B0F19'}}>Rozpocznij od nowa!</a>

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
              <b>Macierz sąsiedztwa:</b>
              <MacierzSasiedztwa size={graphSize}/>
              <hr/>
            </Col>
            <Col md='4'>
              <b>Listy sąsiedztwa:</b>
              <ListySasiedztwa/>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <ConnectivityButtonChecker/><br/><br/><br/>
        </Col>
      </Row>
          Autorzy: Krzysztof Komar i Patrycja Madyda (Informatyka rok II, semestr IV)
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