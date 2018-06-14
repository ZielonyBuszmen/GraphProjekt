import React from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { blockGraphInputs, graphSizeChanged } from '../actions/actionCreators';
import { connect } from 'react-redux';

class VertexQuantityInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      qty: props.graphSize, // domyślna wartość
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let qty = parseInt(this.state.qty) || 0;
    qty = (qty > 20 || qty < 0) ? 0 : qty;
    this.props.graphSizeChanged(qty);
  };

  changeQty = (event) => {
    this.setState({qty: event.target.value});
  };

  render() {
    return (
      <Col>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Ilość wierzchołków: </Label>
            <InputGroup>
              <Input type="text" name="qty" id="qty" size={4} value={this.state.qty} onChange={this.changeQty}/>
              <InputGroupAddon addonType="append">
                <Button color="info" onClick={this.handleSubmit}>OK</Button>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </form>
      </Col>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    graphSize: state.graphSize,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    graphSizeChanged: (newSize) => dispatch(graphSizeChanged(newSize)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VertexQuantityInput);
