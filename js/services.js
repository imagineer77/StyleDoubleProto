angular.module('styledouble.services', [])

.factory('Images',function() {

    var images = [{
        image: 'img/top1.jpg'
    }, {
        image: 'img/top2.jpg'
    }, {
        image: 'img/top2.jpg'
    }, {
        image: 'img/top2.jpg'
    },{
        image: 'img/top2.jpg'
    }, {
        image: 'img/top2.jpg'
    }, {
        image: 'img/top1.jpg'
    }, {
        image: 'img/top1.jpg'
    }, {
        image: 'img/top2.jpg'
    }, {
        image: 'img/top1.jpg'
    },{
        image: 'img/top2.jpg'
    }, {
        image: 'img/top2.jpg'
    }, {
        image: 'img/top2.jpg'
    }, {
        image: 'img/top2.jpg'
    },{
        image: 'img/top2.jpg'
    }, {
        image: 'img/top2.jpg'
    }, {
        image: 'img/top1.jpg'
    }, {
        image: 'img/top1.jpg'
    }, {
        image: 'img/top2.jpg'
    }, {
        image: 'img/top1.jpg'
    },{
        image: 'img/top2.jpg'
    }, {
        image: 'img/top2.jpg'
    }
    ];

        return {
            loadImages: function() {
                return images;
            },
            get: function(imageId) {
                for (var i = 0; i < images.length; i++) {
                    if (images[i].id === parseInt(imageId)) {
                        return doubles[i];
                    }
                }
                return null;
            }
        }
})

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
        face: 'img/doubles/sally.png'
    }, {
        id: 1,
        name: 'mary@gmail.com',
        height: '5\'',
        weight: '100 lbs',
        shape: 'Pear-shaped',
        face: 'img/doubles/mary.png'
    }, {
        id: 2,
        name: 'jane@outlook.com',
        height: '5\' 7\"',
        weight: '130 lbs',
        shape:'',
        face: 'img/doubles/jane.png'
    }];

    return {
        all: function() {
            return doubles;
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

    var recommendations = [
        {
        rating: {
            current: 4,
            max: 5
        },
        id: 1,
        summary: "<strong>Tech Racer Back Tank</strong><br/>Reviews counted: 460<br/>89% gave this 3 stars or above<br/><br/><strong>Summary</strong><br/>Most positive reviews regarding fit came from women 5\'7\" and above. Most positive comments were that it is lightweight. Most negative comments were about durability of fabric.",
        detail: "<strong>Some verified buyer reviews</strong><br/>Great for sweaty pursuits \"Bought this tank in grey and pink. I like that it's not too tight, and is great for moisturewicking….<br/><u>Full review</u> |  May 14, 2015<br/><br/>Light and comfy \"I bought this racerback for street wear.  i wore it on a very hot and humid day, and it kept me cool and comfortable…\"<br/><u>Full review</u> |  March 30, 2015Lemon\<br/><br/>\"I bought this tank last month. The fit was awesome. But the material is garbage.  I washed …\"<br/><u>Full review</u> |  March 15, 2015",        createdOn: 1397490980837,
        image: 'img/recommendations/techracerbacktank.png'
        }
    ];

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
