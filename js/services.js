angular.module('styledouble.services', [])

.factory('Doubles', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var doubles = [{
        id: 0,
        name: 'sally@gmail.com',
        height: '5\' 4\"',
        weight: '120 lbs',
        shape: '',
        reviews: [{
            rating: {
                current: 5,
                max: 5
            },
            body: "I love this top!",
            author: "sally@sally.com",
            createdOn: 1397490980837,
            image: 'img/top1.jpg'
        }, {
            rating: {
                current: 2,
                max: 5
            },
            body: "This top sucks.",
            author: "mary@hater.com",
            createdOn: 1397490980837,
            image: 'img/top2.jpg'
        }],
        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
        id: 1,
        name: 'mary@gmail.com',
        height: '5\'',
        weight: '100 lbs',
        shape: 'Pear-shaped',
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
        id: 2,
        name: 'jane@outlook.com',
        height: '5\' 7\"',
        weight: '130 lbs',
        shape:'',
        face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
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

.factory('Recommendations',function() {

    var recommendations = [{
        rating: {
            current: 4,
            max: 5
        },
        id: 1,
        summary: "96% would recommend this to a friend Total number of reviews: 56.Most favorable reviews from cury women.",
        detail: "5 reviews were from women from 5\' 4\" to 5\' 5\" \n Most favorable reviews from cury women.",
        author: "sally@sally.com",
        createdOn: 1397490980837,
        image: 'img/top1.jpg'
    }, {
        rating: {
            current: 2,
            max: 5
        },
        id: 2,
        summary: "This top sucks.",
        detail: "More details here",
        author: "mary@hater.com",
        createdOn: 1397490980837,
        image: 'img/top2.jpg'
    }];

    return {
        all: function () {
            return recommendations;
        },
        get: function (recommendationId) {
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
