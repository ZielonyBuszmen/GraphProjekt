import React from 'react';
import { listySasiedztwaChanged, macierzSasiedztwaChanged } from '../actions/actionCreators';
import { connect } from 'react-redux';
import { immutablePush, macierzNaListe } from '../helpers';


/*
Małe info:
 - gdy w komponencie zmieni się jakiś input, trzeba wywołać akcję this.props.listySasiedztwaChanged(lists)
 - lists, przesyłane w parametrze, to listy sąsiedztwa w formacie: [ [0,2], [2], [0,1] ]
 - trzeba wymyśleć, jak to zrobić, by to ładnie wyświetlać
 */
class ListySasiedztwa extends React.Component {


  inputRenderer = (list, node) => {
    let max = list.length < this.props.matrix.length ? list.length + 1 : list.length;
    let result = [];
    for (let i = 0; i < max; i++) {
      const value = list[i];
      result = immutablePush(result, <input type="text" value={value} style={{width: '35px'}} onChange={(e) => this.handleChange(e, node, i)}/>)
    }
    return result;
  };

  handleChange = (event, node, listElement) => {
    const value = parseInt(event.target.value);
    const lists = macierzNaListe(this.props.matrix);
    lists[node][listElement] = value;
    this.props.listySasiedztwaChanged(lists);
  };

  listRenderer() {
    const {matrix} = this.props;
    const lists = macierzNaListe(matrix);
    let result = [];
    lists.map((connectedList, node) => {
      result[node] = <span>{node} - {this.inputRenderer(connectedList, node)}<br/></span>;
    });
    return result;
  }

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