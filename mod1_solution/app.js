(function () {
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope', '$filter']
    function LunchCheckController($scope, $filter) {
        $scope.msj = '';
        $scope.name = '';
        $scope.countItems = function () {
            if ($scope.name != '') {
                var array = $scope.name.split(',');
                for (let index = 0; index < array.length; index++) {
                    const element = array[index];
                    if (element === "") {
                        $scope.msj = "NOT considered an empty item";
                    } else {
                        if (array.length <= 3) {
                            $scope.msj = "Enjoy!";
                            
                        } else {
                            $scope.msj = "Too much!";
                        }
                    }
                }
            } else {
                $scope.msj = "Please enter data first";
            }
        }
    }

})();