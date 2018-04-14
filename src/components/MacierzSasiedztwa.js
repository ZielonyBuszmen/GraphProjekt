import React from 'react'
import { connect } from 'react-redux'
import { createEmptyMatrix } from '../helpers';
import { macierzSasiedztwaChanged } from '../actions/actionCreators';

class MacierzSasiedztwa extends React.Component {

  constructor(props) {
    super(props);
    this.state = {matrix: createEmptyMatrix(props.size, '')};
  }

  prepareInputsArray = (size) => {
    const array = [];
    let key = 0;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        array.push(this.inputRenderer(key, i, j));
        key++;
      }
      array.push(<br key={size * size + i}/>); // duży key, bo się pluło
    }
    return array;
  };

  inputRenderer = (key, col, row) => {
    return (
      <input type="text" key={key} value={this.state.matrix[col][row]}
             onChange={(e) => this.handleChange(e, col, row)}/>
    );
  };

  handleChange = (event, col, row) => {
    const matrix = this.state.matrix;
    matrix[col][row] = event.target.value;
    this.setState({
      matrix: matrix
    });
    this.props.macierzSasiedztwaChanged(matrix);
  };

  render() {
    const {size} = this.props;
    return (
      <div>
        {this.prepareInputsArray(size)}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    matrix: state.matrix,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    macierzSasiedztwaChanged: (matrix) => dispatch(macierzSasiedztwaChanged(matrix)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MacierzSasiedztwa);
