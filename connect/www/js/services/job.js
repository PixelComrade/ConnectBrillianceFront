angular.module('starter.services.job', [])

    .factory('Job', function($http) {

        // Some fake testing data
        var jobs = [
            { id: 0, jobDescription: 'I need my car washed' },
            { id: 1, jobDescription: 'I need someone to walk my dog' },
            { id: 2, jobDescription: 'Help wanted, front lawn needs mowing' },
            { id: 3, jobDescription: 'Baby sitter wanted' }
        ];

        return {
            searchNearBy: function() {
                $http({method: "GET", url: "http://192.168.96.68/back/jobs/fetch"}).
                    success(function(data, status) {
                        console.log(data);
                    }).
                    error(function(data, status) {
                        console.log('error occurred')
                    });

                return jobs;
            },
            get: function(jobId) {
                // Simple index lookup
                console.log('getting job id:' + jobId);
                console.log('getting job:' + JSON.stringify(jobs[jobId]));
                return jobs[jobId];
            },
            create: function(job) {

            },
            update: function(job) {

            }

        }
    });
