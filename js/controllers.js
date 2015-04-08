angular.module('styledouble.controllers', [])


.factory('DataStore', function() {
        //create datastore with default values
        /*var DataStore = {
         gender:         'male',
         birthyear:      '1997',
         heightfeet:     '5',
         heightinches:   '0',
         weight:         '120',
         neck:           '14',
         chest:          '34',
         waist:          '30',
         hips:           '32'
         };*/

        var DataStore = {};

        DataStore.setGender = function (value) {
            DataStore.gender = value;
        };

        DataStore.setBirthYear = function (value) {
            DataStore.birthyear = value;
        };

        DataStore.setHeightFeet = function (value) {
            DataStore.hieghtfeet = value;
        };

        DataStore.setHeightInches = function (value) {
            DataStore.heightinches = value;
        };

        DataStore.setWeight = function (value) {
            DataStore.weight = value;
        };

        DataStore.setNeck = function (value) {
            DataStore.neck = value;
        };

        DataStore.setChest = function (value) {
            DataStore.chest = value;
        };

        DataStore.setWaist = function (value) {
            DataStore.waist = value;
        };

        DataStore.setHips = function (value) {
            DataStore.hips = value;
        };
        /*
         DataStore.setGapMin = function (value) {
         DataStore.gapmin = value;
         };
         */
        return DataStore;
    })

    .controller('DashCtrl', function($scope, $state) {
        $scope.text = "Welcome";
    })

    .controller('DoublesCtrl', function($scope, Doubles) {
        $scope.doubles = Doubles.all();
        $scope.remove = function(double) {
            Doubles.remove(double);
        }
    })

    .controller('DoubleDetailCtrl', function($scope, $stateParams, Doubles) {
        $scope.double = Doubles.get($stateParams.doubleId);
    })

    .controller('RecommendationsCtrl', function($scope, Recommendations) {
        $scope.recommendations = Recommendations.all();
        $scope.remove = function(recommendation) {
            Recommendations.remove(recommendation);
        }
    })

    .controller('RecommendationDetailCtrl', function($scope, $stateParams, Recommendations) {
        $scope.recommendation = Recommendations.get($stateParams.recommendationId);
    })

    .controller('UploadCtrl', function($scope, $state) {
        $scope.text = "Upload";
    })

    .controller('ProfileCtrl', function($scope, $state) {
        $scope.text = "Profile";
    })

/*

    .controller('DashCtrl', function($scope, $state) {
        $scope.next = function() {
            $state.go('tab.gender');
        };
    })

    .controller('GenderCtrl', function($scope, $state, DataStore) {
        $scope.formData ={};
        /!*
         // if use this, values need to be carefully reset
         $scope.tempGender = {};
         if(DataStore.gender === 'female' || $scope.formData.gender === 'female') {
         $scope.tempGender = { value: 'female' };
         } else {
         $scope.tempGender = { value: 'male' };
         }
         *!/
        $scope.years = [];
        for (var i = 2015; i >= 1915; i--) {
            var year = i.toString();
            $scope.years.push({value:year, displayName: year});
        }
        $scope.formData.birthyear = "2015";

        $scope.next = function() {
            //alert("Clicked: " + $scope.formData.gender + ":" + $scope.formData.birthyear);
            DataStore.setGender($scope.formData.gender);
            DataStore.setBirthYear($scope.formData.birthyear);
            $state.go('tab.height-weight');
        };
    })

    .controller('HeightWeightCtrl', function($scope, $state, DataStore) {
        $scope.formData ={};

        $scope.inches = [];
        for (var i = 0; i <= 11; i++) {
            var ins = i.toString();
            $scope.inches.push({value:ins, displayName: ins});
        }
        $scope.formData.heightinches = "0";

        $scope.weights = [];
        for (var i = 80; i <= 250; i++) {
            var lbs = i.toString();
            $scope.weights.push({value:lbs, displayName: lbs});
        }
        $scope.formData.weight = "80";

        $scope.next = function() {
            //alert("Clicked: " + $scope.formData.heightfeet + ":" + $scope.formData.heightinches + ":" + $scope.formData.weight);
            DataStore.setHeightFeet($scope.formData.heightfeet);
            DataStore.setHeightInches($scope.formData.heightinches);
            DataStore.setWeight($scope.formData.weight);

            if(DataStore.gender === 'female') {
                $state.go('tab.body-shape-female');
            }
            else {
                $state.go('tab.body-shape-male');
            };
        };
    })

    .controller('BodyShapeFemaleCtrl', function($scope, $state, DataStore) {
        $scope.formData ={};
        /!*
         // if use this, values need to be carefully reset
         $scope.tempGender = {};
         if(DataStore.gender === 'female') {
         $scope.tempGender = { value: 'female' };
         } else {
         $scope.tempGender = { value: 'male' };
         }
         *!/
        $scope.next = function() {
            //alert("Clicked: " );
            // Datastore set values here
            if(DataStore.gender === 'female') {
                $state.go('tab.measurements');
            } else {
                $state.go('tab.gender');
            }
        };
    })

    .controller('BodyShapeMaleCtrl', function($scope, $state, DataStore) {
        $scope.formData ={};
        /!*
         // if use this, values need to be carefully reset
         $scope.tempGender = {};
         if(DataStore.gender === 'male') {
         $scope.tempGender = { value: 'male' };
         } else {
         $scope.tempGender = { value: 'female' };
         }
         *!/
        $scope.next = function() {
            //alert("Clicked: " );
            // Datastore set values here
            if(DataStore.gender === 'male') {
                $state.go('tab.measurements');
            } else {
                $state.go('tab.gender');
            }
        };

// http://ionicframework.com/docs/api/service/$ionicPopover/
        /!*
         // .fromTemplate() method
         var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

         $scope.popover = $ionicPopover.fromTemplate(template, {
         scope: $scope
         });

         // .fromTemplateUrl() method
         $ionicPopover.fromTemplateUrl('my-popover.html', {
         scope: $scope
         }).then(function(popover) {
         $scope.popover = popover;
         });

         $scope.openPopover = function($event) {
         $scope.popover.show($event);
         };
         $scope.closePopover = function() {
         $scope.popover.hide();
         };
         //Cleanup the popover when we're done with it!
         $scope.$on('$destroy', function() {
         $scope.popover.remove();
         });
         // Execute action on hide popover
         $scope.$on('popover.hidden', function() {
         // Execute action
         });
         // Execute action on remove popover
         $scope.$on('popover.removed', function() {
         // Execute action
         });
         *!/
    })

    .controller('MeasurementsCtrl', function($scope, $state, DataStore) {
        $scope.setValues = function() {
            /!*alert("Clicked: " + $scope.formData.neck + ":" + $scope.formData.chest
             + ":" + $scope.formData.waist + ":" + $scope.formData.hips);*!/
            DataStore.setNeck($scope.formData.neck);
            DataStore.setChest($scope.formData.chest);
            DataStore.setWaist($scope.formData.waist);
            DataStore.setHips($scope.formData.hips);
        };

        $scope.formData ={};
        $scope.next = function() {
            this.setValues();
            $state.go('tab.brands-like');
        };

        $scope.details = function() {
            this.setValues();
            $state.go('tab.measurement-details');
        };
    })

    .controller('MeasurementDetailsCtrl', function($scope, $state, DataStore) {
        $scope.formData ={};
        $scope.next = function() {
            //alert("Clicked: " );
            // Datastore set values here???
            $state.go('tab.brands-like');
        };
    })

    .controller('BrandsLikeCtrl', function($scope, $state, DataStore) {
        $scope.formData ={};
        $scope.next = function() {
            //alert("Clicked: " );
            // Datastore set values here
            $state.go('tab.my-sizes');
        };
    })

    .controller('MySizesCtrl', function($scope, $state, DataStore) {
        $scope.formData ={};
        $scope.next = function() {
            //alert("Clicked: " );
            // Datastore set values here
            $state.go('tab.cloth-returns');
        };
    })

    .controller('ClothReturnsCtrl', function($scope, $state, DataStore) {
        $scope.formData ={};
        $scope.next = function() {
            //alert("Clicked: " );
            // Datastore set values here
            $state.go('tab.account');
        };
    })

    .controller('AccountCtrl', function($scope, $state, DataStore) {
        $scope.formData ={};

        $scope.isValid = function() {
            return  $scope.formData.email.length > 0 &&
                $scope.formData.password.length > 0 &&
                $scope.formData.passwordx.length > 0;
        };

        $scope.finish = function() {
            if($scope.formData.password === $scope.formData.passwordx)
            {
                alert("Email: " + $scope.formData.email + "\n"
                + "Password: " + $scope.formData.password + "\n"
                + "Password Verify " + $scope.formData.passwordx + "\n"
                + "Gender: " + DataStore.gender + "\n"
                + "Birth year: " + +DataStore.birthyear + "\n"
                + "Height: " + +DataStore.heightfeet + " ft " + DataStore.heightinches + " in" + "\n"
                + "Weight: " + +DataStore.weight + "\n"
                + "Neck: " + +DataStore.neck + " in" + "\n"
                + "Chest: " + +DataStore.chest + " in" + "\n"
                + "Waist: " + +DataStore.waist + " in" + "\n"
                + "Hips: " + +DataStore.hips + " in");
            }
            else {
                alert("Passwords must match!");
            }
        };
    });
*/