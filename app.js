angular.module("demoApp", []).controller("PhoneListCtrl", function ($scope) {

    $scope.phones = [
        { name: 'Nexus S', snippet: 'Fast just got faster with Nexus S.', age: 3 },
        { name: 'Motorola XOOM™ with Wi-Fi', snippet: 'The Next, Next Generation tablet.', age: 2 },
        { name: 'MOTOROLA XOOM™', snippet: 'The Next, Next Generation tablet.', age: 1 }
    ];
    console.log($scope);
});