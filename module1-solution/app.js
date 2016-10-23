angular.module('lunch', []).controller('lunchCtrl', function($scope) {

    $scope.check = function(name) {

        var lunchitems = [];
        if (name === undefined || name.length === 0)
            $scope.message = "Please enter data first";
        else {
            lunchitems = name.split(",");
            if (lunchitems.length <= 3)
                $scope.message = "Enjoy!";
            else
                $scope.message = "Too Much!";
        }
    }


});