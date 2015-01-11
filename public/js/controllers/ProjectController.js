angular.module('ProjectController', []).controller('ProjectController', function($scope, Project) {

    $scope.tagline = 'Nothing beats a pocket protector!';

    Project.get()
    .success(function(data, status, headers, config) {
		// this callback will be called asynchronously
		// when the response is available
		console.log('success');
		console.log(data);
		console.log(status);
		console.log(headers);
		console.log(config);
		$scope.projects = data;
	}).
	error(function(data, status, headers, config) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
		console.log('poot');
		console.log(data);
		console.log(status);
		console.log(headers);
		console.log(config);
	});

});