import React from 'react';
import { listySasiedztwaChanged, macierzSasiedztwaChanged } from '../actions/actionCreators';
import { connect } from 'react-redux';
import { macierzNaListe } from '../helpers';


/*
Małe info:
 - gdy w komponencie zmieni się jakiś input, trzeba wywołać akcję this.props.listySasiedztwaChanged(lists)
 - lists, przesyłane w parametrze, to listy sąsiedztwa w formacie: [ [0,2], [2], [0,1] ]
 - trzeba wymyśleć, jak to zrobić, by to ładnie wyświetlać
 */
class ListySasiedztwa extends React.Component {
  render() {
    return (
      <div>
        <hr/>
        Tutaj komponent z inputami z listą sąsiedztwa<br/>
        {macierzNaListe(this.props.matrix || [])}
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