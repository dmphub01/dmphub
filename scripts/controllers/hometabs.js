//angular.module('TabsApp', [])
app.controller('TabsCtrl', ['$scope', function ($scope) {
    $scope.tabs = [{
            title: 'Email',
            url: 'one.tpl.html',
			image:'fa fa-envelope'
        }, {
            title: 'Postal',
            url: 'two.tpl.html',
			image:'fa fa-location-arrow'
        }, {
            title: 'Phone',
            url: 'three.tpl.html',
			image:'fa fa-phone',
			fonts:'Microsoft JhengHei'
    }];

    $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
}]);