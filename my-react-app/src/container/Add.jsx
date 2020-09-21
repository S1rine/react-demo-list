import { connect } from 'react-redux'
import Add from '../components/commend/add/Add'
import { addListAction } from '../redux/actions'

export default connect(
  state => ({ state: state.commendReducer }),
  { addListAction }
)(Add)