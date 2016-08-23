(function() {
    'use strict';

    angular
        .module('app.vehicles')
        .controller('Vehicles', Vehicles);

    Vehicles.$inject = ['$state', 'logger', 'vehicleService'];
    function Vehicles($state, logger, vehicleService) {
        var vm = this;
        vm.title = 'Vehicles';
        vehicleService.getAllVehicles().then(getAllVehiclesComplete, onError);

        function getAllVehiclesComplete(result) {
            vm.vehicles = result.data.Data;
        }

        function onError(result) {
            $state.go('error', {message: result.data.Message});
        }
    }
})();
