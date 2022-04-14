import React, {Component} from 'react';
import {Button, Col, Container, Row, Table} from 'reactstrap'
import {connect} from "dva";
import router from "umi/router";

@connect(({carTemplateModel}) => ({carTemplateModel}))
class Car extends Component {

  componentDidMount() {
    // const dispatch = this.props.dispatch;
    const {dispatch} = this.props;
    dispatch({
      type: 'carTemplateModel/getCarTemplates'
    })
  }


  render() {
    const {dispatch, carTemplateModel} = this.props;
    const {carTemplates} = carTemplateModel;

    const editCarTemplate = (currentItem) => {

      const aa = require("uuid/v4");
      let newArr = currentItem.values.map(item => {
        return {id: aa(), values: item.values, valueId: item.selectedValueId}
      });
      dispatch({
        type: 'carTemplateModel/updateState',
        payload: {
          currentItem,
          arr: newArr
        }
      });
      router.push("/carTemplate/edit/" + currentItem.id);
    };


    return (
      <div>
        <Container>

          <Row>
            <h1>Car Template list</h1>
          </Row>

          <Row>
            <Button onClick={function () {
              router.push("/carTemplate/add")
            }}>Add car</Button>
          </Row>

          <Row className="mt-3">
            <Col>
              <Table>
                <thead>
                <tr>
                  <th>Tr</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th colSpan="2">Action</th>
                </tr>
                </thead>
                <tbody>
                {carTemplates.map((item, i) =>
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.carName}</td>
                    <td>{item.position}</td>
                    <td><Button onClick={() => editCarTemplate(item)}>Edit</Button></td>
                    <td><Button>Delete</Button></td>
                  </tr>
                )}
                </tbody>
              </Table>
            </Col>
          </Row>


        </Container>
      </div>
    );
  }
}

Car.propTypes = {};

export default Car;
