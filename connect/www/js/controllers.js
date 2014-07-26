angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('AccountCtrl2', function($scope) {

})

.controller('LoginCtrl', function($scope) {
//    $scope.login = {userId: "", password:""};
//    $scope.user = null;




});
