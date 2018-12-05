import React from 'react'
import { Button, Row, Col } from 'antd'
import './index.less'

export default class Header extends React.Component{
  render() {
    return (
      <Row className="header">
        <Col span={12}>1</Col>
        <Col span={12}>2</Col>
        <Button type='danger'>hello</Button>
      </Row>
    )
  }
}