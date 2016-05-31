//angular.module('TabsApp', [])
app.controller('TabsCtrl', ['$scope', function ($scope) {
    $scope.tabs = [{
            title: 'EMAIL',
            url: 'one.tpl.html',
			image:'fa fa-envelope'
        }, {
            title: 'POSTAL',
            url: 'two.tpl.html',
			image:'fa fa-location-arrow'
        }, {
            title: 'PHONE',
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