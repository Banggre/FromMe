// To save the profile of the user

// Imports

// Actions
const SET_TOKEN = 'SET_TOKEN'
const SET_USER = 'SET_USER'
const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'
const SET_USERPROFILE = 'SET_USERPROFILE'

// Action Creators
function setToken(token) {
    return {
        type: SET_TOKEN,
        token
    };
}

function setUser(userInfo) {
    return {
        type: SET_USER,
        userInfo
    };
}

function setLogIn() {
    return {
        type: LOG_IN
    };
}

function setLogOut() {
    return {
        type: LOG_OUT
    };
}

function setUserProfile(userProfile) {
    return {
        type: SET_USERPROFILE,
        userProfile
    };
}

// API Actions

// Initial State
const initialState = {
    isLoggedIn: false
} 

// Reducer
function reducer(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
        case SET_TOKEN:
            return applySetToken(state, action);
        case LOG_IN:
            return applyLogIn(state, action);
        case SET_USER:
            return applySetUser(state, action);
        case LOG_OUT:
            return applyLogOut(state, action);
        case SET_USERPROFILE:
            return applySetUserProfile(state, action);
    };
}

function applySetToken(state, action) {
    const { token } = action;
    return {
        ...state,
        token
    };
}

function applySetUser(state, action) {
    const { userInfo } = action;
    return {
        ...state,
        userInfo
    };
}

function applyLogIn(state, action) {
    return {
        ...state,
        isLoggedIn: true
    };
}

function applyLogOut(state, action) {
    return {
        ...state,
        isLoggedIn: false
    };
}

function applySetUserProfile(state, action) {
    const { userProfile } = action;    
    return {
        ...state,
        userProfile
    };
}

// Exports
const actionCreators = {
    setToken,
    setUser,
    setLogIn,
    setLogOut,
    setUserProfile
};

export { actionCreators };

export default reducer;