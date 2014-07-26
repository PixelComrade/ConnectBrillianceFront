angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $location) {

    $scope.postJob = function() {

        $location.path("/tab/create");
    }

    $scope.seekJob = function() {

        $location.path("/tab/search");
    }

    $scope.myJobs= function() {

        $location.path("/tab/jobs");
    }
})

.controller('AccountCtrl', function($scope) {


        $scope.updateUser = function() {
            console.log("controller update user clicked");
            User.update($scope.user);
        }
})

.controller('LoginCtrl', function($scope, User, $location) {
    var loginData = {AccountName: "", Password:""};
    $scope.loginData = loginData;

    $scope.login = function () {
        User.login(loginData, loginCallback);
    }

    var loginCallback = function(error, data) {
        if(!error) {
            $location.path("/tab/dash");
            User.setUser(data); 
            console.log(User.getUser());
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

.controller('SearchCtrl', function($scope, $location, Job) {
    $scope.search = function() {

        $location.path("/tab/results");
    }
})

.controller('ResutlsCtrl', function($scope, Job) {
    
})

.controller('DetailsCtrl', function($scope, Job) {
    
})

.controller('CreateCtrl', function($scope, User, Job) {
    
    var me = User.getUser();

    console.log(me);
    var newJob = { "JobName": "",
                    "Description":"",
                    "Location": "",
                    "CharityAmount": "",
                    "AssignedToAmount": "",
                    "Owner": me['user']['id']
    };

    $scope.newJob = newJob;

    $scope.create = function() {
        console.log("controller register clicked");
        Job.add(newJob);
    }
})

.controller('RegisterCtrl', function($scope, User, $location) {


    var newUser = { "AccountName": "will",
                    "Password":"will",
                    "FirstName": "will",
                    "Surname": "will",
                    "PhoneNo": "0412123123",
                    "Email": "what@mail.com",
                    "PayPalAccount": "what@mail.com",
                    "SellerPoints": "",
                    "BuyerPoints": ""
    };

    $scope.newUser = newUser;

    $scope.register = function() {
        console.log("controller register clicked");
        User.add(newUser, addUserCallback);
    }

    var addUserCallback = function(error, data) {
        if(!error) {
            console.log('controller registered, logging in');
            User.setUser(data); 
            console.log(User.getUser());
            $location.path("/tab/dash");
        } else {
            console.log('controller add user failed');
        }

    }
})

.controller('PayCtrl', function($scope, Payment) {
        //var braintree = Braintree.create('MIIBCgKCAQEA9dOspyVpt8zCmpHgxnKjQQ8ShHllHMhw1iQuceVCLpClqIew8rhtsBCHNowEkJPyRIZIPhui/hW5uDdHPeImgxRYAPvd9MqS5TUkLDetSkytTMhQrYajihFBABHAT4JTUBIgSK0j7dRJnAnQLvE+tXkL4AcyaD6aSzA3GGkrSCSFjYlpsOSxJL7FRPnGv6LniO4bT+1kfcbQ7zEGmN7b3PoqIkzADQzP91fbgSQxBPwY/b3rLPK0I7E9zHge/wN1zgO1fBoRfTbN0mINap34v13l78Z+rWZ5lWLehRDVbLEn8U9NQeO0u7cfVzpvIEeij1Mn+oNahWPclX8EWcK5lwIDAQAB');


        console.log(braintree)

        var preparePayment = function() {
            braintree.setup("eyJ2ZXJzaW9uIjoxLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJlMDZmYjgxZmU4Y2U5NDJmYThlZWY0OTQzNWE3Y2JkY2ZiNTk0MDRlM2UzNTQ1OTQ1NDlkOWNmODEwZWQxOTA0fGNyZWF0ZWRfYXQ9MjAxNC0wNy0yNlQxMjoxODo1OS44NjA5MDcyNzIrMDAwMFx1MDAyNm1lcmNoYW50X2lkPWRjcHNweTJicndkanIzcW5cdTAwMjZwdWJsaWNfa2V5PTl3d3J6cWszdnIzdDRuYzgiLCJjaGFsbGVuZ2VzIjpbImN2diJdLCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvZGNwc3B5MmJyd2RqcjNxbi9jbGllbnRfYXBpIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhdXRoVXJsIjoiaHR0cHM6Ly9hdXRoLnZlbm1vLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJwYXltZW50QXBwU2NoZW1lcyI6W10sInRocmVlRFNlY3VyZUVuYWJsZWQiOmZhbHNlLCJwYXlwYWxFbmFibGVkIjp0cnVlLCJwYXlwYWwiOnsiZGlzcGxheU5hbWUiOiJBY21lIFdpZGdldHMsIEx0ZC4gKFNhbmRib3gpIiwiY2xpZW50SWQiOm51bGwsInByaXZhY3lVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vcHAiLCJ1c2VyQWdyZWVtZW50VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3RvcyIsImJhc2VVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFzc2V0c1VybCI6Imh0dHBzOi8vY2hlY2tvdXQucGF5cGFsLmNvbSIsImRpcmVjdEJhc2VVcmwiOm51bGwsImFsbG93SHR0cCI6dHJ1ZSwiZW52aXJvbm1lbnROb05ldHdvcmsiOnRydWUsImVudmlyb25tZW50Ijoib2ZmbGluZSJ9fQ==", "paypal", {
                container: "paypal-container",  // to specify DOM elements, use an ID, a DOM node, or a jQuery element
                paymentMethodNonceInputField: "payment-method-nonce"
            });
        };

        preparePayment();
})
;

