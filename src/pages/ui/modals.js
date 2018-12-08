import React from 'react'
import { Card, Button, Modal } from 'antd'

export default class Modals extends React.Component {
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false,
  }

  handleOpen = (type) => {
    this.setState({
      [type]: true
    })
  }

  handleConfirm = (type) => {
    Modal[type]({
      title: 'sure?',
      content: 'are you sure you can use react',
      onOk() {
        console.log('ok')
      },
      onCancel() {
        console.log('cancel');
      }
    })
  }

  render() {
    return (
      <div>
        <Card title="base box" className="card-wrap">
          <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open1</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal2')}>Open2</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal3')}>Open3</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal4')}>Open4</Button>
        </Card>
        <Card title="信息确认框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
          <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
          <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
        </Card>
        <Modal
          title="react"
          visible={this.state.showModal1}
          onCancel={()=>{
            this.setState({
              showModal1: false
            })
          }}
        >
          <p>welcome to study the lesson of react</p>
        </Modal>
        <Modal
          title="React"
          visible={this.state.showModal2}
          okText="好的"
          cancelText="算了"
          onCancel={() => {
            this.setState({
              showModal2: false
            })
          }}
        >
          <p>欢迎学习慕课新推出的React高级课程</p>
        </Modal>
        <Modal
          title="React"
          style={{top:20}}
          visible={this.state.showModal3}
          onCancel={() => {
            this.setState({
              showModal3: false
            })
          }}
        >
          <p>欢迎学习慕课新推出的React高级课程</p>
        </Modal>
        <Modal
          title="React"
          wrapClassName="vertical-center-modal"
          visible={this.state.showModal4}
          onCancel={() => {
            this.setState({
              showModal4: false
            })
          }}
        >
          <p>欢迎学习慕课新推出的React高级课程</p>
        </Modal>
      </div>
    )
  }
}