import { connect } from 'react-redux'
import List from '../components/commend/list/List'
import { delListAction } from '../redux/actions'

export default connect(
  state => ({ state: state.commendReducer }),
  { delListAction }
)(List)