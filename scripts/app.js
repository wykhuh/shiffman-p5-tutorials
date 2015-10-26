var App = function(p5js) {
  var iframe;

  p5js.setup = function () {
    p5js.noCanvas();

    createMenu();
    highlightMenu(p5js.select('li'))

    initialize(Demos.examples[0]);

    var items = p5js.selectAll('li');
    for (var i = 0; i < items.length; i++) {
      items[i].mouseClicked(updateExample);
    }
  }

  function initialize(initialExample){
    iframe = createIframe(initialExample);

    setExampleText(initialExample);
  }

  function createMenu() {
    Demos.examples.forEach(function (example) {
      p5js.createElement("li", example.name)
        .parent("links");
    });
  }

  function createIframe(initialExample) {
    return p5js.select('#demo-frame')
      .attribute('width', '600px')
      .attribute('height', '400px')
      .attribute('src',  Demos.createUrl(initialExample.name));
  }

  function setExampleText(example) {
    p5js.select('#description')
      .html(example.description);

    p5js.select('#instructions')
      .html(example.instructions);
  }

  function updateExample() {
    highlightMenu(this);
    iframe.attribute('src', Demos.createUrl(this.elt.innerHTML));
    setExampleText(findExample(this.elt.innerHTML));
  }

  function highlightMenu(menuItem){
    var current = document.querySelector('li.current')
    if(current){
      current.removeAttribute('class');
    }
    menuItem.attribute('class', 'current');
  }

  function findExample(text) {
    return Demos.examples.filter(function(example) {
      return example.name == text;
    })[0];
  };
};

new p5(App);
