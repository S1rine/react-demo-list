import React from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Layout, Menu, Badge, Icon, Dropdown, Avatar, message } from 'antd'
import { clearToken } from '@/utils/auth'
import './index.less'
import logo from './logo.svg'
import { adminRoutes } from '@/routes'
const { Item } = Menu
const { Header, Content, Sider } = Layout

const routes = adminRoutes.filter(route => route.isShow)

function Index(props) {
  const { isAllRead } = useSelector(state => state.notices)
  const popMenu = (
    <Menu
      onClick={p => {
        if (p.key === 'logout') {
          clearToken()
          props.history.push('/login')
        } else if (p.key === 'notice') {
          props.history.push('/admin/notice')
        } else {
          message.info(p.key)
        }
      }}
    >
      <Item key='notice'>通知中心</Item>
      <Item key='setting'>设置</Item>
      <Item key='logout'>退出</Item>
    </Menu>
  )
  return (
    <Layout>
      <Header className='header'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <Dropdown overlay={popMenu}>
          <div className='user'>
            <Avatar>U</Avatar>
            <Badge dot={!isAllRead}>
              <span>超级管理员</span>
            </Badge>
            <Icon type='down' />
          </div>
        </Dropdown>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {routes.map(route => {
              return (
                <Item key={route.path} onClick={p => props.history.push(p.key)}>
                  <Icon type={route.icon} />
                  {route.title}
                </Item>
              )
            })}
          </Menu>
        </Sider>
        <Layout style={{ padding: '24px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            style={{
              background: '#fff',
              margin: 0,
              minHeight: 280
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default withRouter(Index)
