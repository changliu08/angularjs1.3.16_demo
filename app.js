var app = angular.module("demoApp", ["ngRoute"]);
app.config(["$routeProvider", function (routeProvider) {
    routeProvider
        .when("/phones", {
            templateUrl: "partials/phone-list.html"
        })
        .when("/phones/:id", {
            templateUrl: "partials/phone-detail.html"
        })
        .otherwise({
            redirectTo: '/phones'
        })
}]);
app.controller("PhoneListCtrl", function ($scope, $http) {
    $http.get("phones.json").then(function (resp) {
        $scope.phones = resp.data;
    });
    // console.log($scope);
}).controller("PhoneDetailCtrl", function ($scope, $routeParams) {
    $scope.phoneId = $routeParams.id;
});
