

angular.module('starter.services', [])

    .factory('User', function() {

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
            create: function(user) {

            },
            update: function(user) {


            }

        }
    });
