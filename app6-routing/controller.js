angular.module('app').controller('mainCtrl', function($scope, mainSvc){
    // $scope.test='controller'
    // $scope.test2=mainSvc.test


    $scope.recSmurfs=function(){
        mainSvc.getSmurfs().then(function(response){
            $scope.smurfs=response.data.results
            console.log($scope.smurfs)
        })
    }
    $scope.recSmurfs()



})