import React from 'react';
import { Row, Col, Button, Alert} from 'reactstrap';
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

      const successMessage = <Alert  className="alert-success"><b>Graf jest silnie spójny!</b></Alert>;
      const failMessage = <Alert className="alert-danger"><b>Graf nie jest silnie spójny.</b></Alert>;

    if (connectivity.blockGraphInputs) {
      return connectivity.isGraphConnected ? successMessage : failMessage
    }
    return null;
  };

  render() {
    return (
      <div>
          {this.messageRenderer()}
        <Button style={{'color': '#ffffff','backgroundColor': '#6B0F19'}} size='lg' onClick={this.checkConnectivityClick}>Sprawdź silną spójność</Button>
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