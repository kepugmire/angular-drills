angular.module('app').controller('mainCtrl', function($scope, mainSvc){


    $scope.test=mainSvc.test



    $scope.getData=function(){
        $scope.employees=mainSvc.getData()
    }


    $scope.getData()


})