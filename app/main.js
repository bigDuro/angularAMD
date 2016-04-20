requirejs.config({
	paths : {
		'jquery' : '../node_modules/jquery/dist/jquery',
		'angular' : '../node_modules/angular/angular.min',		
		'angular-route' : '../node_modules/angular-route/angular-route.min',
		'angularAMD' : '../node_modules/angular-amd/angularAMD.min',
		'ngload' : '../node_modules/angular-amd/ngload.min',
		'MainCtrl' : 'ctrl/MainCtrl',
		'dataService' : 'services/dataService',
		'customDirective' : 'directives/customDirective'
	},
	shim : {
		'angularAMD': ['angular'],
		'angular-route': ['angular'], 
		'ngload': ['angularAMD']
		
	},
	deps: ['app']
});