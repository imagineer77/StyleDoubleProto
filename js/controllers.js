angular.module('styledouble.controllers', [])

    .controller('SignInCtrl', function($scope, $state) {
        $scope.signIn = function(user) {
            console.log('Sign-In', user);
            //$state.go('tab.home');
            $state.go('tab.recommendations');
            //$state.go('tab.doubles');
        };
        /*
        $scope.forgetPassword = function() {
            $state.go('tab.forgot-password');
        };
        */
        /*
        $scope.createAccount = function() {
            $state.go('tab.gender');
        };
        */
    })

    .controller('HomeCtrl', function($scope) {
        console.log('HomeCtrl');
    })

    .directive('starRating', function () {
        return {
            restrict: 'A',
            template: '<ul class="rating">' +
            '<li ng-repeat="star in stars" ng-class="star">' +
            '\u2605' +
            '</li>' +
            '</ul>',
            scope: {
                ratingValue: '=',
                max: '='
            },
            link: function (scope, elem, attrs) {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            }
        }
    })

    .controller('ProfileCtrl', function($scope, $state) {
        $scope.text = "Profile";
        $scope.next = function() {
            $state.go('tab.gender');
        };
    })

    .controller('DashCtrl', function($scope, $state) {
        $scope.text = "Welcome";
    })

    .controller('DoublesCtrl', function($scope, Doubles) {
        $scope.doubles = Doubles.all();
        $scope.remove = function(double) {
            Doubles.remove(double);
        };
    })

    .controller('DoubleDetailCtrl', function($scope, $stateParams, Doubles) {
        $scope.double = Doubles.get($stateParams.doubleId);
    })

    .controller('RecommendationsCtrl', function($scope, Recommendations) {
        $scope.recommendations = Recommendations.all();
        $scope.remove = function(recommendation) {
            Recommendations.remove(recommendation);
        };
    })

    .controller('RecommendationDetailCtrl', function($scope, $stateParams, Recommendations) {
        $scope.recommendation = Recommendations.get($stateParams.recommendationId);
    })

.controller('UploadCtrl', function($scope, $cordovaCamera, $cordovaImagePicker) {
    var options1 = {
        maximumImagesCount: 100,
        width: 100,
        height: 100,
        quality: 80
    };

    $scope.selectPicture = function() {
        $cordovaImagePicker.getPictures(options1)
            .then(function (results) {
                for (var i = 0; i < results.length; i++) {
                    $scope.imgURI = results[i];
                }
            }, function (error) {
                alert(error);
            });
    };

    $scope.takePicture = function() {
        var options2 = {
            quality : 75,
            destinationType : Camera.DestinationType.DATA_URL,
            sourceType :Camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options2).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            alert("No camera availabel on iPhone Sim!");
        });
    };

    $scope.upload = function($scope) {
        alert("Uploaded!");
        $scope.imgURI = undefined;
        //$scope.comments = "";
        $scope.formData = {};
    };
})


/*
.controller('UploadCtrl', function($scope,  $timeout, $cordovaFileTransfer) {

    $scope.fileName = '';

    $scope.openFileDialog = function () {
        ionic.trigger('click', {target: document.getElementById('file')});
    };


    angular.element('#file').on('change', function (event) {
        var file = event.target.files[0];
        $scope.fileName = file.name;
        $scope.$apply();
    });
});
*/


/*

    .controller('DashCtrl', function($scope, $state) {
        $scope.next = function() {
            $state.go('tab.gender');
        };
    })
*/
    .controller('GenderCtrl', function($scope, $state, DataStore) {
        $scope.formData ={};
        /*
        // if use this, values need to be carefully reset
        $scope.tempGender = {};
        if(DataStore.gender === 'female' || $scope.formData.gender === 'female') {
            $scope.tempGender = { value: 'female' };
        } else {
            $scope.tempGender = { value: 'male' };
        };
        */
        $scope.years = [];
        for (var i = 2015; i >= 1915; i--) {
            var year = i.toString();
            $scope.years.push({value:year, displayName: year});
        }
        $scope.formData.birthyear = "2015";

        // TODO: data save to local if not done with AccountCtrl for the 1st time
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

        // TODO: data save to local if not done with AccountCtrl for the 1st time
        $scope.next = function() {
            //alert("Clicked: " + $scope.formData.heightfeet + ":" + $scope.formData.heightinches + ":" + $scope.formData.weight);
            DataStore.setHeightFeet($scope.formData.heightfeet);
            DataStore.setHeightInches($scope.formData.heightinches);
            DataStore.setWeight($scope.formData.weight);
            if (DataStore.gender === 'female') {
                $state.go('tab.body-shape-female');
            } else {
                $state.go('tab.body-shape-male');
            };
        };
    })

    .controller('BodyShapeFemaleCtrl', function($scope, $state, DataStore) {
        $scope.formData ={};
        /*
        // if use this, values need to be carefully reset
        $scope.tempGender = {};
        if(DataStore.gender === 'female') {
            $scope.tempGender = { value: 'female' };
        } else {
            $scope.tempGender = { value: 'male' };
        }
        */
        // TODO: data save to local if not done with AccountCtrl for the 1st time
        $scope.next = function() {
            //alert("Clicked: " );
            // Datastore set values here
            if(DataStore.gender === 'female') {
                $state.go('tab.measurements');
            } else {
                $state.go('tab.gender');
            };
        };
    })

    .controller('BodyShapeMaleCtrl', function($scope, $state, DataStore) {
        $scope.formData ={};
        /*
        // if use this, values need to be carefully reset
        $scope.tempGender = {};
        if(DataStore.gender === 'male') {
            $scope.tempGender = { value: 'male' };
        } else {
            $scope.tempGender = { value: 'female' };
        }
        */
        // TODO: data save to local if not done with AccountCtrl for the 1st time
        $scope.next = function() {
            //alert("Clicked: " );
            // Datastore set values here
            if(DataStore.gender === 'male') {
                $state.go('tab.measurements');
            } else {
                $state.go('tab.gender');
            };
        };

        // http://ionicframework.com/docs/api/service/$ionicPopover/
        /*
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
        */
    })

    .controller('MeasurementsCtrl', function($scope, $state, DataStore) {
        $scope.setValues = function() {
            /*alert("Clicked: " + $scope.formData.neck + ":" + $scope.formData.chest
            + ":" + $scope.formData.waist + ":" + $scope.formData.hips);*/
            DataStore.setNeck($scope.formData.neck);
            DataStore.setChest($scope.formData.chest);
            DataStore.setWaist($scope.formData.waist);
            DataStore.setHips($scope.formData.hips);
        };

        $scope.formData ={};
        // TODO: data save to local if not done with AccountCtrl for the 1st time
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
        // TODO: data save to local if not done with AccountCtrl for the 1st time
        $scope.next = function() {
            //alert("Clicked: " );
            // Datastore set values here???
            $state.go('tab.brands-like');
        };
    })

    .controller('BrandsLikeCtrl', function($scope, $state, DataStore) {
        $scope.formData ={};
        // TODO: data save to local if not done with AccountCtrl for the 1st time
        $scope.next = function() {
            //alert("Clicked: " );
            // Datastore set values here
            $state.go('tab.my-sizes');
        };
    })

    .controller('MySizesCtrl', function($scope, $state, DataStore) {
        $scope.formData ={};
        // TODO: data save to local if not done with AccountCtrl for the 1st time
        $scope.next = function() {
            //alert("Clicked: " );
            // Datastore set values here
            $state.go('tab.cloth-returns');
        };
    })

    .controller('ClothReturnsCtrl', function($scope, $state, DataStore) {
        $scope.formData ={};
        // TODO: data save to local if not done with AccountCtrl for the 1st time
        $scope.next = function() {
            //alert("Clicked: " );
            // Datastore set values here
            $state.go('tab.account');
        };
    })

    .controller('ForgetPasswordCtrl', function($scope, $state) {
        //$scope.backToSignIn = function() {
        //    $state.go('tab.profile');
        //};
    })

    .controller('AccountCtrl', function($scope, $state, DataStore) {
        $scope.formData ={};

        $scope.isValid = function() {
            return  $scope.formData.email.length > 0 &&
                $scope.formData.password.length > 0 &&
                $scope.formData.passwordx.length > 0;
        };

        // TODO: data save to db to create account
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
                $state.go('tab.recommendations');
                //$state.go('tab.doubles');
            } else {
                alert("Passwords must match!");
            };
        };
    });