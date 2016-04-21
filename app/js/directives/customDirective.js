define(['angularAMD'], function (angularAMD) {
	angularAMD.directive("customDirective", [function (){
			return {
				restrict : 'AE',
				scope : {},
				template : 	['<div>',
								'Custom Directive',
							'</div>'].join(''),
								
				link : function(scope, $element, attrs){
					console.log('customDirective');
				}
			};
	}]);
});