import React from 'react'
import { Button, Row, Col } from 'antd'
import './index.less'

export default class Footer extends React.Component{
  render() {
    return (
      <Row className="footer">
        <Col span={12}>1</Col>
        <Col span={12}>2</Col>
        <Button type='danger'>hello</Button>
      </Row>
    )
  }
}