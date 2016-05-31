

app.controller("emailctrl", function ($scope,emailverfy) {
 
 $scope.email=""
  $scope.verify = function () {
       
        emailverfy.emailstatus($scope.email).then(function (d) {
		alert(d);
           
        })
    }
});

app.factory("emailverfy", function ($http, $q) {
    var fac = {};
    fac.emailstatus = function (email) {
        var defered = $q.defer();
        $http({
            url: 'https://app.emaillistverify.com/api/verifEmail?secret=rEGTkYBCV9ca5LsoqO82l&email='+email,
            method: 'GET',
            
        }).success(function (d) {
            defered.resolve(d);
        }).error(function (e) {
            alert('Error!');
            defered.reject(e);
        })
        return defered.promise;
    }
    return fac;
});




/*
app.controller('emailctrl',  emailservice) 
{
	$scope.email="mohan@betabulls.com"
	$scope.verfy=function(email)
	{
		emailservice.emailverify(email);
	}
 
});
app.service('emailservice', function ($http) {
  
emailverify=function(data){
	
	 $http.get('https://app.emaillistverify.com/api/verifEmail?secret=rEGTkYBCV9ca5LsoqO82l&email='+email).then(function (response) {
  alert(response.data);
      $scope.response = response.data;
  });
};


});			
*/
			
			