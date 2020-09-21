import { connect } from 'react-redux'
import App from '../components/app'
import { incrementAction, decrementAction, setAction, asyncIncrementAction } from '../redux/actions'

export default connect(
  state => ({ state }),
  { incrementAction, decrementAction, setAction, asyncIncrementAction }
)(App)