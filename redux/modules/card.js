// To save the cards

// Imports

// Actions
const SET_ASKCARD = "SET_ASKCARD";
const ADD_ASKCARD = "ADD_ASKCARD";
const SET_ANSWERCARD = "SET_ANSWERCARD";
const ADD_ANSWERCARD = "ADD_ANSWERCARD";

// Action Creators
function setAskCard(askCard) {
    return {
      type: SET_ASKCARD,
      askCard
    };
}

function addAskCard(newAskCard) {
    console.log(newAskCard);
    return {
      type: ADD_ASKCARD,
      newAskCard
    };
}

function setAnswerCard(answerCard) {
    return {
      type: SET_ANSWERCARD,
      answerCard
    };
}

function addAnswerCard(newAnswerCard) {
    console.log(newAnswerCard);
    return {
      type: ADD_ANSWERCARD,
      newAnswerCard
    };
}

// API Actions


// Initial State
const initialState = { } 

// Reducer
function reducer(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
        case SET_ASKCARD:
            return applySetAskCard(state, action);
        case ADD_ASKCARD:
            return applyAddAskCard(state, action);
        case SET_ANSWERCARD:
            return applySetAnswerCard(state, action);
        case ADD_ANSWERCARD:
            return applyAddAnswerCard(state, action);
    };
}

function applySetAskCard(state, action) {
    const { askCard } = action;
    return {
        ...state,
        askCard
    };
}

function applyAddAskCard(state, action) {
    const { askCard } = state;
    console.log(askCard);
    const { newAskCard } = action;
    return {
        ...state,
        askCard: askCard.concat(newAskCard)
    };
}

function applySetAnswerCard(state, action) {
    const { answerCard } = action;
    return {
        ...state,
        answerCard
    };
}

function applyAddAnswerCard(state, action) {
    const { answerCard } = state;
    console.log(answerCard);
    const { newAnswerCard } = action;
    return {
        ...state,
        answerCard: answerCard.concat(newAnswerCard)
    };
}

// Exports
const actionCreators = {
    setAskCard,
    addAskCard,
    setAnswerCard,
    addAnswerCard
};

export { actionCreators };

export default reducer;