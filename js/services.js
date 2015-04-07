angular.module('styledouble.services', [])

.factory('Doubles', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var doubles = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
        id: 2,
        name: 'Andrew Jostlin',
        lastText: 'Did you get the ice cream?',
        face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
    }, {
        id: 3,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
        id: 4,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
    }];

    return {
        all: function() {
            return doubles;
        },
        remove: function(double) {
            doubles.splice(doubles.indexOf(double), 1);
        },
        get: function(doubleId) {
            for (var i = 0; i < doubles.length; i++) {
                if (doubles[i].id === parseInt(doubleId)) {
                    return doubles[i];
                }
            }
            return null;
        }
    }
})

.factory('Recommendations', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var recommendations = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
        id: 2,
        name: 'Andrew Jostlin',
        lastText: 'Did you get the ice cream?',
        face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
    }, {
        id: 3,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
        id: 4,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
    }];

    return {
        all: function() {
            return recommendations;
        },
        remove: function(recommendation) {
            recommendations.splice(recommendations.indexOf(recommendation), 1);
        },
        get: function(recommendationId) {
            for (var i = 0; i < recommendations.length; i++) {
                if (recommendations[i].id === parseInt(recommendationId)) {
                    return recommendations[i];
                }
            }
            return null;
        }
    }
})

.factory('DataStore', function() {
   //create datastore with default values
    var DataStore = {
        gender:       'male',
        birthyear:   '1950'
    };

    DataStore.setGender = function (value) {
        DataStore.gender = value;
    };

    DataStore.setBirthYear = function (value) {
        DataStore.birthyear = value;
    };

    return DataStore;
});
