
let upvoteState = {};
let downvoteState = {};
let eventRegistry = {};

var VotingService = {
    
    upvote: function(postID) {
        if (!upvoteState[postID])
            upvoteState[postID] = 1;
        else
            upvoteState[postID] += 1;
        console.log("postID: ", postID);
        console.log("upvote " + upvoteState[postID]);
        eventRegistry[postID].forEach(subscription => {
            subscription(state);
        });
    },

    downvote: function(postID) {

        if(!downvoteState[postID])
            downvoteState[postID] = 1;
        else
            downvoteState[postID] += 1;
        console.log("postID: ", postID);
        console.log("downvote " + downvoteState[postID]);
        eventRegistry[postID].forEach(subscription => {
            subscription(state);
        });
    },

    subscribe: function(postID, callBack){

        if(eventRegistry[postID] == null)
            eventRegistry[postID] = [];
        eventRegistry[postID].push(callBack);
    
    }
}

export default VotingService;