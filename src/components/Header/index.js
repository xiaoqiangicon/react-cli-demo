import React from 'react'
import { Row, Col } from 'antd'
import Util from '../../utils/util.js'
import './index.less'

export default class Header extends React.Component{

  state={}
  componentWillMount(){
    this.setState({
      userName:'Lee'
    })
    setInterval(()=>{
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
          sysTime
      })
    },1000)
    // this.getWeatherAPIData();
  }

  render() {
    const { menuName, menuType } = this.props;
      return (
        <div className="header">
          <Row className="header-top">
            {
              menuType?
                <Col span="6" className="logo">
                  <img src="/assets/logo-ant.svg" alt=""/>
                  <span>IMooc 通用管理系统</span>
                </Col>:''
            }
            <Col span={menuType?18:24}>
              <span>欢迎，{this.state.userName}</span>
              <span>退出</span>
            </Col>
          </Row>
          {
            menuType?'':
              <Row className="breadcrumb">
                <Col span="4" className="breadcrumb-title">
                  {menuName || '首页'}
                </Col>
                <Col span="20" className="weather">
                  <span className="date">{this.state.sysTime}</span>
                  <span className="weather-img">
                    
                  </span>
                  <span className="weather-detail">
                  </span>
                </Col>
              </Row>
          }
        </div>
      );
  }
}