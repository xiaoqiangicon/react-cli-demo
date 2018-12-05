import React from 'react'
import {   } from 'antd'
import './index.less'
import { NavLink } from 'react-router-dom'

export default class NavLeft extends React.Component{
  render() {
    return (
      <div className="nav-left">
        <NavLink to="/about">
          <div className="logo">
            <img src="/assets/logo-ant.svg" alt=""/>
            <h1>Imooc MS</h1>
          </div>
        </NavLink>
      </div>
    )
  }
}