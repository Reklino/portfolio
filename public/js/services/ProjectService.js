angular.module('ProjectService', []).factory('Project', ['$http', function($http) {

    return {
        // call to get all projects
        get : function() {
            return $http.get('/api/projects');
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new project
        create : function(projectData) {
            return $http.post('/api/projects', projectData);
        },

        // call to DELETE a project
        delete : function(id) {
            return $http.delete('/api/projects/' + id);
        }
    }       

}]);