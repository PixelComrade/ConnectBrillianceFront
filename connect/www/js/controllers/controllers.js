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


.controller('LoginCtrl', function($scope, User) {
    $scope.login = {userId: "", password:""};
    $scope.user = null;




})

.controller('JobsCtrl', function($scope, Job) {
//    $scope.jobs = Job.searchNearBy();

    $scope.jobs = [Job.get(1)];
})

.controller('RegisterCtrl', function($scope, User) {


    var newUser = { "AccountName": "",
                    "Password":"",
                    "FirstName": "",
                    "Surname": "",
                    "PhoneNo": "",
                    "Email": "",
                    "PayPalAccount": "",
                    "SellerPoints": "",
                    "BuyerPoints": ""
    };

    $scope.newUser = newUser;

    $scope.register = function() {
        console.log("register clicked");
        User.add(newUser);
    }

})

;

