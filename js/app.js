// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

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
              controller: 'ClothReturnsCtrl'
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

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
