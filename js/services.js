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
        name: 'SallyShopper',
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
        name: 'Mary99',
        height: '5\'',
        weight: '100 lbs',
        shape: 'Pear-shaped',
        reviews: [{
            rating: {
                current: 5,
                max: 5
            },
            body: "Nice jacket!",
            author: "sally@sally.com",
            createdOn: 1397490980837,
            image: 'img/recommendations/springflingwindbreaker.png'
        }],
        face: 'img/doubles/mary.png'
    }, {
        id: 2,
        name: 'FashionJane',
        height: '5\' 7\"',
        weight: '130 lbs',
        shape:'',
        reviews: [{
            rating: {
                current: 5,
                max: 5
            },
            body: "What a great windbreaker!",
            author: "sally@sally.com",
            createdOn: 1397490980837,
            image: 'img/recommendations/springflingwindbreaker.png'
        }, {
            rating: {
                current: 2,
                max: 5
            },
            body: "Yuck!",
            author: "mary@hater.com",
            createdOn: 1397490980837,
            image: 'img/recommendations/keyholedress.png'
        }],
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
            title: "Tech Racer Back Tank",
            stats: "460 Reviews",
            summary: "<strong><u>Relevant to you</u>:</strong><br/>Most positive reviews regarding fit came from women 5\'4\" and below...",
            detail: "<strong>Some verified buyer reviews</strong><br/>Great for sweaty pursuits \"Bought this tank in grey and pink. I like that it's not too tight, and is great for moisturewicking….<br/><u>Full review</u> |  May 14, 2015<br/><br/>Light and comfy \"I bought this racerback for street wear.  i wore it on a very hot and humid day, and it kept me cool and comfortable…\"<br/><u>Full review</u> |  March 30, 2015Lemon\<br/><br/>\"I bought this tank last month. The fit was awesome. But the material is garbage.  I washed …\"<br/><u>Full review</u> |  March 15, 2015",
            createdOn: 1397490980837,
            image: 'img/recommendations/techracerbacktank.png'
        },
        {
            rating: {
                current: 5,
                max: 5
            },
            id: 2,
            title: "Tilly Cardigan",
            stats: "78 Reviews",
            summary: "<strong><u>Relevant to you</u>:</strong><br/>23 reviewers 5\'4\" and under gave this positive reviews...",
            detail: "<strong>Some verified buyer reviews</strong><br/>Great for sweaty pursuits \"Bought this sweater in white and beige. I like that it's not too tight, and is great for the office or on your day off….<br/><u>Full review</u> |  May 14, 2015<br/><br/>classic and versatile \"I bought this cardigan for the office.  I wore it on a spring day, and it kept me warm but stylish …\"<br/><u>Full review</u> |  March 30, 2015Lemon\<br/><br/>\"I bought this sweater last month. The fit was awesome. But the material is so-so.  I washed …\"<br/><u>Full review</u> |  March 15, 2015",        createdOn: 1397490980837,
            image: 'img/recommendations/tillycardigan.png'
        },
        {
            rating: {
                current: 3,
                max: 5
            },
            id: 3,
            title: "Stripe Jacket",
            stats: "35 Reviews",
            summary: "<strong><u>Relevant to you</u>:</strong><br/>15 reviewers 5\'4\" and under loved this jacket...",
            detail: "<strong>Some verified buyer reviews</strong><br/>Great for sweaty pursuits \"Bought this tank in white and navy. I like that it's not too tight, and is great for cold days….<br/><u>Full review</u> |  May 14, 2015<br/><br/>Light and comfy \"I bought this jacket for every day wear.  i wore it on a very chilly and windy day, and it kept me warm and dry…\"<br/><u>Full review</u> |  March 30, 2015Lemon\<br/><br/>\"I bought this jacket last month. The fit was awesome. But the material pills.  I washed …\"<br/><u>Full review</u> |  March 15, 2015",        createdOn: 1397490980837,
            image: 'img/recommendations/stripejacket.png'
        },
        {
            rating: {
                current: 4,
                max: 5
            },
            id: 4,
            title: "Spring Fling Windbreaker",
            stats: "420 Reviews",
            summary: "<strong><u>Relevant to you</u>:</strong><br/>32 reviewers who are curvy gave this positive reviews...",
            detail: "<strong>Some verified buyer reviews</strong><br/>Great for sweaty pursuits \"Bought this windbreaker in black and pink. I like that it's not too tight, and is great for the rain….<br/><u>Full review</u> |  May 14, 2015<br/><br/>Light and comfy \"I bought this windbreaker for street wear.  i wore it on a very cold day, and it kept me warm and dry…\"<br/><u>Full review</u> |  March 30, 2015Lemon\<br/><br/>\"I bought this jacket last month. The fit was awesome. But the material is not quality.  I washed …\"<br/><u>Full review</u> |  March 15, 2015",        createdOn: 1397490980837,
            image: 'img/recommendations/springflingwindbreaker.png'
        },
        {
            rating: {
                current: 4,
                max: 5
            },
            id: 5,
            title: "Keyhole Gown",
            stats: "46 Reviews",
            summary: "<strong><u>Relevant to you</u>:</strong><br/>15 reviewers 5\'4\" and under gave this positive reviews…",
            detail: "<strong>Some verified buyer reviews</strong><br/>Great for sweaty pursuits \"Bought this tank in grey and pink. I like that it's not too tight, and is great for moisturewicking….<br/><u>Full review</u> |  May 14, 2015<br/><br/>Light and comfy \"I bought this racerback for street wear.  i wore it on a very hot and humid day, and it kept me cool and comfortable…\"<br/><u>Full review</u> |  March 30, 2015Lemon\<br/><br/>\"I bought this tank last month. The fit was awesome. But the material is garbage.  I washed …\"<br/><u>Full review</u> |  March 15, 2015",        createdOn: 1397490980837,
            image: 'img/recommendations/keyholedress.png'
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
