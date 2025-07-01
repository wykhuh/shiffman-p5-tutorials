var App = function (p5js) {
  var iframe;

  p5js.setup = function () {
    p5js.noCanvas();

    createMenu();
    highlightMenu(p5js.select("li"));

    initialize(Demos.examples[0]);

    var items = p5js.selectAll("li");
    for (var i = 0; i < items.length; i++) {
      items[i].mouseClicked(updateExample);
    }
  };

  function initialize(initialExample) {
    iframe = createIframe(initialExample);

    setExampleText(initialExample);
  }

  function createMenu() {
    Demos.examples.forEach(function (example) {
      p5js
        .createElement("li", example.title)
        .attribute("data-link", example.name)
        .parent("links");
    });
  }

  function createIframe(initialExample) {
    return p5js
      .select("#demo-frame")
      .attribute("width", "600px")
      .attribute("height", "400px")
      .attribute("src", Demos.createIndexUrl(initialExample.name));
  }

  function setExampleText(example) {
    p5js.select("#title").html(example.title);

    p5js.select("#description").html(example.description);

    if (example.instructions) {
      p5js
        .select("#instructions")
        .html("<h2>Instructions</h2><p>" + example.instructions + "</p>");
    } else {
      p5js.select("#instructions").html("");
    }

    if (example.youtube_link) {
      p5js
        .select("#youtube-link")
        .html('<a href="' + example.youtube_link + '">YouTube link</a>');
    } else {
      p5js.select("#youtube-link").html("");
    }

    p5js
      .select("#source")
      .html(
        '<a href="' + Demos.createSourceUrl(example.name) + '">Source Code</a>'
      );
  }

  function updateExample() {
    highlightMenu(this);
    iframe.attribute("src", Demos.createIndexUrl(this.elt.dataset.link));
    setExampleText(Demos.findExample(this.elt.dataset.link));
  }

  function highlightMenu(menuItem) {
    var current = document.querySelector("li.current");
    if (current) {
      current.removeAttribute("class");
    }
    menuItem.attribute("class", "current");
  }
};

new p5(App);
