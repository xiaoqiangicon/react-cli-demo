import React from 'react'
import { Button, Row, Col } from 'antd'
import './index.less'

export default class NavLeft extends React.Component{
  render() {
    return (
      <Row className="navLeft">
        <Col span={6}>1</Col>
        <Col span={12}>2</Col>
        <Button type='danger'>hello</Button>
      </Row>
    )
  }
}