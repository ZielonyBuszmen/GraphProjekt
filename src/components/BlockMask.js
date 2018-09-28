import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { blockGraphInputs } from '../actions/actionCreators';

export class BlockMask extends React.Component {

  unlockMask = () => {
    this.props.unlockGraphInputs();
  };

  maskRenderer = () =>
    <div className='block'>
      <Row>
        <Col className='text-center'>
          <Button style={{'color': '#ffffff','backgroundColor': '#ff2953'}} size='lg' onClick={this.unlockMask}>Edycja</Button>
        </Col>
      </Row>
    </div>;

  render() {
    const {blockGraphInputs} = this.props;
    return blockGraphInputs ? this.maskRenderer() : null;
  }
}


const mapStateToProps = (state) => {
  return {
    blockGraphInputs: state.connectivity.blockGraphInputs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    unlockGraphInputs: () => dispatch(blockGraphInputs(false)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlockMask);
