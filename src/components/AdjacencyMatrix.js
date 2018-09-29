import React from 'react'
import { connect } from 'react-redux'
import { createEmptyMatrix, macierzSasiedztwaChanged } from '../actions/actionCreators';
import { Input } from 'reactstrap';

export class AdjacencyMatrix extends React.Component {

  constructor(props) {
    super(props);
    props.createEmptyMatrix(props.size);
  }

  createNumberRow = (size) => {
    const result = [];
    result.push(<td></td>);
    for (let i = 0; i < size; i++) {
      result.push(<td style={{textAlign: 'center'}}>{i}</td>)
    }
    return <tr>{result}</tr>
  };


  prepareInputsArray = (size) => {
    const rows = [];
    rows.push(this.createNumberRow(size));
    for (let i = 0; i < size; i++) {
      const elements = [];
      for (let j = 0; j < size; j++) {
        elements.push(this.inputRenderer(j, j, i));
      }
      rows.push(
        <tr key={i}>
          <td className='pr-2'>{i}</td>
          {elements}
        </tr>
      );
    }
    return rows;
  };

  inputRenderer = (key, row, col) => {
    if (this.props.matrix.length === 0) return '';
    const value = this.props.matrix[col][row] || '';
    return (
      <td>
        <Input className='form-control' maxlength={2} style={{width: '50px'}} type="text" key={key} value={value}
               placeholder={0}
               onChange={(e) => this.handleChange(e, col, row)}/>
      </td>
    );
  };

  handleChange = (event, row, col) => {
    const value = parseInt(event.target.value) || 0;
    this.props.macierzSasiedztwaChanged(row, col, value);
  };

  render() {
    const {size} = this.props;
    return (
      <div className='macierzSasiedztwa'>
        <table>
          {this.prepareInputsArray(size)}
        </table>
      </div>
    );
  }
}


export const mapStateToProps = (state) => {
  return {
    matrix: state.matrix,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    macierzSasiedztwaChanged: (row, col, value) => dispatch(macierzSasiedztwaChanged(row, col, value)),
    createEmptyMatrix: (size) => dispatch(createEmptyMatrix(size)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdjacencyMatrix);
