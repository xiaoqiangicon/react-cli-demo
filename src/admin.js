import React from 'react'
import {  } from 'antd'
import Header from './components/Header'
import NavLeft from './components/NavLeft'
import Footer from './components/Footer'

export default class Admin extends React.Component{
  
  render() {
    return(
      <div>
        <Header />
        <NavLeft />
        <Footer />
      </div>
    )
  }
}