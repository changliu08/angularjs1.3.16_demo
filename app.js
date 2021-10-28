var app = angular.module("demoApp", ["ngRoute", "demoCtrls", "demoFilters"]);
app.config(["$routeProvider", function (routeProvider) {
    routeProvider
        .when("/phones", {
            templateUrl: "src/partials/phone-list.html"
        })
        .when("/phones/:id", {
            templateUrl: "src/partials/phone-detail.html"
        })
        .otherwise({
            redirectTo: '/phones'
        })
}]);
