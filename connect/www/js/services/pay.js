

angular.module('starter.services.pay', [])

    .factory('Payment', function($http) {

        return {
            preparePayment: function(paymentData, cb) {

                $http.post("http://192.168.96.68/back/users/add", user).
                    success(function(data, status) {
                        console.log(data);
                        cb(null, data);
                    }).
                    error(function(data, status) {
                        console.log('error occurred:' + data);
                        cb(data, null);
                    });
            }

        }
    });
