import React from 'react';
import { Input } from 'reactstrap';
import { listySasiedztwaChanged } from '../actions/actionCreators';
import { connect } from 'react-redux';
import { matrixToList } from '../helpers';

class ListySasiedztwa extends React.Component {

  /**
   * Renderuje całą listę sąsiedztwa, wraz z inputami i wartościami
   *
   * @returns {Array}
   */
  listRenderer() {
    const {matrix} = this.props;
    const lists = matrixToList(matrix);
    let result = [];
    lists.map((connectedList, node) => {
      result[node] = <tr key={node}>{this.inputRowRenderer(connectedList, node)}<br/></tr>;
    });
    return result;
  }

  /**
   * Renderuje pojedynczy wiersz inputów
   *
   * @param list
   * @param startNode
   * @returns {Array}
   */
  inputRowRenderer = (list, startNode) => {
    let max = list.length < this.props.matrix.length ? list.length + 1 : list.length;
    const row = [];
    row.push(<td>{startNode} - </td>);
    for (let i = 0; i < max; i++) {
      const value = list[i] != null ? list[i] : '';
      row.push(<td><Input type="text" maxlength={2}
        value={value} style={{width: '50px'}} onChange={(e) => this.handleChange(e, startNode, i)}/></td>);
    }
    return row;
  };

  handleChange = (event, startNode, listElement) => {
    const endNode = parseInt(event.target.value);
    const lists = matrixToList(this.props.matrix);
    lists[startNode][listElement] = endNode;
    this.props.listySasiedztwaChanged(lists);
  };

  render() {
    return (
      <div className='macierzSasiedztwa'>
        <table>
          {this.listRenderer()}
        </table>
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
    listySasiedztwaChanged: (lists) => dispatch(listySasiedztwaChanged(lists)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListySasiedztwa);