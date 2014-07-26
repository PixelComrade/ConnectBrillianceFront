

angular.module('starter.services.pay', [])

    .factory('Payment', function($http) {


        return {
            preparePayment: function(paymentData, cb) {
                console.log(paymentData);
                $http.post  ("http://192.168.96.72:8080/api/payment/prepareForPayment", paymentData
                ).success(function(data, status) {
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
