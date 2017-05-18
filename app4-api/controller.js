angular.module('app').controller('mainCtrl', function($scope, mainSvc){


    $scope.test=mainSvc.test



    $scope.getData=function(){
        mainSvc.getData().then(function(response){
            $scope.display=response.data
        })

    }

    $scope.getData()

})