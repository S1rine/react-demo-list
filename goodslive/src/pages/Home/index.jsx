import React, { useState, useEffect } from 'react'
// import FootNav from '../../components/FootNav'
// import HomeHeader from './HomeHeader'
// import Swiper from '../../components/Swiper'

// import banner1 from '../../static/images/banner1.png'
// import banner2 from '../../static/images/banner2.png'
// import banner3 from '../../static/images/banner3.png'

const initalList = [
  { id: 1, name: '《算法导论》', date: '2006-9', price: '85.00', num: 1 },
  { id: 2, name: '《UNIX编程艺术》', date: '2006-2', price: '59.00', num: 1 },
  { id: 3, name: '《编程珠玑》', date: '2008-10', price: '39.00', num: 1 },
  { id: 4, name: '《代码大全》', date: '2006-3', price: '128.00', num: 1 },
]

const fomatPrice = (price) => {
  price = Number(price)
  return `￥${price.toFixed(2)}`
}

export default () => {
  const [list, setList] = useState(initalList)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const t = list.reduce((prev, item) => {
      return prev + item.price * item.num
    }, 0)
    // let t = 0
    // list.forEach(v => {
    //   t += v.price * v.num
    // })
    setTotal(t)
  }, [list])
  const dec = (index) => {
    const item = list[index]
    item.num--
    setList([...list])
  }
  const inc = (index) => {
    const item = list[index]
    item.num++
    setList([...list])
  }
  const remove = (index) => {
    const _list = [...list]
    _list.splice(index, 1)
    setList(_list)
  }
  return (
    <div>
      {
        !!list.length &&
        <table style={{ borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#ccc' }}>
            <tr>
              <th></th>
              <th>书籍名称</th>
              <th>出版日期</th>
              <th>价格</th>
              <th>购买数量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{fomatPrice(item.price)}</td>
                  <td>
                    <button disabled={item.num === 1 ? true : false} onClick={() => { dec(index) }}>-</button>
                    <span>{item.num}</span>
                    <button onClick={() => { inc(index) }}>+</button>
                  </td>
                  <td>
                    <button onClick={() => { remove(index) }}>移除</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      }
      <p>
        {
          list.length ? '总价格：' + fomatPrice(total) : '还没有选择商品~'
        }

      </p>
    </div>
  )
}
