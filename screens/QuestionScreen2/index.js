import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as cardActions } from "../../redux/modules/card";

const mapStateToProps = (state, ownProps) => {
    const { user: { userInfo } } = state; // → userInfo from kakao 
    const { user: { userProfile } } = state; // → userProfile: {userCode: xxx, name: xxx} 
    const { card: { answerCard } } = state;
    return {
        userInfo,
        userProfile,
        answerCard
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setAnswerCard: (card) => {
            dispatch(cardActions.setAnswerCard(card))
        },
        addAnswerCard: (card) => {
            dispatch(cardActions.addAnswerCard(card))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);