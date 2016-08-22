(function() {
    'use strict';

    angular
        .module('app.error')
        .controller('Error', Error);

    Error.$inject = ['$stateParams'];

    function Error($stateParams) {
        var vm = this;
        vm.title = 'Error';
        vm.error = $stateParams.message;
    }
})();
