angular.module("demoCtrls", []).controller("PhoneListCtrl", function ($scope, $http) {
    $http.get("metadata/phones.json").then(function (resp) {
        $scope.phones = resp.data;
    });
}).controller("PhoneDetailCtrl", function ($scope, $routeParams, $http) {
    $scope.phoneId = $routeParams.id;
    $http.get(`metadata/phone${$scope.phoneId}.json`).then(function (resp) {
        $scope.phoneInfo = resp.data;
    });
});