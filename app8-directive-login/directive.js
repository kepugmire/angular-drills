angular.module('app').directive('login', function(){
    return{
        template: "<input ng-model='login.username' placeholder='username'><input ng-model='login.password' placeholder='password'><button ng-click='loginAlert(login)'>LOGIN</button>",
        controller: function($scope){
            $scope.loginAlert=function(value){
                alert(value.username + ' ' + value.password);
            }
        }

    }
    
})