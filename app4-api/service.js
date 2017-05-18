angular.module('app').service('mainSvc', function($http){



    this.test="Get some, boi!"


    this.getData=function(){
        return $http.get('http://swapi.co/api/people/1')
    }






})