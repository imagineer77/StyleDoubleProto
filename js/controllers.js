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

    return DataStore;
})

.controller('DashCtrl', function($scope, $state) {
    $scope.next = function() {
        $state.go('tab.gender');
    };
})

.controller('GenderCtrl', function($scope, $state, DataStore) {
    $scope.formData ={};

    $scope.years = [];
    for (var i = 2015; i >= 1915; i--) {
        var year = i.toString();
        $scope.years.push({value:year, displayName: year});
    }
    $scope.formData.birthyear = "1995";

    $scope.next = function() {
        alert("Clicked: " + $scope.formData.gender + ":" + $scope.formData.birthyear);
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
        alert("Clicked: " + $scope.formData.heightfeet + ":" + $scope.formData.heightinches + ":" + $scope.formData.weight);
        DataStore.setHeightFeet($scope.formData.heightfeet);
        DataStore.setHeightInches($scope.formData.heightinches);
        DataStore.setWeight($scope.formData.weight);
        $state.go('tab.body-shape');
    };
})

.controller('BodyShapeCtrl', function($scope, $state, DataStore) {
    $scope.formData ={};
    $scope.next = function() {
        alert("Clicked: " );
        // Datastore set values here
        $state.go('tab.my-sizes');
    };
})

.controller('MeasurementsCtrl', function($scope, $state, DataStore) {
    $scope.setValues = function() {
        alert("Clicked: " + $scope.formData.neck + ":" + $scope.formData.chest
        + ":" + $scope.formData.waist + ":" + $scope.formData.hips);
        DataStore.setNeck($scope.formData.neck);
        DataStore.setChest($scope.formData.chest);
        DataStore.setWaist($scope.formData.waist);
        DataStore.setHips($scope.formData.hips);
    };

    $scope.formData ={};
    $scope.next = function() {
        this.setValues();
        $state.go('tab.my-sizes');
    };

    $scope.details = function() {
        this.setValues();
        $state.go('tab.measurement-details');
    };
})

.controller('MeasurementDetailsCtrl', function($scope, $state, DataStore) {
    $scope.formData ={};
    $scope.next = function() {
        alert("Clicked: " );
        // Datastore set values here???
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
        alert("Email: " + $scope.formData.email + "\n"
                + "Password: " + $scope.formData.password + "\n"
                + "Password Verify "+ $scope.formData.passwordx + "\n"
                + "Gender: " + DataStore.gender + "\n"
                + "Birth year: " + + DataStore.birthyear + "\n"
                + "Height: " + + DataStore.heightfeet +" ft "+ DataStore.heightinches + " in" + "\n"
                + "Weight: " + + DataStore.weight + "\n"
                + "Neck: " + + DataStore.neck + " in" + "\n"
                + "Chest: " + + DataStore.chest + " in" + "\n"
                + "Waist: " + + DataStore.waist + " in" + "\n"
                + "Hips: " + + DataStore.hips + " in");
    };
});