import React, {Component} from 'react';
import {Button, Container, CustomInput, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table} from 'reactstrap'
import {connect} from "dva";
import {API_PREFIX} from "@/contants/contants";
import {AvField, AvForm} from 'availity-reactstrap-validation';
import CurrencyInput from "react-currency-input";
import {Link} from "react-router-dom";
import OurPaginations from "../../components/OurPaginations";
import {TOKEN_NAME} from "../../contants/contants";
import router from "umi/router";

@connect(({carModel}) => ({carModel}))
class Car extends Component {

  componentDidMount() {
    // const dispatch = this.props.dispatch;
    const {dispatch} = this.props;
    dispatch({
      type: 'carModel/getCars'
    });
    dispatch({
      type: 'carModel/getCarTemplates'
    });
    dispatch({
      type: 'carModel/getColors'
    })
  }


  render() {
    const {dispatch, carModel} = this.props;
    const {
      showModal, cars, active, colors,
      carTemplates, photoId, totalPages, totalElements,
      size, page
    } = carModel;

    const openModal = () => {
      dispatch({
        type: 'carModel/updateState',
        payload: {
          showModal: !showModal
        }
      })
    };

    const changeActive = () => {
      dispatch({
        type: 'carModel/updateState',
        payload: {
          active: !active
        }
      })
    };

    const yuklamoq = (e) => {
      dispatch({
        type: 'carModel/faylniYuklash',
        payload: {
          file: e.target.files[0]
        }
      })
    };

    const downloadFile = (id) => {
      var ketmon = document.createElement("a");
      ketmon.href = `${API_PREFIX}attachment/${id}`;
      document.body.appendChild(ketmon);
      ketmon.target = "_blank";
      ketmon.click();
    };

    const saveCar = (e, v) => {
      v.price = v.price.replace(/ /g, '');
      if (v.price > 0) {
        dispatch({
          type: 'carModel/saveCar',
          payload: {
            ...v,
            photoId,
            active
          }
        })
      } else {
        alert("Oka 0 emas")
      }
    };

    const changePage = (page) => {
      dispatch({
        type: 'carModel/getCars',
        payload: {
          page: page - 1,
          size: 2
        }
      });
    };


    return (
      <div>
        <Container>

          <Row>
            <h1>Car list</h1>
          </Row>

          <Row>
            <Button onClick={openModal}>Add car</Button>
          </Row>

          <Row>
            <Table>
              <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th colSpan="2">Color</th>
                <th>Price</th>
                <th>Position</th>
                <th>Photo</th>
                <th>Yuklab olish</th>
                <th>Pdf o'qish</th>
                <th>Active</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              {cars.map((item, i) =>
                <tr key={item.id}>
                  <td>{(page * size) + i + 1}</td>
                  <td>{item.carName.name}</td>
                  <td>{item.color.name}</td>
                  <td style={{backgroundColor: `${item.color.code}`}}/>
                  <td>{(new Intl.NumberFormat("fr-FR").format(item.price))}</td>
                  <td>{item.position.name} ({item.position.description})</td>
                  <td>
                    <div style={{width: '50px'}}>
                      <img className="img-fluid"
                           src={`${API_PREFIX}attachment/${item.photoId}`}
                           alt=""/>
                    </div>
                  </td>
                  <td>
                    <button className="btn" onClick={() => downloadFile(item.photoId)}>yuklamoq</button>
                  </td>
                  <td>
                    <Link to={"/car/readPdf/" + item.photoId}>O'qish</Link>
                  </td>
                  <td>{item.active ? 'Savdoda' : 'Yopiq'}</td>
                  <td><Button color="warning">Edit</Button></td>
                </tr>
              )}
              </tbody>
            </Table>
          </Row>
          <Row>
            <OurPaginations
              activePage={0}
              totalElements={totalElements}
              size={size}
              showPageCount={totalPages < 5 ? totalPages : 5}
              changePage={changePage}
            />
          </Row>

        </Container>

        <Modal isOpen={showModal} toggle={openModal}>
          <AvForm onValidSubmit={saveCar}>
            <ModalHeader toggle={openModal} charCode="Y">Modal title</ModalHeader>
            <ModalBody>
              <AvField type="select" name="carTemplateId">
                <option value="0">Select car template</option>
                {carTemplates.map(item =>
                  <option key={item.id} value={item.id}>{`${item.carName} (${item.position}`}</option>
                )}
              </AvField>

              <AvField type="select" name="colorId">
                <option value="0">Select car template</option>
                {colors.map(item =>
                  <option key={item.id} value={item.id}>{item.name}</option>
                )}
              </AvField>
              <AvField name="photoId" label="Car photo" type="file" onChange={yuklamoq}/>
              <div style={{display: `${photoId ? 'block' : 'none'}`}}>
                <img src={`${API_PREFIX}attachment/${photoId}`} alt="" className="img-fluid"/>
              </div>

              <AvField tag={CurrencyInput} precision="0" thousandSeparator=" " name="price" label="Car price"/>

              <CustomInput type="checkbox" checked={active} onChange={changeActive}
                           label="Mashinani sotuvga chiqaramizmi?" id="aa"/>
            </ModalBody>
            <ModalFooter>
              <Button type="button" color="danger" onClick={openModal}>cancel</Button>{' '}
              <Button color="success">Save</Button>
            </ModalFooter>
          </AvForm>
        </Modal>
      </div>
    );
  }
}

Car.propTypes = {};

export default Car;
