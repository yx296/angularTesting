angular.module('angularBoxes')
.directive('box', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/template.html',
    replace: true,
    scope: {
      addColor: "&"
    },
    bindToController: true,
    controller: function($scope, $element, $attrs) {
      this.color = $attrs.color;
      $element.addClass(this.color)
    },
    controllerAs: 'box'
  }
})