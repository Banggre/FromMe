import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from '../../redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setToken: (token) => {
            dispatch(userActions.setToken(token));
        },
        setUser: (userInfo) => {
            dispatch(userActions.setUser(userInfo));
        },
        setUserProfile: (userProfile) => {
            dispatch(userActions.setUserProfile(userProfile));
        },
        setLogIn: () => {
            dispatch(userActions.setLogIn());
        },
    };
};

export default connect(null, mapDispatchToProps)(Container);
// ↑ 모든 redux ERROR의 원인은 **null** 때문이었다! (...2019년 2월 4일 새벽 1시 14분)