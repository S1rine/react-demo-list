import React from 'react'
import { Card, List, Typography, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import { readAll } from '@/store'

const Item = List.Item
const Text = Typography.Text

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
]

function Index() {
  const { isAllRead, count } = useSelector(state => state.notices)
  const dispatch = useDispatch()
  return (
    <Card
      title='通知中心'
      extra={<Button onClick={() => dispatch(readAll())}>全部已读</Button>}
      bordered={false}
    >
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (
          <Item style={{ display: 'flex', alignContent: 'space-between' }}>
            <Text mark>[ITEM]</Text> {item}
            <Button size='small'>已读</Button>
          </Item>
        )}
      />
    </Card>
  )
}

export default Index
