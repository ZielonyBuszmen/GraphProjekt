import React from 'react'
import { connect } from 'react-redux'
import { createEmptyMatrix, macierzSasiedztwaChanged } from '../actions/actionCreators';

class MacierzSasiedztwa extends React.Component {

  constructor(props) {
    super(props);
    props.createEmptyMatrix(props.size);
  }

  prepareInputsArray = (size) => {
    const array = [];
    let key = 0;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        array.push(this.inputRenderer(key, j, i));
        key++;
      }
      array.push(<br key={size * size + i}/>); // duży key, bo się pluło
    }
    return array;
  };

  inputRenderer = (key, row, col) => {
    if (this.props.matrix.length === 0) return '';
    return (
      <input type="text" key={key} value={this.props.matrix[col][row]}
             onChange={(e) => this.handleChange(e, col, row)}/>
    );
  };

  handleChange = (event, row, col) => {
    const value = event.target.value;
    this.props.macierzSasiedztwaChanged(row, col, value);
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
    macierzSasiedztwaChanged: (row, col, value) => dispatch(macierzSasiedztwaChanged(row, col, value)),
    createEmptyMatrix: (size) => dispatch(createEmptyMatrix(size)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MacierzSasiedztwa);
