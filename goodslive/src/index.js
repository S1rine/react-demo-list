import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
// import Demo1 from './components/Demo1'
// import AppRouter from './router/AppRouter'

// ReactDOM.render(
//   <AppRouter />,
//   document.getElementById('root')
// )

const COLUMN = 3
const ROW = 3
const TOTAL = COLUMN * ROW

function Square(props) {
  return (
    <button
      className='square'
      style={{ backgroundColor: props.ifWin ? 'red' : 'none' }}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  state = {
    columnList: Array(COLUMN).fill(null),
    rowList: Array(ROW).fill(null)
  }
  renderSquare(i, winnerPos) {
    return (
      <Square
        ifWin={winnerPos && winnerPos.includes(i)}
        key={Math.random() * new Date()}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    )
  }
  render() {
    const { columnList, rowList } = this.state
    const { winnerPos } = this.props
    let index = 0
    return (
      <div>
        {rowList.map((item1, i) => {
          return (
            <div key={Math.random() * new Date()} className='board-row'>
              {columnList.map((item2, j) => {
                return this.renderSquare(index++, winnerPos)
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

class Game extends React.Component {
  state = {
    history: [
      { squares: Array(9).fill(null), pos: { column: -1, row: -1 }, step: 0 }
    ],
    stepNumber: 0,
    xIsNext: true,
    clickCount: 0,
    isEqual: false,
    order: true //true 为正序 false为倒序
  }
  handleClick(i) {
    const [column, row] = getNumber(i)
    const order = this.state.order
    const originHistory = this.state.history
    const stepNumber = order
      ? this.state.stepNumber
      : originHistory.length - this.state.stepNumber - 1
    const history = order
      ? originHistory.slice(0, stepNumber + 1)
      : originHistory.slice(stepNumber, originHistory.length)
    const current = originHistory[stepNumber]
    console.log(order)
    console.log(stepNumber)
    console.log(current)
    const squares = current.squares.slice()
    console.log(squares[i])
    const clickCount = this.state.clickCount
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    let item = [
      {
        squares: squares,
        pos: { row, column },
        step: history.length
      }
    ]
    const newHistory = order ? history.concat(item) : item.concat(history)
    this.setState({
      history: newHistory,
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      clickCount: clickCount + 1
    })
    if (clickCount === TOTAL - 1) {
      this.setState({ isEqual: true })
      return
    }
  }
  jumpTo(step) {
    const isEqual = this.state.isEqual
    let newIsEqual = false
    if (step === TOTAL - 1) {
      newIsEqual = isEqual
    }
    this.setState({
      stepNumber: step,
      clickCount: step,
      isEqual: newIsEqual,
      xIsNext: step % 2 === 0
    })
  }
  changeOrder() {
    const history = this.state.history.slice()
    history.reverse()
    this.setState({ history, order: !this.state.order })
  }
  render() {
    const history = this.state.history
    const order = this.state.order
    const stepNumber = order
      ? this.state.stepNumber
      : history.length - this.state.stepNumber - 1
    const isEqual = this.state.isEqual
    const current = history[stepNumber]
    const winner = calculateWinner(current.squares)
    let moves = history.map((step, move) => {
      const col = step.pos.column !== -1 ? `${step.pos.column}列 ` : null
      const row = step.pos.row !== -1 ? ` #${step.pos.row}行` : null
      const isFirst = step.step
      const desc = isFirst
        ? 'Go to move #' + step.step + row + col
        : 'Go to game start'
      return (
        <li key={Math.random() * new Date()}>
          <button
            style={{ fontWeight: stepNumber === move ? 'bold' : 'normal' }}
            onClick={() => this.jumpTo(step.step)}
          >
            {desc}
          </button>
        </li>
      )
    })
    let status
    let winnerPos = null
    if (winner) {
      status = 'Winner: ' + winner.winner
      winnerPos = winner.pos
    } else if (isEqual) {
      status = '平局'
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
    }
    return (
      <div className='game'>
        <div className='game-board'>
          <Board
            squares={current.squares}
            winnerPos={winnerPos}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className='game-info'>
          <div>
            <button onClick={() => this.changeOrder()}>更改顺序</button>
          </div>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'))

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], pos: [a, b, c] }
    }
  }
  return null
}

function getNumber(i) {
  // 4 column 3 row
  const index = i + 1 // 8 4列 2行
  const row = Math.ceil(index / COLUMN)
  const column = index - (row - 1) * COLUMN
  return [column, row]
}
