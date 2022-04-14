import React, {Component} from 'react';
import {Button, Col, Container, Row} from "reactstrap";
import ContractFirstStep from "../../components/ContractFirstStep";
import {connect} from "dva";
import ContractSecondStep from "../../components/ContractSecondStep";

@connect(({contractModel, globalModel}) => ({contractModel, globalModel}))
class Contract extends Component {


  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: "globalModel/getCarNames"
    });
  }

  componentDidUpdate() {
    this.checkClient();
  }

  checkClient = () => {
    if (this.props.contractModel.passportSerial.length === 2 &&
      this.props.contractModel.keraksiz &&
      this.props.contractModel.passportNumber.length === 7 &&
      this.props.contractModel.personType != "0") {
      this.props.dispatch({
        type: 'contractModel/checkClient',
        payload: {
          passportNumber: this.props.contractModel.passportNumber,
          passportSerial: this.props.contractModel.passportSerial,
          personType: this.props.contractModel.personType
        }
      });
      this.props.dispatch({
        type: 'contractModel/updateState',
        payload: {
          keraksiz: ''
        }
      })
    }
  };


  render() {
    const {dispatch, globalModel, contractModel} = this.props;
    const {carNames, positions, colors, price, photoUrl} = globalModel;
    const {isNext, currentClient, personType, passportNumber, passportSerial, checked} = contractModel;


    const getPositionByCarName = (e) => {
      dispatch({
        type: 'contractModel/getPositionsByCarName',
        payload: {
          id: e.target.value
        }
      });
    };

    const getColorByPosition = (e) => {
      dispatch({
        type: 'contractModel/getColorByPosition',
        payload: {
          positionId: e.target.value
        }
      })
    };

    const nextPage = () => {
      dispatch({
        type: 'contractModel/updateState',
        payload: {
          isNext: !isNext
        }
      })

    };

    const getCarByColor = (e) => {
      dispatch({
        type: 'contractModel/getCarByColor',
        payload: {
          colorId: e.target.value
        }
      })
    };

    const makeContract = () => {

    };

    const getInputValue = (e) => {
      dispatch({
        type: 'contractModel/updateState',
        payload: {
          [e.target.name]: e.target.value,
          keraksiz: '0'
        }
      })
    };

    const getDistricts = (e) => {

    };


    return (
      <div>
        <Container>
          <Row>
            Shartnoma tuzish jarayoni
          </Row>
          {isNext ?
            <ContractSecondStep
              makeContract={makeContract}
              currentClient={currentClient}
              getInputValue={getInputValue}
              getDistricts={getDistricts}
              regions={[]}
              districts={[]}
              passportSerial={passportSerial}
              passportNumber={passportNumber}
              personType={personType}
              checked={checked}

            /> :
            <ContractFirstStep
              carNames={carNames}
              positions={positions}
              colors={colors}
              photoUrl={photoUrl}
              price={price}
              getPositionByCarName={getPositionByCarName}
              getColorByPosition={getColorByPosition}
              getCarByColor={getCarByColor}
            />
          }

          <Row className="my-5">
            <Col md={{size: 2, offset: 7}}>
              <Button color={isNext ? 'danger' : 'primary'} onClick={nextPage}>{isNext ? 'Previous' : 'Next'}</Button>
            </Col>
            {checked? <Col md="2">
              <Button color='success' onClick={makeContract}>Shartnoma tuzish</Button>
            </Col> : ''}
          </Row>


        </Container>


      </div>
    )
      ;
  }
}

Contract
  .propTypes = {};

export default Contract;
