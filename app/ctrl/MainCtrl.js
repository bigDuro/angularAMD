define(['angularAMD', 'dataService'], function (angularAMD) {
    angularAMD.controller('MainCtrl', ['$scope', 'dataService', function ($scope, dataService) {
        console.log('MainCtrl, ', dataService);
        $scope.message = 'MainCtrl';
    }]);
});