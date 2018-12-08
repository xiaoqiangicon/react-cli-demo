import React from 'react'
import { Col, Row } from 'antd'
import Header from './components/Header'
import NavLeft from './components/NavLeft'
import Footer from './components/Footer'
import './style/common.less'
import store from './store/store.js'
import { addToCart, updateCart, deleteFromCart } from './action/cart'


store.dispatch(addToCart('coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('juice 2L', 1, 250));
store.dispatch(deleteFromCart('Flour 1kg'));
store.dispatch(updateCart('juice 2L', 2, 250));

export default class Admin extends React.Component{
  
  render() {
    return(
      <Row className="container">
        <Col span="4" className="nav-left">
          <NavLeft/>
        </Col>
        <Col span="20" className="main">
          <Header/>
          <Row className="content">
            {/* <Home/> */}
            {this.props.children}
          </Row>
          <Footer/>
        </Col>
    </Row>
    )
  }
}