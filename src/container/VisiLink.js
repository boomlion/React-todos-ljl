import {connect} from 'react-redux'
import {setVisibletyList} from '../actions'
import Link from '../components/Link'
const mapStateToProps = (state,ownProps) => {
  return {
    filter: state.visibile === ownProps.filter
  }
}
const mapDispatchToProps = (disptach, ownProps) => {
  return {
    onClick: () => { disptach(setVisibletyList(ownProps.filter)) }
  }
}
const VisiLink = connect(
mapStateToProps,
mapDispatchToProps
)(Link)
export default VisiLink