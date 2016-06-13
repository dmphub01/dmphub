/*
'use strict';

/**
 * @ngdoc function
 * @name DMPHUB.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the moreYourApp
 */
 /*
angular.module('app')
  .controller('ForgotController', function ($scope) {
    $scope.awesomeThings = [
      
    ];
  });
  
  */
  
  (function () {
    'use strict';

    angular
        .module('app')
        .controller('ForgotController', ForgotController);

    ForgotController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function ForgotController(UserService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.forgot = forgot;

        function forgot() {
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
