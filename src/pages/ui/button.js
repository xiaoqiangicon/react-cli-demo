import React from 'react'
import { Card, Button,  } from 'antd'

export default class Buttons extends React.Component {
  render() {
    return (
      <div>
        <Card title="base button" className="card-wrap">
          <Button type="primary">LEE</Button>
          <Button>Lee</Button>
          <Button type="dashed">LEE</Button>
          <Button type="danger">LEE</Button>
          <Button disabled>LEE</Button>
        </Card>
      </div>
    )
  }
}