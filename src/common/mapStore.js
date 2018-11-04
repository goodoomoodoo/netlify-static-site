import { logUserState } from './redux/action';

export const mapDispatchToProps = dispatch => ({
    logUserState: user => dispatch( logUserState( user ) )
});
  
export const mapStateToProps = state => ({
    user: state.user
});