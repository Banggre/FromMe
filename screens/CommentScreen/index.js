import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as cardActions } from "../../redux/modules/card";

const mapStateToProps = (state, ownProps) => {
    const { user: { userProfile } } = state; // → userProfile: {userCode: xxx, name: xxx} 
    return {
        userProfile,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);