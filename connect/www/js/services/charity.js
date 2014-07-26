angular.module('starter.services.charity', [])

    .factory('Charity', function($http) {

        // Some fake testing data
        var charities = [
            { id: 0, Name: 'Charity A', Description: 'A', PayPalAccount: 'Dontate@A'},
            { id: 1, Name: 'Charity B', Description: 'B', PayPalAccount: 'Dontate@B'},
            { id: 2, Name: 'Charity C', Description: 'C', PayPalAccount: 'Dontate@C'},
            { id: 3, Name: 'Charity D', Description: 'D', PayPalAccount: 'Dontate@D'}
        ];

        return {
            listCharities: function() {
                $http.get("http://192.168.96.68:8080/api/charities/fetch").
                    success(function(data, status) {
                        console.log(data);
                    }).
                    error(function(data, status) {
                        console.log('error occurred')
                    });

                return charities;
            },
            get: function(charityId) {
                // Simple index lookup
                console.log('getting charity id:' + charityId);
                console.log('getting charity:' + JSON.stringify(charities[charityId]));
                return charities[charityId];
            }
        }
    });
