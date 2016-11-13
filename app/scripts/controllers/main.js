'use strict';

/**
 * @ngdoc function
 * @name zuoyeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zuoyeApp
 */
angular.module('zuoyeApp')
  .controller('MainCtrl', function ($scope,$http) {
    $http({
    	url:"http://www.somenote.cn:1602/list1",
    	method:"get",
    }).success(function(e){
    	$scope.syy=e
     })
  })
  .controller('new', function ($scope,$http) {
    $http({
    	url:"http://www.somenote.cn:1602/list2",
    	method:"get",
    }).success(function(e){
    	$scope.syy=e
     })
  })
