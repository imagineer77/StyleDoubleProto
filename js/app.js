angular.module('styledouble', ['ionic', 'styledouble.controllers', 'styledouble.services', 'ngCordova'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function($compileProvider){
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile|content):|data:image\//);
    })

    .config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider


            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            // Each tab has its own nav history stack:
            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })

            .state('tab.doubles', {
                url: '/doubles',
                views: {
                    'doubles': {
                        templateUrl: 'templates/doubles.html',
                        controller: 'DoublesCtrl'
                    }
                }
            })

            .state('tab.doubles-detail', {
                url: '/doubles/:doubleId',
                views: {
                    'doubles': {
                        templateUrl: 'templates/double-detail.html',
                        controller: 'DoubleDetailCtrl'
                    }
                }
            })

            .state('tab.recommendations', {
                url: '/recommendations',
                views: {
                    'recommendations': {
                        templateUrl: 'templates/recommendations.html',
                        controller: 'RecommendationsCtrl'
                    }
                }
            })

            .state('tab.recommendations-detail', {
                url: '/recommendations/:recommendationId',
                views: {
                    'recommendations': {
                        templateUrl: 'templates/recommendation-detail.html',
                        controller: 'RecommendationDetailCtrl'
                    }
                }
            })

            .state('tab.profile', {
                url: '/profile',
                views: {
                    'doubles': {
                        templateUrl: 'templates/profile.html',
                        controller: 'ProfileCtrl'
                    }
                }
            })

            .state('tab.upload', {
                url: '/upload',
                views: {
                    'upload': {
                        templateUrl: 'templates/upload.html',
                        controller: 'UploadCtrl'
                    }
                }
            });

        /*
            .state('tab.gender', {
                url: "/gender",
                views: {
                    'gender': {
                        templateUrl: 'templates/gender.html',
                        controller: 'GenderCtrl'
                    }
                }
            })

            .state('tab.height-weight', {
                url: '/height-weight',
                views: {
                    'height-weight': {
                        templateUrl: 'templates/height-weight.html',
                        controller: 'HeightWeightCtrl'
                    }
                }
            })

            .state('tab.body-shape-female', {
                url: "/body-shape-female",
                views: {
                    'body-shape': {
                        templateUrl: 'templates/body-shape-female.html',
                        controller: 'BodyShapeFemaleCtrl'
                    }
                }
            })


            .state('tab.body-shape-male', {
                url: "/body-shape-male",
                views: {
                    'body-shape': {
                        templateUrl: 'templates/body-shape-male.html',
                        controller: 'BodyShapeMaleCtrl'
                    }
                }
            })

            .state('tab.measurements', {
                url: '/measurements',
                views: {
                    'measurements': {
                        templateUrl: 'templates/measurements.html',
                        controller: 'MeasurementsCtrl'
                    }
                }
            })

            .state('tab.measurement-details', {
                url: '/measurement-details',
                views: {
                    'measurement-details': {
                        templateUrl: 'templates/measurement-details.html',
                        controller: 'MeasurementDetailsCtrl'
                    }
                }
            })

            .state('tab.my-sizes', {
                url: '/my-sizes',
                views: {
                    'my-sizes': {
                        templateUrl: 'templates/my-sizes.html',
                        controller: 'MySizesCtrl'
                    }
                }
            })

            .state('tab.cloth-returns', {
                url: '/cloth-returns',
                views: {
                    'cloth-returns': {
                        templateUrl: 'templates/cloth-returns.html',
                        controller: 'ClothReturnsCtrl'
                    }
                }
            })

            .state('tab.account', {
                url: '/account',
                views: {
                    'account': {
                        templateUrl: 'templates/account.html',
                        controller: 'AccountCtrl'
                    }
                }
            });
*/

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/dash');

    });
