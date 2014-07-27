angular.module('starter.services.job', [])

    .factory('Job', function($http) {

        var currentJob = {};

        // Some fake testing data
        var jobs = [
            { id: 0, jobName: 'Wash Car', jobDescription: 'I need my car washed', location: 'Sydney', status: 'Listed' },
            { id: 1, jobName: 'Walk Dog', jobDescription: 'I need someone to walk my dog', location: 'Sydney', status: 'Completed' },
            { id: 2, jobName: 'Mow Lawn', jobDescription: 'Help wanted, front lawn needs mowing', location: 'Melbourne', status: 'Listed' },
            { id: 3, jobName: 'Baby Sit', jobDescription: 'Baby sitter wanted', location: 'Melbourne', status: 'Assigned' }
        ];

        var selectedJob = null;

        return {
            getSelectedJob: function() {
                console.log("getting selected job:" + selectedJob);
                console.log(selectedJob);
                return selectedJob;
            },
            setSelectedJob: function(job){
                console.log("setting selected job:");
                console.log(job);
                selectedJob = job;
            },
            searchStatus: function(status) {
                $http.get("http://192.168.96.68:8080/api/jobs/fetch").
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
                currentJob = jobs[jobId];
                return jobs[jobId];
            },
            add: function(job) {

                $http.post("http://192.168.96.68:8080/api/jobs/add", job).
                    success(function(data, status) {
                        console.log(data);
                    }).
                    error(function(data, status) {
                        console.log('error occurred:' + data);
                    });
            },
            update: function(job) {

            },
            viewJob: function() {
                return currentJob;
            }

        }
    });
