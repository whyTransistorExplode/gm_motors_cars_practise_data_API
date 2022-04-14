import React, {Component} from 'react';
import {Button, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table} from "reactstrap";
import {connect} from "dva";
import {AvField, AvForm} from 'availity-reactstrap-validation';

@connect(({positionModel}) => ({positionModel}))
class Position extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'positionModel/getPositions'
    })
  }


  render() {
    const {dispatch, positionModel} = this.props;
    const {showModal, positions} = positionModel;

    const openModal = () => {
      dispatch({
        type: 'positionModel/updateState',
        payload: {
          showModal: !showModal
        }
      })
    };

    const savePosition = (event, value) => {
      dispatch({
        type: 'positionModel/addPosition',
        payload: value
      })
    };



    return (
      <div>
        <Container className="mt-4">
          <Row>
            <Col>
              <h4 className="text-center">Position list</h4>
            </Col>
          </Row>
          <Row>
            <Button color="primary" onClick={openModal}>
              Add position
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
                {positions.map((item, i) =>
                  <tr key={`${item.name}**$%${i}`}>
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
          <AvForm onValidSubmit={savePosition}>
            <ModalHeader>
              Add position
            </ModalHeader>
            <ModalBody>
              <AvField name="name" label="Position name" required placeholder="Enter position"/>
              <AvField name="description" label="Position description" placeholder="description"/>
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

Position.propTypes = {};

export default Position;
