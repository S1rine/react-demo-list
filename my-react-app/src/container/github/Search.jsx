import { connect } from 'react-redux'
import Search from '../../components/github/components/search/Search'
import { asyncSearchAction } from '../../redux/actions'

export default connect(
  state => ({ state: state.githubReducer }),
  { asyncSearchAction }
)(Search)