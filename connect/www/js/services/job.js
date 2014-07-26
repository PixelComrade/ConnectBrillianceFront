angular.module('starter.services.job', [])

    .factory('Job', function($http) {

        // Some fake testing data
        var jobs = [
            { id: 0, jobDescription: 'I need my car washed', status: 'Listed' },
            { id: 1, jobDescription: 'I need someone to walk my dog', status: 'Completed' },
            { id: 2, jobDescription: 'Help wanted, front lawn needs mowing', status: 'Listed' },
            { id: 3, jobDescription: 'Baby sitter wanted', status: 'Assigned' }
        ];

        return {
            searchStatus: function(status) {
                $http.get("http://192.168.96.68/back/jobs/fetch").
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
            add: function(job) {

                $http.post("http://192.168.96.68/back/jobs/add", job).
                    success(function(data, status) {
                        console.log(data);
                    }).
                    error(function(data, status) {
                        console.log('error occurred:' + data);
                    });
            },
            update: function(job) {

            }

        }
    });
