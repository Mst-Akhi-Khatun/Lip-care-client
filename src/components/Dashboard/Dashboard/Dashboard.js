import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import banner from '../../../images/banner-1.jpg';
import GiveReview from '../GiveReview/GiveReview';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, logout } = useAuth()
    return (
        <div>
            <Navbar className="pink-bg" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="/" className="text-white text-uppercase">
                        {user?.email && <h4>{user?.displayName}'s Dashboard</h4>}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton className="pink-bg">
                            <Offcanvas.Title id="offcanvasNavbarLabel" className="text-white">Dashboard</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="light-pink-bg text-center menu-item">
                            <Nav className="justify-content-end flex-grow-1 pe-3 fs-5">
                                <Link to="/home">Home</Link>
                                <Link to={`${url}/myOrder`}>My Orders</Link>
                                <Link to={`${url}/giveReview`}>Review</Link>
                                <Link to={`${url}/payment`}>Payment</Link>
                                <button onClick={logout} className="pink-btn mt-3 w-50 mx-auto">Log out</button>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <div>
                <Switch>
                    <Route exact path={`${path}`}>
                        <img src={banner} alt="" className="img-fluid" />
                    </Route>
                    <Route path={`${path}/myOrder`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/giveReview`}>
                        <GiveReview></GiveReview>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;