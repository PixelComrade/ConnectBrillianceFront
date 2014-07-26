angular.module('starter.services', [])

    .factory('Job', function() {

        // Some fake testing data
        var jobs = [
            { id: 0, jobDescription: 'I need my car washed' },
            { id: 1, jobDescription: 'I need someone to walk my dog' },
            { id: 2, jobDescription: 'Help wanted, front lawn needs mowing' },
            { id: 3, jobDescription: 'Baby sitter wanted' }
        ];

        return {
            searchNearBy: function() {
                return jobs;
            },
            get: function(jobId) {
                // Simple index lookup
                return jobs[jobId];
            },
            create: function(job) {

            },
            update: function(job) {

            }

        }
    });
