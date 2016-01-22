describe('AngularBox App', function() {

  var mainBox = $('.mainBox');
  var greenBox = $('.green');
  var blueBox = $('.blue');
  var redBox = $('.red');
  var yellowBox = $('.yellow');
  var undoButton = $('.undoButton');
  var redoButton = $('.redoButton');

  var hasClass = function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
      return classes.split(' ').indexOf(cls) !== -1;
    });
  };

  beforeEach(function() {
    browser.get('index.html');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Angular Boxes');
  })

  describe('Four color box changers', function() {
  
    it('should change the color of the mainBox to whichever color box was clicked', function() {
      greenBox.click();
      expect(hasClass(mainBox, 'green')).toBe(true);
    })

    it('should replace the color of the mainBox instead of adding another color class', function() {
      greenBox.click();
      blueBox.click();
      expect(hasClass(mainBox, 'green')).toBe(false);
      expect(hasClass(mainBox, 'blue')).toBe(true);
    })
  })

  describe('Undo/Redo buttons', function() {

    it('should have a working undoButton', function() {
      greenBox.click();
      blueBox.click();
      undoButton.click();
      expect(hasClass(mainBox, 'green')).toBe(true);
      expect(hasClass(mainBox, 'blue')).toBe(false);
    });

    it('should have a working redoButton', function() {
      greenBox.click();
      blueBox.click();
      undoButton.click();
      redoButton.click();
      expect(hasClass(mainBox, 'green')).toBe(false);
      expect(hasClass(mainBox, 'blue')).toBe(true);
    });
  })

});
