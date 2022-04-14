import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import {AvField, AvForm} from "availity-reactstrap-validation";

class ContractFirstStep extends Component {
  render() {
    const {
      carNames, positions,
      colors, photoUrl, price,
      getPositionByCarName, getColorByPosition,
      getCarByColor
    } = this.props;
    return (
      <div>
        <AvForm>
          <Row>

            <Col md="4">
              <AvField name="carNameId" type="select" onChange={getPositionByCarName}>
                <option value="0">Mashinani tanlang</option>
                {carNames.map(item =>
                  <option key={item.id} value={item.id}>{item.name}</option>
                )}
              </AvField>
            </Col>
            <Col md="4">
              <AvField name="positionId" type="select" onChange={getColorByPosition}>
                <option value="0">Pozitsiyani tanlang</option>
                {positions.map(item =>
                  <option key={item.id}
                          value={item.id}>{item.name + ' (' + item.description + ')'}</option>
                )}
              </AvField>
            </Col>
            <Col md="4">
              <AvField name="colorId" type="select" onChange={getCarByColor}>
                <option value="0">Rangini tanlang</option>
                {colors.map(item =>
                  <option key={item.id}
                          value={item.id}>{item.name}</option>
                )}
              </AvField>
            </Col>
            <Col md="4">
              <img src={photoUrl} alt="" className="img-fluid"/>
            </Col>
            <Col md="4">
              <h1>{price}</h1>
            </Col>
          </Row>
        </AvForm>
      </div>
    );
  }
}

ContractFirstStep.propTypes = {};

export default ContractFirstStep;
