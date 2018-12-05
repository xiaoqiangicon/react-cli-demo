import React from 'react'
import { Col,  } from 'antd'
import Header from './components/Header'
import NavLeft from './components/NavLeft'
import Footer from './components/Footer'

export default class Admin extends React.Component{
  
  render() {
    return(
      <div>
        <Col span={6}>
          <NavLeft />
        </Col>
        <Col span={18}>
          <Header />
          <Footer />
        </Col>
      </div>
    )
  }
}