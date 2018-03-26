
let upvoteState = {};
let downvoteState = {};
let eventRegistry = {};

var VotingService = {
    
    upvote: function(postID) {
        if (!upvoteState[postID])
            upvoteState[postID] = 1;
        else
            upvoteState[postID] += 1;
        
        if (!eventRegistry[postID])
            return;

        for (var registryID in eventRegistry[postID]) {
            var subscription = eventRegistry[postID][registryID];
            subscription({
                "upvoteCount": upvoteState[postID] || 0,
                "downvoteCount": downvoteState[postID] || 0
            });
        };
    },

    downvote: function(postID) {

        if(!downvoteState[postID])
            downvoteState[postID] = 1;
        else
            downvoteState[postID] += 1;
        
        if (!eventRegistry[postID])
            return;

        for (var registryID in eventRegistry[postID]) {
            var subscription = eventRegistry[postID][registryID];
            subscription({
                "upvoteCount": upvoteState[postID] || 0,
                "downvoteCount": downvoteState[postID] || 0
            });
        };
    },

    subscribe: function(postID, callBack){
        if(eventRegistry[postID] == null)
            eventRegistry[postID] = {};

        var subscriptionID = guid();
        
        eventRegistry[postID][subscriptionID] = callBack;
        /*
         * {
         *   postID: {
         *     guid1: callback1,
         *     guid2: callback2
         *   }
         * }
         */

         return function() {
            delete eventRegistry[postID][subscriptionID];
         };
    }
}

function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export default VotingService;