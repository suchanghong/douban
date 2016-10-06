/*
* @Author: 虚竹
* @Date:   2016-09-29 09:29:36
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-06 15:52:01
*/

;(function(angular) {
	'use strict';
	var app = angular.module("renren");
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/hot', {
			templateUrl: '../views/hot/view.html',
			controller: 'hotController'
		}).when('/future', {
			templateUrl: '../views/future/view.html',
			controller: 'futureController'
		}).when('/top', {
			templateUrl: '../views/top/view.html',
			controller: 'topController'
		}).when('/subject/:id', {
			templateUrl: '../views/detail/view.html',
			controller: 'detailController'
		}).otherwise({
			redirectTo: '/hot'
		});
	}]);
})(angular);