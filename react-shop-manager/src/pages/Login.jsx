import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Card, message } from 'antd'
import { setToken } from '@/utils/auth'
import { loginApi } from '@/service/auth'
import './login.less'

const Item = Form.Item

function Login(props) {
  const { getFieldDecorator } = props.form
  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        loginApi({
          userName: values.username,
          password: values.password
        })
          .then(res => {
            const { code } = res
            if (code === 'success') {
              message.success('登陆成功')
              setToken(res.token)
              props.history.push('/admin')
            } else {
              message.error(res.message)
            }
          })
          .catch(error => {
            message.error('用户不存在')
          })
      }
    })
  }
  return (
    <Card title='QF Admin SYS' className='login-form'>
      <Form onSubmit={e => handleSubmit(e)}>
        <Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名!' }]
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='用户名'
            />
          )}
        </Item>
        <Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }]
          })(
            <Input
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='password'
              placeholder='密码'
            />
          )}
        </Item>
        <Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>记住我</Checkbox>)}
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            登录
          </Button>
        </Item>
      </Form>
    </Card>
  )
}

export default Form.create({ name: 'loginForm' })(Login)
