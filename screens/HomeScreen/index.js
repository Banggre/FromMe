import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from '../../redux/modules/user';
import { actionCreators as cardActions } from '../../redux/modules/card';

const mapStateToProps = (state, ownProps) => {
    const { user: { userInfo } } = state; // → userInfo from kakao 
    const { user: { userProfile } } = state; // → userProfile: {userCode: xxx, name: xxx} 
    const { card: { askCard } } = state;
    return {
        userInfo,
        userProfile,
        askCard
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setAskCard: (card) => {
            dispatch(cardActions.setAskCard(card))
        },
        addAskCard: (card) => {
            dispatch(cardActions.addAskCard(card))
        },
        setLogOut: () => {
            dispatch(userActions.setLogOut());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);