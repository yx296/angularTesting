angular.module('angularBoxes')
.directive('box', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/template.html',
    replace: true,
    scope: {
      addcolor: "&"
    },
    controller: function($scope, $element, $attrs) {
    },
    link: function(scope, element, attrs) {
      scope.boxColor = attrs.color
      element.addClass(scope.boxColor);
    }
  }
})