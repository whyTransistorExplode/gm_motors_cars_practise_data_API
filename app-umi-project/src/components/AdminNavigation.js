import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AdminNavigation extends Component {
  render() {
    return (
      <div>
        {/*<Container className="mobile-navbar">*/}
        {/*  <Row>*/}
        {/*    <Col md={12} className="p-0">*/}
        {/*      <Navbar light expand="md" className="p-0">*/}
        {/*        <NavbarBrand className="navBrand" href="/">{*/}
        {/*          pathname === '/'*/}
        {/*            ?*/}
        {/*            <img className="img-fluid" src="/assets/logo/home-logo.svg" alt=""/> :*/}
        {/*            <img className="img-fluid img-all-page" src="/assets/logo/logo.svg" alt=""/>}*/}
        {/*        </NavbarBrand>*/}
        {/*        <NavbarToggler onClick={this.toggles}/>*/}

        {/*        <Collapse isOpen={this.state.isOpen} navbar>*/}
        {/*          <Nav style={{marginTop: "10px"}}*/}

        {/*               className={pathname === '/' ?*/}
        {/*                 currentUser.id ?*/}
        {/*                   ' ' : 'null-user'*/}
        {/*                 : 'ml-auto nav-link2'} navbar>*/}
        {/*            {links.map(res => {*/}

        {/*              return createNavItem(res)*/}
        {/*            })}*/}
        {/*            {pathname === '/' ?*/}
        {/*              <Link onClick={this.communicat} spy={true} smooth={true}*/}
        {/*                    duration={2500}*/}
        {/*                    to="communication">*/}
        {/*                <NavItem>*/}
        {/*                  <NavLink style={{"cursor":"pointer"}}>*/}
        {/*                    Aloqa*/}
        {/*                  </NavLink>*/}
        {/*                </NavItem>*/}
        {/*              </Link> :*/}
        {/*              ''*/}
        {/*            }*/}

        {/*            {currentUser.id ?*/}
        {/*              <div className="d-flex userMainLinks"*/}
        {/*                   style={currentUser.roles[0].name === 'ROLE_USER' ?*/}
        {/*                     {*/}
        {/*                       marginRight: "-62px",*/}
        {/*                       marginLeft: "-25px"*/}
        {/*                     } :*/}
        {/*                     {*/}
        {/*                       marginRight: "-40px",*/}
        {/*                       marginLeft: "-25px"*/}
        {/*                     }*/}
        {/*                   }*/}
        {/*              >*/}
        {/*                <div className={*/}
        {/*                  pathname === '/'*/}
        {/*                    ? ' login login1' : 'login'*/}
        {/*                }*/}
        {/*                >*/}
        {/*                  <NavLink className="open-login2 pb-0">*/}
        {/*                    <div className="d-flex">*/}
        {/*                      <div style={{marginTop: "-12px"}}>*/}
        {/*                        <span className="badge badge-danger">*/}
        {/*                          {countNotification}</span>*/}
        {/*                      </div>*/}
        {/*                      <div className={*/}
        {/*                        pathname === '/' ? 'bell-img icon icon-bell'*/}
        {/*                          : 'bell-img icon icon-bell-unset'*/}
        {/*                      }*/}
        {/*                           onClick={notificationtoggle}*/}
        {/*                      >*/}
        {/*                        /!*<img className="icon icon-bell-unset" src="/assets/home/bell.svg" alt=""/>*!/*/}
        {/*                      </div>*/}
        {/*                    </div>*/}
        {/*                  </NavLink>*/}

        {/*                </div>*/}
        {/*                <div className={*/}
        {/*                  pathname === '/'*/}
        {/*                    ? ' login ml-0' : 'login'*/}
        {/*                }>*/}
        {/*                  <NavLink className="open-login2 pb-0">*/}
        {/*                    <div className="d-flex">*/}
        {/*                      <div className="user-login d-block"*/}
        {/*                      >*/}

        {/*                        <img*/}
        {/*                          src={currentUser && currentUser.photo ? "/api/file/" + currentUser.photo.id : "/assets/avatar/account.svg"}*/}
        {/*                          alt="" className="avatar"/>*/}
        {/*                      </div>*/}
        {/*                      <div className="user-roll">*/}
        {/*                        <UncontrolledDropdown>*/}
        {/*                          <DropdownToggle className="dropdown_menu">*/}
        {/*                            <p className="mb-0 font-weight-normal">*/}
        {/*                              {currentUser.firstName}*/}
        {/*                              <span className="ml-1">*/}
        {/*                              {currentUser.lastName}*/}
        {/*                            </span></p>*/}
        {/*                            <p className="mb-0 font-weight-normal">*/}
        {/*                              {*/}
        {/*                                currentUser.roles.map(item=>*/}
        {/*                                  item.name === 'ROLE_USER' && currentUser.roles.length===1 ?*/}
        {/*                                    'Oddiy foydalanuvchi '*/}
        {/*                                    :*/}
        {/*                                    item.id === 1 ? "" :*/}
        {/*                                      item.id === 2 ? "Ekspert " :*/}
        {/*                                        item.id === 3 ? "Direktor " :*/}
        {/*                                          item.id === 4 ? "Administrator " : ''*/}



        {/*                                ).join(" ")}*/}
        {/*                            </p>*/}
        {/*                          </DropdownToggle>*/}
        {/*                          <DropdownMenu className="border-0 p-0"*/}
        {/*                                        style={{*/}
        {/*                                          boxShadow: "0px 10px 20px rgba(208, 213, 221, 0.233856)"*/}
        {/*                                        }}>*/}
        {/*                            <DropdownItem*/}
        {/*                              onClick={function () {*/}

        {/*                                router.push('/user/avatar-user')*/}
        {/*                              }}*/}
        {/*                            >Rasmni o'zgartirish</DropdownItem>*/}
        {/*                            <DropdownItem*/}
        {/*                              onClick={function () {*/}
        {/*                                router.push('/user/login-user')*/}
        {/*                              }}*/}
        {/*                            >Loginni o'zgartirish</DropdownItem>*/}
        {/*                            <DropdownItem*/}
        {/*                              onClick={function () {*/}
        {/*                                router.push('/user/password-user')*/}
        {/*                              }}*/}
        {/*                            >Parolni o'zgartirish</DropdownItem>*/}
        {/*                            <DropdownItem*/}
        {/*                              style={{backgroundColor: "red", color: "white"}}*/}
        {/*                              onClick={(e) => logout(e)}>Chiqish</DropdownItem>*/}
        {/*                          </DropdownMenu>*/}
        {/*                        </UncontrolledDropdown>*/}
        {/*                      </div>*/}
        {/*                    </div>*/}
        {/*                  </NavLink>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              :*/}
        {/*              <div>*/}
        {/*                <NavLink className="open-login"*/}
        {/*                         onClick={function () {*/}
        {/*                           router.push("/login")*/}
        {/*                         }}*/}
        {/*                >*/}
        {/*                  <div className="d-inline-block user-img">*/}
        {/*                    /!*<img src="/assets/home/user.svg" alt=""/>*!/*/}
        {/*                    <span className="icon icon-avatar"></span>*/}
        {/*                  </div>*/}
        {/*                  <span>Kirish</span>*/}
        {/*                </NavLink>*/}
        {/*              </div>*/}
        {/*            }*/}
        {/*          </Nav>*/}
        {/*        </Collapse>*/}

        {/*      </Navbar>*/}
        {/*    </Col>*/}
        {/*  </Row>*/}

        {/*  <Modal className="notifation-modal" isOpen={notificationmodal} toggle={notificationtoggle}>*/}
        {/*    <ModalHeader toggle={notificationtoggle}>Xabarlar</ModalHeader>*/}
        {/*    <ModalBody className="notifation-modal-body">*/}
        {/*      {notifications.length === 0 ? <Row className="offset-3 mt-5  pt-3 pb-3">*/}
        {/*          <Col md={12}>*/}
        {/*            <h3>Hozircha xabarlar yo'q</h3>*/}

        {/*          </Col>*/}
        {/*        </Row>*/}
        {/*        :                notifications.map(item =>*/}
        {/*          (3 === getDifference(item.date) || 4 === getDifference(item.date)) ?*/}
        {/*            <Row className="bg-warning pt-3 pb-3 hover-row" onClick={() => routePath(item.id)}>*/}
        {/*              <Col md={8}>*/}
        {/*                <h6>{`${item.message} ${item.applicationNumber}`}</h6>*/}
        {/*              </Col>*/}
        {/*              <Col md={4}>*/}
        {/*                <h6 className="font-weight-normal">{item.date}</h6>*/}
        {/*              </Col>*/}
        {/*            </Row>*/}
        {/*            :*/}
        {/*            5 <= getDifference(item.date) ?*/}
        {/*              <Row className="bg-danger pt-3 pb-3 hover-row" onClick={() => routePath(item.id)}>*/}
        {/*                <Col md={8}>*/}
        {/*                  <h6>{`${item.message}`}</h6>*/}
        {/*                </Col>*/}
        {/*                <Col md={4}>*/}
        {/*                  <h6 className="font-weight-normal">{item.date}</h6>*/}
        {/*                </Col>*/}
        {/*              </Row> :*/}

        {/*              <Row className="pt-3 pb-3 hover-row" onClick={() => routePath(item.id)}>*/}
        {/*                <Col md={8}>*/}
        {/*                  <h6>{`${item.message}`}</h6>*/}
        {/*                </Col>*/}
        {/*                <Col md={4}>*/}
        {/*                  <h6 className="font-weight-normal">{item.date}</h6>*/}
        {/*                </Col>*/}
        {/*              </Row>*/}
        {/*        )*/}
        {/*      }*/}
        {/*    </ModalBody>*/}

        {/*  </Modal>*/}
        {/*</Container>*/}

      </div>
    );
  }
}

AdminNavigation.propTypes = {};

export default AdminNavigation;
