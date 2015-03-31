angular.module('styledouble.controllers', [])

.factory('DataStore', function() {
    //create datastore with default values
    var DataStore = {
        gender:         'male',
        birthyear:      '1997',
        heightfeet:     '5',
        heightinches:   '0',
        weight:         '120',
        neck:           '14',
        chest:          '34',
        waist:          '30',
        hips:           '32'
    };

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

    return DataStore;
})

.controller('DashCtrl', function($scope) {})

.controller('GenderCtrl', function($scope, $state, DataStore) {
    $scope.formData ={};
    $scope.next = function() {
        alert("Clicked: " + $scope.formData.gender + ":" + $scope.formData.birthyear);
        DataStore.setGender($scope.formData.gender);
        DataStore.setBirthYear($scope.formData.birthyear);
        $state.go('tab.height-weight');
    };
})

.controller('HeightWeightCtrl', function($scope, $state, DataStore) {
    $scope.formData ={};
    $scope.next = function() {
        alert("Clicked: " + $scope.formData.heightfeet + ":" + $scope.formData.heightinches + ":" + $scope.formData.weight);
        DataStore.setHeightFeet($scope.formData.heightfeet);
        DataStore.setHeightInches($scope.formData.heightinches);
        DataStore.setWeight($scope.formData.weight);
        $state.go('tab.measurements');
    };
})

.controller('MeasurementsCtrl', function($scope, $state, DataStore) {
    $scope.formData ={};
    $scope.next = function() {
        //this.setValues();
        $state.go('tab.my-sizes');
    };

    $scope.details = function() {
        this.setValues();
        $state.go('tab.measurement-details');
    };

    $scope.setValues = function() {
        alert("Clicked: " + $scope.formData.neck + ":" + $scope.formData.chest
        + ":" + $scope.formData.waist + ":" + $scope.formData.hips);
        DataStore.setNeck($scope.formData.neck);
        DataStore.setChest($scope.formData.chest);
        DataStore.setWaist($scope.formData.waist);
        DataStore.setHips($scope.formData.hips);
    };
})

.controller('MeasurementDetailsCtrl', function($scope, $state, DataStore) {
    $scope.formData ={};
    $scope.next = function() {
        alert("Clicked: " );
        // Datastore set values here
        $state.go('tab.my-sizes');
    };
})

.controller('MySizesCtrl', function($scope, $state, DataStore) {
    $scope.formData ={};
    $scope.next = function() {
        alert("Clicked: " );
        // Datastore set values here
        $state.go('tab.cloth-returns');
    };
})

.controller('ClothReturnsCtrl', function($scope, $state, DataStore) {
    $scope.formData ={};
    $scope.next = function() {
        alert("Clicked: " );
        // Datastore set values here
        $state.go('tab.account');
    };
})

.controller('AccountCtrl', function($scope, $state, DataStore) {
    $scope.formData ={};
    $scope.finish = function() {
        alert("Clicked: " );
        // Datastore set values
        // Create account
    };
});