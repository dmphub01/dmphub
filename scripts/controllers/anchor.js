app.controller('MainCtrl', function($scope, $location, $anchorScroll, $routeParams) {
  $scope.scrollTo = function(id) {
     $location.hash(id);
     $anchorScroll();
  }
});