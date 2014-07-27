angular.module('starter.controllers', [])

.controller('LoadingCtrl', function($scope, $location, $timeout) {

    var delay = function() {
        $location.path("/tab/login");
    }
    $timeout(delay, 5000);
})

.controller('DashCtrl', function($scope, $location, User) {
    $scope.postJob = function() {
        $location.path("/tab/create");
    }

    $scope.seekJob = function() {
        $location.path("/tab/search");
    }

    $scope.myJobs= function() {
        $location.path("/tab/jobs");
    }

    $scope.logout= function() {
        User.logoutUser();
    }
})

.controller('AccountCtrl', function($scope, $location, User) {
    var me = User.getUser();

    console.log(me);
    var editUser = { "AccountName": me['user']['AccountName'],
                "Password": me['user']['Password'],
                "FirstName": me['user']['FirstName'],
                "Surname": me['user']['Surname'],
                "PhoneNo": me['user']['PhoneNo'],
                "Email": me['user']['Email'],
                "PayPalAccount": me['user']['PayPalAccount']
    };

    $scope.editUser = editUser;

    $scope.updateUser = function() {
        console.log("controller update user clicked");
        User.update($scope.user);
    }

    $scope.back= function() {
        window.history.back();
    }

    $scope.logout= function() {
        User.logoutUser();
    }
})

.controller('LoginCtrl', function($scope, User, $location) {
    var loginData = {AccountName: "will", Password:"will"};
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

.controller('JobsCtrl', function($scope, $location, Job, User) {
    $scope.jobs = Job.searchStatus('Listed');

    $scope.back= function() {
        window.history.back();
    }

    $scope.logout= function() {
        User.logoutUser();
    }
})

.controller('SearchCtrl', function($scope, $location, Job, User) {
    $scope.jobs = Job.searchStatus('Listed');
    
    $scope.search = function() {
        $location.path("/tab/results");
    }

    $scope.selectJob = function (index) {
        var job = Job.get(index)
        Job.setSelectedJob(job);

        $location.path("/tab/pay");
    }

    $scope.back= function() {
        window.history.back();
    }

    $scope.logout= function() {
        User.logoutUser();
    }
})

.controller('ResultsCtrl', function($scope, $location, Job, User) {
    $scope.jobs = Job.searchStatus('Listed');

    $scope.back= function() {
        window.history.back();
    }

    $scope.logout= function() {
        User.logoutUser();
    }
})

.controller('DetailsCtrl', function($scope, $location, Job, User) {
    $scope.back= function() {
        window.history.back();
    }

    $scope.logout= function() {
        User.logoutUser();
    }
})

.controller('CreateCtrl', function($scope, $location, User, Job) {

    var me = User.getUser();

    console.log(me);
    var newJob = { "JobName": "Walking the dog",
                    "Description":"I need help walking my dog",
                    "Location": "Sydney City",
                    "CharityAmount": "70",
                    "AssignedToAmount": "30",
                    "Owner": me['user']['id']
    };

    $scope.newJob = newJob;

    $scope.create = function() {
        console.log("controller register clicked");
        Job.add(newJob);
        $location.path("/tab/dash");
    }

    $scope.back= function() {
        window.history.back();
    }

    $scope.logout= function() {
        User.logoutUser();
    }
})

.controller('RegisterCtrl', function($scope, User, $location) {
    var newUser = { "AccountName": "bobbyuser",
                    "Password":"bobby",
                    "Confirm": "bobby",
                    "FirstName": "Bobby",
                    "Surname": "McGee",
                    "PhoneNo": "0422333444",
                    "Email": "bobby@example.com",
                    "PayPalAccount": "bobby@example.com",
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

    $scope.back= function() {
        window.history.back();
    }

    $scope.logout= function() {
        User.logoutUser();
    }
})

.controller('CharityCtrl', function($scope, $location, Charity, User) {
    $scope.charities = Charity.listCharities();

    $scope.back= function() {
        window.history.back();
    }

    $scope.logout= function() {
        User.logoutUser();
    }
})

.controller('PayCtrl', function($scope, Payment, User, Job) {
        var paymentKey = "";
        $scope.isDisabled = true;
        var paymentData = {
            receivers: {
                "receiver":[{
                    "amount":"30.00",
                    "email":"wxbh@hack.com"},
                    {"amount":"10.00",
                        "email":"charity@hack.com"}
                ]
            },
            returnUrl: window.location.href,
            cancelUrl: window.location.href
        }

        var preparePaymentCallback = function(err, data) {
            if(!err && data && data.payKey) {
                //enable the pay button
                paymentKey = data.payKey;
                $scope.isDisabled = false;
            } else {
                //show error message
            }
        }

        Payment.preparePayment(paymentData, preparePaymentCallback);




        $scope.makePayment = function() {
            window.location = "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_ap-payment&paykey="+paymentKey;

//            var payLocation = "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_ap-payment&paykey="+paymentKey;
//            document.querySelector('#paypal').innerHTML ="<iframe src='" + payLocation + "'></iframe>";

        }

        $scope.logout= function() {
            User.logoutUser();
        }

        $scope.job = Job.getSelectedJob();


})
;










