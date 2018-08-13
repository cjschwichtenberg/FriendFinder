// Connect to friends.js file
var friends = require('../data/friends.js');

module.exports = function(app) {

    // API GET REQUEST that returns JSON
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });
    
    // API POST REQUEST, comparing user with best match
    app.post("/api/friends", function(req, res) {
        
        // Create objext to handle best match
        var bestMatch = {
			name: "",
			photo: "",
			friendDifference: Infinity
		};
        
        // Take result of the user survey POST request and display parsed JSON
        var userData = req.body;
        var userName = userData.name;
        var userPhoto = userData.photo;
		var userScores = userData.scores;
        var totalDifference;

        // Create for loop that goes through all friends in database 
		for  (var i=0; i < friends.length; i++) {

			console.log(friends[i].name);
			totalDifference = 0;

             // Create another loop that goes through friends survey scores and updates variable
            for (var j=0; j< friends[i].scores.length; j++){
                
                // Calculating the difference between scores and updates variable
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
            
                // Comapre the sum difference, is less than difference of the current "best match"
                if (totalDifference <= bestMatch.friendDifference){

                    // Reset the bestMatch to new friend
					bestMatch.name = friends[i].name;
					bestMatch.photo = friends[i].photo;
					bestMatch.friendDifference = totalDifference;
				}
			}
		}

        // Save user data to the database 
        friends.push(userData);

        // Return JSON with user's bestMatch- used by the html to display user match later on.
		res.json(bestMatch);

	});   
};
