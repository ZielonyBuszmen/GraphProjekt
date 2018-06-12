import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { blockGraphInputs, checkGraphConnectivity } from '../actions/actionCreators';
import { connect } from 'react-redux';

class ConnectivityButtonChecker extends React.Component {


  constructor() {
    super();
    this.state = {
      checkConnectivityClicked: false
    };
  }

  checkConnectivityClick = () => {
    this.props.checkGraphConnectivity(this.props.matrix);
    this.props.blockGraphInputs(true);
  };

  messageRenderer = () => {
    const {connectivity} = this.props;

    const successMessage = <span>Graf jest silnie spójny!</span>;
    const failMessage = <span>Graf nie jest silnie spójny.</span>;

    if (connectivity.blockGraphInputs) {
      return connectivity.isGraphConnected ? successMessage : failMessage
    }
    return null;
  };

  render() {
    return (
      <div>
        <Button color="primary" size='lg' onClick={this.checkConnectivityClick}>Sprawdź silną spójność</Button>
        {this.messageRenderer()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    connectivity: state.connectivity,
    matrix: state.matrix,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkGraphConnectivity: (matrix) => dispatch(checkGraphConnectivity(matrix)),
    blockGraphInputs: () => dispatch(blockGraphInputs(true)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectivityButtonChecker);