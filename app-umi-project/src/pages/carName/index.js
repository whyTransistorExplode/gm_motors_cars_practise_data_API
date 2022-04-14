import React, {Component} from 'react';
import {Button, Col, Container, CustomInput, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table} from "reactstrap";
import {connect} from "dva";
import {AvField, AvForm} from 'availity-reactstrap-validation';

@connect(({carNameModel}) => ({carNameModel}))
class CarName extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'carNameModel/getCarNames'
    })
  }

  render() {
    const {dispatch, carNameModel} = this.props;
    const {showModal, sellActive, carNames} = carNameModel;


    //MODALNI OCHISH FUNKSIYASI
    const openModal = () => {
      dispatch({
        type: 'carNameModel/stateniUzgartirish',
        payload: {
          showModal: !showModal
        }
      })
    };

    //CAR NAME NI SAQLASH FUNKSIYASI
    const saveCarName = (e, v) => {
      dispatch({
        type: 'carNameModel/addCarName',
        payload: {
          ...v,
          sellActive
        }
      })
    };

    const changeSellActive = () => {
      dispatch({
        type: 'carNameModel/stateniUzgartirish',
        payload: {
          sellActive: !sellActive
        }
      })
    };

    return (
      <div>
        <Container className="mt-4">
          <Row>
            <Col>
              <h4 className="text-center">Car name list</h4>
            </Col>
          </Row>
          <Row>
            <Button color="primary" onClick={openModal}>
              Add Car Name
            </Button>
          </Row>
          <Row className="mt-3">
            <Col>
              <Table>
                <thead>
                <tr>
                  <th>Tr</th>
                  <th>Name</th>
                  <th colSpan="2">Action</th>
                </tr>
                </thead>
                <tbody>
                {carNames.map((item, i) =>
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.name}</td>
                  </tr>
                )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>

        <Modal isOpen={showModal}>
          <AvForm onValidSubmit={saveCarName}>
            <ModalHeader>
              Add car name
            </ModalHeader>
            <ModalBody>
              <AvField name="name" label="Car name" required placeholder="Enter car name"/>
              <CustomInput type="checkbox" checked={sellActive} onChange={changeSellActive}
                           label="Mashinani sotuvga chiqaramizmi?" id="aa"/>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" type="button" onClick={openModal}>Cancel</Button>
              <Button color="success">Save</Button>
            </ModalFooter>
          </AvForm>
        </Modal>
      </div>
    );
  }
}

CarName.propTypes = {};

export default CarName;
