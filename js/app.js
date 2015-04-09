angular.module('styledouble', ['ionic', 'styledouble.controllers', 'styledouble.services'])

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

  // ********************************** //
  // *** from example *** //
    .state('signin', {
      url: '/sign-in',
      //views: {
        //'sign-in': {
          templateUrl: 'templates/sign-in.html',
          controller: 'SignInCtrl'
        //}
      //}
    })
    .state('forgotpassword', {
      url: '/forgot-password',
      views: {
        'sign-in': {
          templateUrl: 'templates/forgot-password.html'
        }
      }
    })
            .state('tab.account', {
                url: '/account',
                views: {
                    'sign-in': {
                        templateUrl: 'templates/account.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
    /*
    .state('tab.welcome-home', {
      url: '/welcome-home',
      views: {
        'welcome-home': {
          templateUrl: 'templates/welcome-home.html',
          controller: 'WelcomeHomeCtrl'
        }
      }
    })
    */
    .state('tab.home', {
      url: '/home',
      views: {
        'home': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })
    .state('tab.facts', {
      url: '/facts',
      views: {
        'home': {
          templateUrl: 'templates/facts.html'
        }
      }
    })
    .state('tab.facts2', {
      url: '/facts2',
      views: {
        'home': {
          templateUrl: 'templates/facts2.html'
        }
      }
    })
    .state('tab.about', {
      url: '/about',
      views: {
        'about': {
          templateUrl: 'templates/about.html'
        }
      }
    })
    .state('tab.navstack', {
      url: '/navstack',
      views: {
        'about': {
          templateUrl: 'templates/nav-stack.html'
        }
      }
    })
    /*
    .state('tab.contact', {
      url: '/contact',
      views: {
        'contact-tab': {
          templateUrl: 'templates/contact.html'
        }
      }
    });
    */
  // ********************************** //

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

            .state('tab.upload', {
                url: '/upload',
                views: {
                    'upload': {
                        templateUrl: 'templates/upload.html',
                        controller: 'UploadCtrl'
                    }
                }
            })

            .state('tab.profile', {
                url: '/profile',
                views: {
                    'profile': {
                        templateUrl: 'templates/profile.html',
                        controller: 'ProfileCtrl'
                    }
                }
            })

            .state('tab.gender', {
                url: "/gender",
                views: {
                    'profile': {
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

            .state('tab.brands-like', {
                url: '/brands-like',
                views: {
                    'brands-like': {
                        templateUrl: 'templates/brands-like.html',
                        controller: 'BrandsLikeCtrl'
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
            });

        // if none of the above states are matched, use this as the fallback
        //$urlRouterProvider.otherwise('/tab/dash');
        //$urlRouterProvider.otherwise('/tab/home');
        $urlRouterProvider.otherwise('/sign-in');

    });
