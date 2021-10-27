angular.module("demoApp", []).controller("SimpleController", function($scope){
    console.log("Controller init scope:", $scope.user);
    $scope.$watch("user", function() {
        console.log("show user in $watch ", $scope.user);
    });
});

// angular.element(document).ready(function(){
//     angular.bootstrap(document, ["demoApp"]);
// });