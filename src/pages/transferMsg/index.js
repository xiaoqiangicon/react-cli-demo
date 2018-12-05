import React from 'react';
import { Button } from 'antd';

export default class RootContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '我是父组件传来的',
      visible: false,
      msg: 'son message'
    }
  }

  goIn() {
    this.setState({
      visible: true
    })
  }

  keep(msg) {
    console.log(msg);
    this.setState({
      msg
    })
  }

  cancel(mode) {
    console.log(mode)
    this.setState({
      visible: mode
    })
  }

  render() {
    return (
      <div style={{padding: "30px"}}>
        {
          this.state.visible ?
          <div>
            <Son cancel={mode => this.cancel(mode)} update={this.state.msg} keep={msg => this.keep(msg)}/>
          </div>
          :
          <div>
            <button onClick={this.goIn.bind(this)} style={{width:"100px",height:"50px"}}>进入</button>
            <Button type="primary">this.is a </Button>
          </div>
        }
      </div>
    )
  }
}

class Son extends React.Component{
  render() {
    return (
      <div style={{backround: "white"}}>
      <button style={{width:"100px",height:"50px"}} onClick={()=>{this.props.cancel(false);this.props.keep('change the message')}}>返回</button>
        父组件传到子组件的信息：<span style={{background:"white"}}>{this.props.update}</span>
      </div>
    )
  }
}