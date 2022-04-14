import React, {Component} from 'react';
import {AvField, AvForm} from "availity-reactstrap-validation";
import {Button, Col, Container, Row} from "reactstrap";

class CarTemplateForm extends Component {
  render() {
    const {
      saveCarTemplate, carNames,
      positions, arr, getValuesByDetail,
      details, removeRow, addRow, text, currentItem
    } = this.props;

    return (
      <div>
        <Container>
          <h1>{text} carTemplate</h1>
          <AvForm onValidSubmit={saveCarTemplate}>
            <Row>
              <Col>
                <AvField type="select" name="carNameId" value={currentItem ? currentItem.carNameId : 0}>
                  <option value="0">Select car</option>
                  {carNames.map(item =>
                    <option key={item.id} value={item.id}>{item.name}</option>
                  )}
                </AvField>
                <AvField type="select" name="positionId" value={currentItem ? currentItem.positionId : 0}>
                  <option value="0">Select position</option>
                  {positions.map(item =>
                    <option key={item.id} value={item.id}>{item.name}</option>
                  )}
                </AvField>
              </Col>
            </Row>
            {arr.map((el, i) =>
              <Row key={el.id}>

                <Col md="4">
                  <AvField type="select" value={el.values.length && el.values[0].detail ? el.values[0].detail.id : 0}
                           onChange={() => getValuesByDetail(i, el)}
                           id={`avf${i}`} name="detailId"
                           required>
                    <option value="0">Select detail</option>
                    {details.map(item =>
                      <option key={item.id} value={item.id}>{item.name}</option>
                    )}
                  </AvField>
                </Col>

                <Col md="4">
                  <AvField type="select" value={el.valueId} name={"valueId/" + i} required>
                    <option value="0">Select value</option>
                    {arr[i].values.map(item =>
                      <option key={item.id} value={item.id}>{item.name}</option>
                    )}
                  </AvField>
                </Col>

                <Col md="1">
                  {arr.length === 1 ? '' : <Button type="button" onClick={() => removeRow(i)} color="danger">-</Button>}
                </Col>

                <Col md="1">
                  <Button type="button" color="success" onClick={() => addRow(i)}>+</Button>
                </Col>

              </Row>
            )}

            <Row>
              <Col md={{size: 1, offset: 8}}>
                <Button color="success">Save</Button>
              </Col>
            </Row>
          </AvForm>
        </Container>


      </div>
    );
  }
}

CarTemplateForm.propTypes = {};

export default CarTemplateForm;
