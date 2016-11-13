'use strict';

/**
 * @ngdoc overview
 * @name zuoyeApp
 * @description
 * # zuoyeApp
 *
 * Main module of the application.
 */
angular.module('zuoyeApp', ["ui.router"])
  .config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('main',{
		url:'/main',
		templateUrl:'views/main.html',
		controller:"MainCtrl"
		})
		.state('new',{
		url:'/new',
		templateUrl:'views/new.html',
		controller:"new"
			});
})
