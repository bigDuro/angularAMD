
define(['angularAMD', 'angular-route', 'MainCtrl', 'customDirective', 'dataService'], function (angularAMD) {
  var app = angular.module('app', ['ngRoute']);
  
  app.config(function ($routeProvider) {
    $routeProvider
    .when("/", angularAMD.route({
        templateUrl: 'app/view/view.html', controller: 'ViewCtrl', controllerUrl: '../js/ctrl/ViewCtrl'
    }))
    .otherwise({redirectTo: "/"});
  });
  
  return angularAMD.bootstrap(app);
});