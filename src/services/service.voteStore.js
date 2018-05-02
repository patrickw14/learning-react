import { createStore } from 'redux';

/*
 * {
 *   type: "UPVOTE" | "DOWNVOTE",
 *   postID: String
 * }
 */ 
function voteReducer(state={}, action) {
    var newState = Object.assign({}, state);
    if (!newState[action.postID])
    newState[action.postID] = 0;

    if (action.type === "UPVOTE")
        newState[action.postID]++
    else if (action.type === "DOWNVOTE")
        newState[action.postID]--
    else
        return state;

    return newState;
}

var voteStore = createStore(voteReducer);

var VotingStore = {
    dispatch: voteStore.dispatch,
    subscribe: voteStore.subscribe,
    getState: voteStore.getState
}

export default VotingStore;