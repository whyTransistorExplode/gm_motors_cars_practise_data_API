import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import {AvField, AvForm} from "availity-reactstrap-validation";

class ContractSecondStep extends Component {
  render() {
    const {
      makeContract, currentClient, getInputValue,
      passportSerial, passportNumber, personType,
      districts, regions, getDistricts, checked
    } = this.props;
    console.log(currentClient);
    return (
      <div>
        <div>
          <Row>
            <Col>
              <h3 className="text-center font-weight-bold">User Register</h3>
              <AvForm>
                <Row>
                  <Col md='3' className='offset-1'>
                    <AvField value={currentClient ? currentClient.passportSerial : passportSerial}
                             name="passportSerial" placeholder="passportSerial"
                             onChange={getInputValue}
                             label="passportSerial" required/>
                  </Col>
                  <Col md='3'>
                    <AvField value={currentClient ? currentClient.passportNumber : passportNumber}
                             onChange={getInputValue}
                             name="passportNumber" placeholder="passportNumber" label="passportNumber" required/>
                  </Col>
                  <Col md='3'>
                    <AvField value={currentClient ? currentClient.personType : personType} type="select"
                             onChange={getInputValue}
                             name="personType" placeholder="personType"
                             label="personType">
                      <option value="0">Select personType</option>
                      <option value="JURIDICAL">Yuridik</option>
                      <option value="PHYSICAL">Jismononiy</option>
                    </AvField>
                  </Col>
                </Row>
              </AvForm>

              {checked ?
                <AvForm>
                  <Row>

                    <Col md='3' className='offset-1'>
                      <AvField value={currentClient ? currentClient.firstName : ''} name="firstName"
                               placeholder="firstName" label="firstName" required/>
                    </Col>
                    <Col md='3'>
                      <AvField value={currentClient ? currentClient.lastName : ''} name="lastName"
                               placeholder="lastName"
                               label="lastName" required/>
                    </Col>
                    <Col md='3'>
                      <AvField value={currentClient ? currentClient.middleName : ''} name="middleName"
                               placeholder="middleName" label="middleName"/>
                    </Col>

                    <Col md='3' className='offset-1'>
                      Date
                    </Col>
                    <Col md='3'>
                      <AvField value={currentClient ? currentClient.gender : ''} type="select" name="gender"
                               placeholder="gender" label="gender">
                        <option>Select gender</option>
                        <option value="MALE">ERKAK</option>
                        <option value="FEMALE">AYOL</option>
                      </AvField>
                    </Col>
                    <Col md='3'>
                      <AvField value={currentClient ? currentClient.tin : ''} name="tin" placeholder="tin" label="tin"
                               required/>
                    </Col>
                    <Col md='3' className='offset-1'>
                      <AvField value={currentClient ? currentClient.contact.district.region.id : ''} type="select"
                               name="regionId" onChange={getDistricts} placeholder="regionId" label="regionId">
                        <option>Select regionId</option>
                        {regions.map((item) =>
                          <option key={item.id} value={item.id}>{item.name}</option>
                        )}
                      </AvField>
                    </Col>
                    <Col md='3'>
                      <AvField value={currentClient ? currentClient.contact.district.id : ''} type="select"
                               name="districtId" placeholder="districtId" label="districtId">
                        <option>Select districtId</option>
                        {districts.length ? districts.map((item) =>
                          <option key={item.id} value={item.id}>{item.name}</option>
                        ) : ''}
                      </AvField>
                    </Col>
                    <Col md='3'>
                      <AvField value={currentClient ? currentClient.contact.address : ''} name="address"
                               placeholder="address" label="address" required/>
                    </Col>
                    <Col md='3' className='offset-1'>
                      <AvField value={currentClient ? currentClient.contact.email : ''} name="email"
                               placeholder="email"
                               label="email" required/>
                    </Col>
                    <Col md='3'>
                      <AvField value={currentClient ? currentClient.contact.fax : ''} name="fax" placeholder="fax"
                               label="fax" required/>
                    </Col>
                    <Col md='3'>
                      <AvField value={currentClient ? currentClient.companyName : ''} name="companyName"
                               placeholder="companyName" label="companyName" required/>
                    </Col>
                    <Col md='3' className='offset-1'>
                      <AvField value={currentClient ? currentClient.licenceNumber : ''} name="licenceNumber"
                               placeholder="licenceNumber" label="licenceNumber" required/>
                    </Col>
                    <Col md='3'>
                      Date
                    </Col>
                    <Col md='3'>
                      <AvField value={currentClient ? currentClient.companyName : ''} name="companyName"
                               placeholder="companyName" label="companyName" required/>
                    </Col>
                  </Row>
                </AvForm>
                : ''}
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

ContractSecondStep.propTypes = {};

export default ContractSecondStep;
