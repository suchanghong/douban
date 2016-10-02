/*
* @Author: 虚竹
* @Date:   2016-09-29 12:37:03
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-02 16:24:11
*/
(function(angular) {
	'use strict';
	var app = angular.module("renren");
	app.controller('futureController', ['$scope', 'service', function($scope, service){
        
        var pageSize = 10;
        var page = 1;
        var start = pageSize * (page-1);

        $scope.totalPage = 1;
        $scope.currentPage = 1;
        $scope.dataList = {};
        function getMovie(start) {
            var url = "http://api.douban.com/v2/movie/coming_soon";
            service.jsonp(url, {
                start: start,
                count: pageSize
            }, function(data) {
                $scope.dataList = data;
                console.log(data);
                $scope.totalPage = Math.ceil(data.total/pageSize);
                $scope.$apply();
            });
        }
        getMovie(0);

        $scope.goNext = function(currentPage) {
            if(currentPage <= $scope.totalPage) {
                var start = pageSize * (currentPage - 1);
                console.log(start);

                getMovie(start);
                $scope.currentPage++;
            }
        };

        $scope.goPre = function(currentPage) {
            if(currentPage >= 1) {
                var start = pageSize * (currentPage - 1);
                getMovie(start);
                $scope.currentPage--;
            }
        };
	}]);
})(angular);
