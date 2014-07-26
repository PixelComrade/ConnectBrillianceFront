angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $location) {

    $scope.postJob = function() {

        $location.path("/tab/create");
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

.controller('SearchCtrl', function($scope, Job) {
    
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

        var paymentDetails = {
            actionType:"PAY",//  	#The action taken in the Pay request (that is, the PAY action)
            "clientDetails.applicationId":"APP-80W284485P519543T",// #Standard Sandbox App ID
            "clientDetails.ipAddress":"127.0.0.1",//     #Address from which request is sent
            "senderEmail":"sender_email",
            "currencyCode":"AUD",//		#The currency, e.g. US dollars
            "receiverList.receiver(0).amount":"3.00",//     #The payment amount for the first receiver
            "receiverList.receiver(0).email":"first_receiver_email",
            "receiverList.receiver(1).amount":"4.00",//	#The payment amount for the second receiver
            "receiverList.receiver(1).email":"second_receiver_email",
            "requestEnvelope.errorLanguage":"en_US",
            "returnUrl":"http://www.yourdomain.com/success.html",//	#For use if the consumer proceeds with payment
            "cancelUrl":"http://www.yourdomain.com/cancel.html" //	#For use if the consumer decides not to proceed with payment
        };

        var preparePaymentCallback = function(err, data) {

        };


        var preparePayment = function() {
            Payment.preparePayment(paymentDetails, preparePaymentCallback);
        };

        preparePayment();


})
;










