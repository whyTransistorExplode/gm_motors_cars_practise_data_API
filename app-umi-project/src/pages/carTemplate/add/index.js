import React, {Component} from 'react';
import {connect} from "dva";
import CarTemplateForm from "../../../components/CarTemplateForm";

@connect(({carTemplateModel}) => ({carTemplateModel}))
class Index extends Component {

  render() {
    const {dispatch, carTemplateModel} = this.props;
    const {carNames, positions, details, arr} = carTemplateModel;

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

    const saveCarTemplate = (e, v) => {
      let ketmon = [];
      let array = Object.keys(v);
      for (let i = 0; i < array.length; i++) {
        if (array[i].includes("valueId")) {
          ketmon.push(v[array[i]])
        }
      }
      v.values = ketmon;
      dispatch({
        type: 'carTemplateModel/saveCarTemplate',
        payload: v
      })
    };

    return (
      <div>

        <CarTemplateForm
          saveCarTemplate={saveCarTemplate}
          carNames={carNames}
          positions={positions}
          arr={arr}
          getValuesByDetail={getValuesByDetail}
          details={details}
          removeRow={removeRow}
          addRow={addRow}
          text={"Add"}
        />
      </div>
    );
  }
}

Index.propTypes = {};

export default Index;
