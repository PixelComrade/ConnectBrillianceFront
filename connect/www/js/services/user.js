

angular.module('starter.services.user', [])

    .factory('User', function($http) {

        // Some fake testing data
        var users = [
            { id: 0, userName: 'Scruff McGruff' },
            { id: 1, userName: 'G.I. Joe' },
            { id: 2, userName: 'Miss Frizzle' },
            { id: 3, userName: 'Ash Ketchum' }
        ];

        return {
            all: function() {



                return users;
            },
            get: function(userId) {
                // Simple index lookup
                return users[userId];
            },
            add: function(user, cb) {

                $http.post("http://192.168.96.68/back/users/add", user).
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

                $http.post("http://192.168.96.68/back/users/login", loginData).
                    success(function(data, status) {
                        console.log(data);
                        cb(null, data);
                    }).
                    error(function(data, status) {
                        console.log('error occurred')
                        cb("error:" + data, null);
                    });
            }

        }
    });
