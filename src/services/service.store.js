/* eslint-disable */
import { createStore } from 'redux';

/*
 * {
 *   type: "UPVOTE" | "DOWNVOTE",
 *   postID: String
 * }
 */

const initialPostList = [{ id: 0, username: 'Mateo', body: 'Lorem Ipsulum', upVote: 0, downVote: 0 }];

function reducer(state = initialPostList, action) {
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

var reduxStore = createStore(reducer);

var store = {
    dispatch: reduxStore.dispatch,
    subscribe: reduxStore.subscribe,
    getState: reduxStore.getState
}

export default store;