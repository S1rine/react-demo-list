import { connect } from 'react-redux'
import Commend from '../components/commend/Commend'

export default connect(
  state => ({ state: state.commendReducer })
)(Commend)