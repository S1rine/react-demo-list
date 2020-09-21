import { connect } from 'react-redux'
import List from '../../components/github/components/list/List'

export default connect(
  state => ({ state: state.githubReducer })
)(List)