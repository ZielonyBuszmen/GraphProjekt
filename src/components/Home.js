import React from 'react'
import { connect } from 'react-redux'
import { increment } from '../actions/actionCreators';
import MacierzSasiedztwa from './MacierzSasiedztwa';

class Home extends React.Component {
  render() {
    return <div>
      <h1>Home</h1>
      <p>Welcome home!</p>
      <br/>
      <MacierzSasiedztwa size={4} />
      <br/>
      Pierwszy licznik <b>{this.props.likes.jeden}</b>
      <button onClick={this.props.zwiekszLicznikJeden}>Wiecyj</button>
      <br/>

      Drugi licznik <b>{this.props.likes.dwa}</b>
      <button onClick={this.props.zwiekszLicznikDwa}>Wiecyj</button>
      <hr/>
      {this.props.matrix}
    </div>;
  }

};


const mapStateToProps = (state) => {
  return {
    likes: state.likes,
    matrix: state.matrix,
  };
};

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   changePage: () => push('/about-us')
// }, dispatch);

const mapDispatchToProps = (dispatch) => {
  return {
    zwiekszLicznikJeden: () => dispatch(increment('jeden', 'ble')),
    zwiekszLicznikDwa: () => dispatch(increment('dwa', 'ble')),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);