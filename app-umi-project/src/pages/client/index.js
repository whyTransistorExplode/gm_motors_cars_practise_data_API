import React, {Component} from 'react';
import {Button, Col, Container, Row} from "reactstrap";
import {AvField, AvForm} from "availity-reactstrap-validation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {connect} from "dva";
@connect(({clientModel})=>({clientModel}))
class Client extends Component {
  // state={
  //   birthDate2:new Date()
  // };
  render() {
    const {dispatch,clientModel}=this.props;
    const {birthDate}=clientModel;

    const save = (e, er, v) => {
    };

    const uzgartirTugilganni=date=>{
      // this.setState({birthDate2:date});
      dispatch({
        type:'clientModel/updateState',
        payload:{
          birthDate: date
        }
      })
    };

    return (
      <div>
        <Container>
          <h1>Client list</h1>
          <Row>
            <Col>
              <AvForm onSubmit={save}>
                <AvField name="fullName"/>

                <DatePicker
                  selected={birthDate}
                  onChange={uzgartirTugilganni}
                />


                <Button>
                  Save
                </Button>
              </AvForm>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

Client.propTypes = {};

export default Client;
