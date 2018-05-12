import React from 'react';
import { listySasiedztwaChanged } from '../actions/actionCreators';
import { connect } from 'react-redux';
import { immutablePush, macierzNaListe } from '../helpers';

class ListySasiedztwa extends React.Component {

  /**
   * Renderuje całą listę sąsiedztwa, wraz z inputami i wartościami
   *
   * @returns {Array}
   */
  listRenderer() {
    const {matrix} = this.props;
    const lists = macierzNaListe(matrix);
    let result = [];
    lists.map((connectedList, node) => {
      result[node] = <span>{node} - {this.inputRowRenderer(connectedList, node)}<br/></span>;
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
    let result = [];
    for (let i = 0; i < max; i++) {
      const value = list[i];
      result = immutablePush(result, <input type="text" value={value} style={{width: '35px'}} onChange={(e) => this.handleChange(e, startNode, i)}/>)
    }
    return result;
  };

  handleChange = (event, startNode, listElement) => {
    const endNode = parseInt(event.target.value);
    const lists = macierzNaListe(this.props.matrix);
    lists[startNode][listElement] = endNode;
    this.props.listySasiedztwaChanged(lists);
  };

  render() {
    return (
      <div>
        <hr/>
        Tutaj komponent z inputami z listą sąsiedztwa<br/>
        {this.listRenderer()}
        <hr/>
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