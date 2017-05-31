var app = angular.module("app.home", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "../veiw/home.html",
        controller: "homeCtrl"
    })
})
app.controller("homeCtrl", function ($scope) {
    
})
