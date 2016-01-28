(function() {
  'use strict';

function angularBoxesCtrl() {
  var vm = this;
  vm.mainBoxColor;

  var colorHistory = [];
  //storeColors
  var undoRedo = [];

  var changeColor = function() {
    vm.mainBoxColor = colorHistory[colorHistory.length - 1];
  }


  vm.addColor = function(boxColor) {
    //mainBox is already same color as clicked box
    if (boxColor === vm.mainBoxColor) {
      return;
    }
    colorHistory.push(boxColor)  
    changeColor();
  }

  vm.undo = function() {
    if (!colorHistory.length) {
      return;
    }
    var undoColor = colorHistory.pop();
    undoRedo.unshift(undoColor);
    changeColor();  
  }

  vm.redo = function() {
    if (!undoRedo.length) {
      return;
    }
    var redoColor = undoRedo.shift();
    colorHistory.push(redoColor);
    changeColor();  
  }
}


angular.module('angularBoxes', [])
  .controller('angularBoxesCtrl', [
    angularBoxesCtrl
    ]);
  
})();
