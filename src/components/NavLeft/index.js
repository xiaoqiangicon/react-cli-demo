import React from 'react'
import { Menu  } from 'antd'
import './index.less'
import { NavLink } from 'react-router-dom'
import MenuConfig from '../../config/menuconfig.js'

const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component{
  state = {
    currentKey: ''
  }

  // 获取菜单数据
  componentWillMount(){
    const menuTreeNode = this.renderMenu(MenuConfig);

    this.setState({
      menuTreeNode
    })
  }

  // 菜单渲染
  renderMenu =(data)=>{
    return data.map((item)=>{
      if(item.children){
        return (
          <SubMenu title={item.title} key={item.key}>
            { this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        <NavLink to={item.key}>{item.title}</NavLink>
      </Menu.Item>
    })
  }

  // 菜单点击
  handleClick = ({ item, key }) => {
    if (key === this.state.currentKey) {
        return false;
    }

    this.setState({
        currentKey: key
    });
    // hashHistory.push(key);
  };

  render() {
    return (
      <div className="nav-left">
        <NavLink to="/about">
          <div className="logo">
            <img src="/assets/logo-ant.svg" alt=""/>
            <h1>Imooc MS</h1>
          </div>
        </NavLink>
        <Menu
          onClick={this.handleClick}
          theme="dark"
        >
          { this.state.menuTreeNode }
        </Menu>
      </div>
    )
  }
}