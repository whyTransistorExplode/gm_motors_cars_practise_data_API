import React, {Component} from 'react';
import CarTemplateForm from "../../../../components/CarTemplateForm";
import {connect} from "dva";

@connect(({carTemplateModel}) => ({carTemplateModel}))
class EditCarTemplate extends Component {
  handleLeavePage(e) {
    const confirmationMessage = '?';
    e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
    return confirmationMessage;             // Gecko, WebKit, Chrome <34
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleLeavePage);
  }

  componentDidMount() {
    if (!this.props.carTemplateModel.currentItem) {
      this.props.dispatch({
        type: 'carTemplateModel/getCarTemplate',
        payload: {
          id: this.props.match.params.id
        }
      })
    }
    window.addEventListener('beforeunload', this.handleLeavePage);
  }


  render() {
    const {dispatch, carTemplateModel} = this.props;
    const {carNames, positions, details, arr, currentItem} = carTemplateModel;

    const editCarTemplate = (e, v) => {
      let values = [];
      Object.keys(v).map(item => {
        if (item.includes('valueId')) {
          values.push(v[item])
        }
      });
      dispatch({
        type: 'carTemplateModel/editCarTemplate',
        payload: {
          id: this.props.match.params.id,
          ...v,
          values
        }
      })
    };

    const getValuesByDetail = (i, item) => {
      let val = document.getElementById(`avf${i}`).value;
      dispatch({
        type: 'carTemplateModel/getValuesByDetail',
        payload: {
          id: val,
          i,
          item
        }
      })
    };

    const removeRow = (i) => {
      arr.splice(i, 1);
      dispatch({
        type: 'carTemplateModel/updateState',
        payload: {
          arr
        }
      })
    };

    const addRow = (i) => {
      const aa = require("uuid/v4");
      let obj = {id: aa(), values: []};
      arr.splice(i + 1, 0, obj);
      dispatch({
        type: 'carTemplateModel/updateState',
        payload: {
          arr
        }
      })
    };
    return (
      <div>
        <CarTemplateForm
          saveCarTemplate={editCarTemplate}
          carNames={carNames}
          positions={positions}
          arr={arr}
          getValuesByDetail={getValuesByDetail}
          details={details}
          removeRow={removeRow}
          addRow={addRow}
          text={"Edit"}
          currentItem={currentItem}
        />
      </div>
    );
  }
}

EditCarTemplate.propTypes = {};

export default EditCarTemplate;
