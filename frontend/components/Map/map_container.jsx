import { connect } from 'react-redux';
import Map from './map';
import { fetchEvent } from '../../actions/event_actions';

const msp = (state, ownProps) => ({
});

const mdp = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id))
});

export default connect(msp, mdp)(EventShow);