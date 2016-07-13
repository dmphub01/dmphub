(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterpaidController', RegisterpaidController);

    RegisterpaidController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function RegisterpaidController(UserService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.suri = suri;

        function suri() {
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        $location.path('/login');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }

})();
