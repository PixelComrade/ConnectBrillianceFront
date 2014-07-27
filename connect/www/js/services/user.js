

angular.module('starter.services.user', [])

    .factory('User', function($http, $location) {

        var points = {
            buyer: 0,
            seller: 0
        };

        var loggedInUser = {};

        function set(data) {
            loggedInUser = data;
        }
        function get() {
            return loggedInUser;
        }
        function logout() {
            loggedInUser = '';
            $location.path("/tab/login");
        }
        return {
            getUser: get,
            setUser: set,
            logoutUser: logout,

            getPoints: function() {
                return points;
            },

            setPoints: function(buyer, seller) {
                points['buyer'] += buyer;
                points['seller'] += seller;
            },

            get: function(userId) {
                // Simple index lookup
                return users[userId];
            },
            add: function(user, cb) {

                $http.post("http://192.168.96.68:8080/api/users/add", user).
                    success(function(data, status) {
                        console.log(data);
                        cb(null, data);
                    }).
                    error(function(data, status) {
                        console.log('error occurred:' + data);
                        cb(data, null);
                    });
            },
            update: function(user) {
                $http.post("http://192.168.96.68/back/users/edit", user).
                    success(function(data, status) {
                        console.log(data);
                    }).
                    error(function(data, status) {
                        console.log('error occurred')
                    });
            },
            login: function(loginData, cb) {

                $http.post("http://192.168.96.68:8080/api/users/login", loginData).
                    success(function(data, status) {
                        console.log(data);
                        if(data && data.error) {
                            console.log('error occurred')
                            cb("error:" + data, null);
                        } else {
                            cb(null, data);
                        }
                    }).
                    error(function(data, status) {
                        console.log('error occurred')
                        cb("error:" + data, null);
                    });
            }

        }
    });
