import React from 'react'
import { connect } from 'react-redux'
import { increment } from '../actions/actionCreators';

const Home = (props) => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <br/>
    Pierwszy licznik <b>{props.likes.jeden}</b>
    <button onClick={props.zwiekszLicznikJeden}>Wiecyj</button>
    <br/>

    Drugi licznik <b>{props.likes.dwa}</b>
    <button onClick={props.zwiekszLicznikDwa}>Wiecyj</button>
  </div>
);


const mapStateToProps = (state) => {
  console.log(state);
  return {
    likes: state.likes,
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