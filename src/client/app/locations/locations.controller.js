(function() {
    'use strict';

    angular
        .module('app.locations')
        .controller('Locations', Locations);

    Locations.$inject = ['$state', 'logger', 'locationsService'];
    function Locations($state, logger, locationsService) {
        var vm = this;
        vm.title = 'Locations';
        locationsService.getAllLocations().then(getAllLocationsComplete, onError);

        function getAllLocationsComplete(result) {
            vm.locations = result.Data;
        }

        function onError(result) {
            $state.go('error', {message: result.data.Message});
        }
    }
})();
