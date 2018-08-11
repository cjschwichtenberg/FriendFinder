// Connect to friends.js file
var friends = require('..data/friends.js');
console.log('Friends: ' + friends);

module.exports = function(app) {

    app.get('/data/friends', function(req, res){
        res.json(friends);
    });

    app.post("/data/friends"), function(req,res){
        var addPerson = req.body;
        console.log(addPerson),

        var bestMatch = {
            name = "",
            photo = "",
            friendDifference = 1000
        };

        var userData = req.body;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var userScores = userData.scores;
        console.log (userData);
        console.log (userName);
        console.log(userPhoto);
        console.log(userScores);

        var totalDifference = 0;
        
        for (var i = 0; i < friends[i].length; i++) {
            console.log(friends[i].name);
            totalDifference = 0;
            
            for(var j = 0; j <friends[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                if (totalDifference <= bestMatch.friendDifference){
					bestMatch.name = friends[i].name;
					bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }
        
        friends.push(userData);
        
        res.json(bestMatch);
    });
}

