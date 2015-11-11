var MakeUser = function () {
	
		var appSocket = new WebSocket('ws://login.messme.me:8080');		
		
		//var stringer = JSON.stringify({"mid": "6dcb6bb4-344c-4687-9d1f-87d54f78a8f0","action": "user.info","options": {"userid": 779879879877}});
		var stringer = JSON.stringify(
		{
"mid": "6dcb6bb4-344c-4687-9d1f-87d54f78a8f0",
"id": 79824935588,
"uuid": "ABCDEF0123456789",
"action": "user.info",
"options": {
"userid": 79824935588
}
}
);
		appSocket.onopen = function () {
			appSocket.send(stringer);
		};
		
		appSocket.onmessage = function(event){
			var response = JSON.parse(event.data);
			alert("Status="+response.status+" login="+response.result.login);
			console.log(response);
		};
		
		
	};

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
	//alert("!23");
	//MakeUser(); - это был тест wss
	
	$http.get('citiesrussia.json').success(function(data) {
		$scope.citys = data.result;
		console.log($scope.citys);
	});
	
	
	
})

/*
.then(function(){alert("123");})
*/

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
