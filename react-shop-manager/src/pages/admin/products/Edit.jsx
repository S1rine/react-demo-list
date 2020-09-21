import React, { useState, useEffect } from 'react'
import { Form, Card, Input, Button, message, Upload, Icon } from 'antd'
import { createApi, getOneById, modifyOne } from '@/service/products'
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import { serverUrl, imgUrl } from '@/utils/config'

const Item = Form.Item

function Edit(props) {
  const { getFieldDecorator } = props.form
  const [currentData, setCurrentData] = useState({})
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [editorState, setEditorState] = useState(
    BraftEditor.createEditorState('')
  )
  useEffect(() => {
    if (props.match.params.id) {
      getOneById(props.match.params.id).then(res => {
        setCurrentData(res)
        setImageUrl(res.coverImg)
        setEditorState(BraftEditor.createEditorState(res.content))
        console.log(res)
      })
    }
  }, [])
  const uploadButton = (
    <div>
      <Icon type={loading ? 'loading' : 'plus'} />
      <div className='ant-upload-text'>Upload</div>
    </div>
  )
  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      const path = info.file.response.info
      setLoading(false)
      setImageUrl(path)
      console.log(info)
    }
  }
  const priceValidate = (rule, value, callback) => {
    if (value * 1 > 100) {
      callback('价格不能大于100')
    } else {
      callback()
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let params = {
          ...values,
          coverImg: imageUrl,
          content: editorState.toHTML()
        }
        if (props.match.params.id) {
          modifyOne(props.match.params.id, params)
            .then(res => {
              message.success('修改成功')
              props.history.push('/admin/products')
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          createApi(params)
            .then(res => {
              message.success('添加成功')
              props.history.push('/admin/products')
            })
            .catch(err => {
              console.log(err)
            })
        }
      } else {
        message.error('请输入正确内容')
      }
    })
  }
  const handleEditorChange = newState => {
    setEditorState(newState)
  }
  return (
    <Card
      title='商品编辑'
      extra={<Button onClick={() => props.history.goBack()}>返回</Button>}
    >
      <Form onSubmit={e => handleSubmit(e)}>
        <Item label='名称'>
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请输入名字'
              }
            ],
            initialValue: currentData.name || ''
          })(<Input placeholder='请输入商品名称' />)}
        </Item>
        <Item label='价格'>
          {getFieldDecorator('price', {
            rules: [
              {
                required: true,
                message: '请输入价格'
              },
              {
                validator: priceValidate
              }
            ],
            initialValue: currentData.price || ''
          })(<Input type='number' placeholder='请输入商品价格' />)}
        </Item>
        <Item label='主图'>
          <Upload
            name='file'
            listType='picture-card'
            className='avatar-uploader'
            showUploadList={false}
            action={serverUrl + '/api/v1/common/file_upload'}
            onChange={info => handleChange(info)}
          >
            {imageUrl ? (
              <img
                src={imgUrl + imageUrl}
                alt='avatar'
                style={{ width: '100%' }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </Item>
        <Item label='詳情'>
          <BraftEditor
            value={editorState}
            onChange={e => handleEditorChange(e)}
          />
        </Item>
        <Item>
          <Button htmlType='submit' type='primary'>
            保存
          </Button>
        </Item>
      </Form>
    </Card>
  )
}

export default Form.create({ name: 'productEdit' })(Edit)
