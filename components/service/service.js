(function(angular) {
	'use strict';
	var app = angular.module("renren");
	app.service('service', [function() {
		this.jsonp = function(url, data, fn) {
			function getData(data) {
				fn(data);
				document.body.removeChild(script);
			}

			window['getData'] = getData;
			var searchData = '?';
			for(var i in data) {
				searchData += i + "=" +data[i] + "&";
			}

			var script = document.createElement("script");
			script.src = url + searchData + "callback=getData";
			document.body.appendChild(script);

		}
	}]);
})(angular);
