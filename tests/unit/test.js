'use strict';

describe('angularBoxesCtrl', function() {
  var angularBoxesCtrl;
  
  beforeEach(function() {
    module('angularBoxes');
    
    inject(function($controller){
      angularBoxesCtrl = $controller('angularBoxesCtrl');
    });
  });

  it ('should have an undefined initial mainBoxColor', function() {
    expect(angularBoxesCtrl.mainBoxColor).toBeUndefined();
  });

  it ('should have an addColor method', function() {
    expect(angularBoxesCtrl.addColor).toBeDefined();
  });
});
