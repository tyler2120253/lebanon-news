var app = angular.module("myapp",["ngRoute", "app.akbar","app.music","app.home" , "app.youtube","mySvr"])
app.config(function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix("");
})
app.controller("mainCrtl",function($scope){
	
})