var blog = angular.module('blog', []);

blog.controller('acciones', function($scope, $http){
	$scope.login = function(){
		$http.post('/auth/login', { username: $scope.username, password: $scope.password }).success(function(){
			console.log(200);
		});
	};

	$scope.crearPost = function(){
		io.socket.post('/post', { titulo: $scope.titulo, autor: $scope.autor, contenido: $scope.contenido }, function(data){
			console.log(data);
		});
	}
});

blog.controller('listado', function($scope, $http){
	$http.get('/post').success(function(data){
		$scope.posts = data;
		console.log($scope.posts);
	});
});
