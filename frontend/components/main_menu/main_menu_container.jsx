import MainMenu from './main_menu';
import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);