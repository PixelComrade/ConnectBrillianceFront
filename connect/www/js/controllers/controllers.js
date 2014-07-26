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


        $scope.updateUser = function() {
            console.log("controller update user clicked");
            User.update($scope.user);
        }
})


.controller('LoginCtrl', function($scope, User, $location) {
    $scope.login = {AccountName: "", Password:""};

    $scope.login = function () {
        User.login($scope.login, loginCallback);
    }

    var loginCallback = function(error, data) {
        if(!error) {
            $location.path("/tab/dash");
            $scope.user = data;
        } else {
            console.log('controller: login failed');
        }

    }

    $scope.register = function() {
        console.log("moving to register page");
        $location.path("/tab/register");
    }


})

.controller('JobsCtrl', function($scope, Job) {
//    $scope.jobs = Job.searchNearBy();

    $scope.jobs = [Job.get(1)];
})

.controller('CreateCtrl', function($scope, Job) {
    var newJob = { "JobName": "",
                    "Description":"",
                    "Location": "",
                    "CharityAmount": "",
                    "AssignedToAmount": ""
    };

    $scope.newJob = newJob;

    $scope.createJob = function() {
        console.log("controller register clicked");
        Job.add(newJob);
    }
})

.controller('RegisterCtrl', function($scope, User, $location) {


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
        console.log("controller register clicked");
        User.add(newUser, addUserCallback);
    }

    var addUserCallback = function(error, data) {
        if (!error) {
            if (data && data.AccountName == newUser.AccountName) {
                console.log('controller registered, logging in');
                $location.path("/tab/dash");
            }
        } else {
            console.log('controller add user failed');
        }

    }
})

;

