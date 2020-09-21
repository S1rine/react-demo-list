import { connect } from 'react-redux'
import Github from '../../components/github/Github'

export default connect(
  state => ({ state: state.githubReducer })
)(Github)