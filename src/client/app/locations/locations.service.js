(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('locationsService', locationsService);

    locationsService.$inject = ['$http', '$state', 'logger', 'config'];
    function locationsService($http, $state, logger, config) {
        return {
            getAllLocations: getAllLocations
        };
        function getAllLocations() {
            return $http.get(config.apiUrl + '/api/location')
                .then(getAllLocationsComplete)
                .catch(function(result) {
                    var errorMessage = '/api/locations get failed.  The error was \'' + result.statusText + '\'';
                    logger.error(errorMessage);
                    $state.go('error', {message: errorMessage});
                });

            function getAllLocationsComplete(result) {
                return result.data;
            }
        }
    }
})();
