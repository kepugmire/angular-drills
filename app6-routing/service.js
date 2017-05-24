angular.module('app').service('mainSvc', function($http){


    this.test='service'

    this.getSmurfs=function(){
        return $http.get('http://swapi.co/api/people')
    }



})