import React, { useEffect, useState } from 'react'
import { Card, Table, Button, Popconfirm } from 'antd'
import { listApi, delOne, modifyOne } from '@/service/products'
import { useSelector, useDispatch } from 'react-redux'
import { productLoadAsync } from '@/store'
import { imgUrl } from '@/utils/config'
import './list.less'
// const dataSource = [
//   { id: 1, name: '香皂', price: 5 },
//   { id: 2, name: '特仑苏', price: 6 },
//   { id: 3, name: '小浣熊', price: 1.5 }
// ]

const defaultPageSize = 2

function List(props) {
  // const [dataSource, setDataSource] = useState([])
  // const [total, setTotal] = useState(0)
  // const [page, setPage] = useState(1)
  const products = useSelector(state => state.product)
  console.log(products)
  const page = products.page
  const dataSource = products.list
  const total = products.total
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(productLoadAsync({ page, defaultPageSize }))
    // listApi(1, defaultPageSize).then(res => {
    //   setDataSource(res.products)
    //   setTotal(res.totalCount)
    // })
  }, [])
  const loadData = page => {
    // setPage(page)
    dispatch(productLoadAsync({ page, defaultPageSize }))
    // listApi(page, defaultPageSize).then(res => {
    // if (!res.products.length && page !== 1) return loadData(page - 1)
    //   setDataSource(res.products)
    //   setTotal(res.totalCount)
    // })
  }
  const columns = [
    {
      title: '序号',
      key: '_id',
      width: 80,
      align: 'center',
      render: (text, record, index) => index + 1
    },
    { title: '名称', dataIndex: 'name' },
    {
      title: '主图',
      dataIndex: 'coverImg',
      render: (text, record) =>
        record.coverImg ? (
          <img
            src={imgUrl + record.coverImg}
            style={{ width: '120px' }}
            alt='pic'
          />
        ) : (
          '暂无图片'
        )
    },
    { title: '价格', dataIndex: 'price' },
    {
      title: '是否在售',
      dataIndex: 'onSale',
      render: (text, record) => (record.onSale ? '在售' : '已下架')
    },
    {
      title: '操作',
      width: 250,
      render: (text, record, index) => {
        return (
          <div className='operation_button'>
            <Button
              type='primary'
              size='small'
              onClick={() => {
                props.history.push(`/admin/products/edit/${record._id}`)
              }}
            >
              修改
            </Button>
            <Popconfirm
              title='确定删除？'
              onCancel={() => console.log('用户取消删除')}
              onConfirm={() => {
                delOne(record._id).then(res => {
                  loadData(page)
                })
              }}
            >
              <Button style={{ margin: '0 1rem' }} type='danger' size='small'>
                删除
              </Button>
            </Popconfirm>
            <Button
              size='small'
              onClick={() => {
                modifyOne(record._id, { onSale: !record.onSale }).then(res => {
                  loadData(page)
                })
              }}
            >
              {record.onSale ? '下架' : '上架'}
            </Button>
          </div>
        )
      }
    }
  ]
  return (
    <Card
      title='商品列表'
      extra={
        <Button
          type='primary'
          size='small'
          onClick={() => props.history.push('/admin/products/edit')}
        >
          新增
        </Button>
      }
    >
      <Table
        rowKey='_id'
        rowClassName={record => (record.onSale ? '' : 'bg-red')}
        columns={columns}
        bordered
        dataSource={dataSource}
        pagination={{
          total,
          defaultPageSize,
          onChange: loadData,
          current: page
        }}
      />
    </Card>
  )
}

export default List
