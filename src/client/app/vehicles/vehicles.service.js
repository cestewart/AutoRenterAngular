(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('vehicleService', vehicleService);

    vehicleService.$inject = ['$http', '$state', 'logger', 'config'];
    function vehicleService($http, $state, logger, config) {
        return {
            getAllVehicles: getAllVehicles
        };
        function getAllVehicles() {
            return $http.get(config.apiUrl + '/api/location')
                .then(getAllVehiclesComplete)
                .catch(function(result) {
                    var errorMessage = '/api/vehicles get failed.  The error was \'' + result.statusText + '\'';
                    logger.error(errorMessage);
                    $state.go('error', {message: errorMessage});
                });

            function getAllVehiclesComplete(data) {
                console.log(data);
            }
        }
    }
})();
