angular.module('myApp', ['lk-google-picker'])

.controller('ExampleCtrl', ['$scope', function ($scope) {
   $scope.files = [];

   $scope.onLoaded = function () {
     console.log('Google Picker loaded!');
   }

   $scope.onPicked = function (docs) {
     angular.forEach(docs, function (file, index) {
       $scope.files.push(file);
     });
   }

   $scope.onCancel = function () {
     console.log('Google picker close/cancel!');
   }
}]);