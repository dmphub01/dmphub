
   var app= angular
        .module('app', ['ngRoute', 'ngCookies', 'dropbox-picker'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
		
		
            .when('/', {
                controller: 'HomemainControl',
                templateUrl: 'views/homemain.view.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'views/login.view.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'views/register.view.html',
                controllerAs: 'vm'
            })
			
			
			.when('/contact', {
                controller: 'ContactController',
                templateUrl: 'views/contact.view.html',
                controllerAs: 'vm'
            })
			
			.when('/paymentpr', {
                controller: 'PaymentprController',
                templateUrl: 'views/paymentpr.view.html',
                controllerAs: 'vm'
            })
			
			.when('/paymentprr', {
                controller: 'PaymentprrController',
                templateUrl: 'views/payment249.view.html',
                controllerAs: 'vm'
            })
			
			.when('/paymentprrr', {
                controller: 'PaymentprrController',
                templateUrl: 'views/payment999.view.html',
                controllerAs: 'vm'
            })
			
			.when('/profile', {
                controller: 'UserprofileController',
                templateUrl: 'views/profile.view.html',
                controllerAs: 'vm'
            })
			
			
			.when('/uploadfile', {
                controller: 'UploadfileController',
                templateUrl: 'views/uploadfile.view.html',
                controllerAs: 'vm'
            })
			
			.when('/uploadphone', {
                controller: 'UploadfileemailController',
                templateUrl: 'views/phone.view.html',
                controllerAs: 'vm'
            })
			
			.when('/uploademail', {
                controller: 'UploademailController',
                templateUrl: 'views/email.view.html',
                controllerAs: 'vm'
            })
			
			.when('/uploadfilephone', {
                controller: '',
                templateUrl: 'views/uploadfilephone.view.html',
                controllerAs: 'vm'
            })
			
			
			.when('/forgotpassword', {
                controller: 'ForgotController',
                templateUrl: 'views/forgotpassword.view.html',
                controllerAs: 'vm'
            })

			.when('/postalupload', {
                controller: 'UploadfilepostalController',
                templateUrl: 'views/postal.view.html',
                controllerAs: 'vm'
            })
			
			.when('/postalfile', {
                controller: 'PostalfileuploadController',
                templateUrl: 'views/uploadfilepostal.view.html',
                controllerAs: 'vm'
            })
			
			.when('/paidregister', {
                controller: 'RegisterpaidController',
                templateUrl: 'views/register_paid.view.html',
                controllerAs: 'vm'
            })
			
            .otherwise({ redirectTo: '/' });
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

		/*
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
			
            if (restrictedPage && !loggedIn) {
                $location.path('/');
            }
        });
		*/
		
		
		
		
		
    }
	
	
	app.config(['DropBoxSettingsProvider', function(DropBoxSettingsProvider) {

      // Configure the options
        DropBoxSettingsProvider.configure({
            linkType: 'preview',//dropbox link type
            multiselect: false,//dropbox multiselect
            extensions: ['.xls', '.xlsx']//dropbox file extensions
          });
    }])

    .controller('DropBoxCtrl', ['$scope', 'DropBoxSettings', function($scope, DropBoxSettings) {
        $scope.dpfiles = [];
        $scope.remove = function(idx){
            $scope.dpfiles.splice(idx,1);
            }

    }]);
	
	
