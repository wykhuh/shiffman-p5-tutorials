var Demos = (function () {
  var examples;
  var baseUrl = window.location.href;

  examples = [
    {
      name: "1.1-basics",
      description: "Rectangle",
      instructions: "",
      title: "1.1: Introduction",
      youtube_link: "https://www.youtube.com/watch?v=8j0UDiN7my4",
    },
    {
      name: "1.2-color",
      description: "Colored shapes",
      instructions: "",
      title: "1.4: Color",
      youtube_link: "https://www.youtube.com/watch?v=9mucjcrhFcM",
    },
    {
      name: "2.1-variables",
      description: "Basic drawing app",
      instructions: "move mouse to draw. click mouse to clear canvas.",
      title: "2.1: Variables in p5.js (mouseX, mouseY)",
      youtube_link: "https://www.youtube.com/watch?v=RnS0YNuLfQQ",
    },
    {
      name: "2.2-variables",
      description: "Moving ball",
      instructions: "",
      title: "2.2: Variables in p5.js (Make your own)",
      youtube_link: "https://www.youtube.com/watch?v=Bn_B3T_Vbxs",
    },
    {
      name: "2.3-objects",
      description: "Moving ball",
      instructions: "",
      title: "2.3: JavaScript Objects",
      youtube_link: "https://www.youtube.com/watch?v=-e5h4IGKZRY",
    },
    {
      name: "2.4-map",
      description: "Background changing color",
      instructions: "move mouse horizontally",
      title: "2.5: The map() Function",
      youtube_link: "https://www.youtube.com/watch?v=nicMAoW6u1g",
    },
    {
      name: "2.5-random",
      description: "Circles appear in random spots",
      instructions: "",
      title: "2.5: The random() Function",
      youtube_link: "https://www.youtube.com/watch?v=nfmV2kuQKwA",
    },
    {
      name: "3.1-conditionals",
      description: "Ball changes color",
      instructions: "move mouse to right half of canvas",
      title: "3.1: Introduction to Conditional Statements",
      youtube_link: "https://www.youtube.com/watch?v=1Osb_iGDdjk",
    },
    {
      name: "3.2-bouncing-ball",
      description: "Ball bounces between left and right edges",
      instructions: "",
      title: "3.2: The Bouncing Ball",
      youtube_link: "https://www.youtube.com/watch?v=LO3Awjn_gyU",
    },
    {
      name: "3.3-else",
      description: "Show different shapes based on mouse position",
      instructions: "move mouse horizontally",
      title: "3.3: Else and Else if, AND and OR",
      youtube_link: "https://www.youtube.com/watch?v=r2S7j54I68c",
    },
    {
      name: "3.4-boolean",
      description: "Square and background changes color",
      instructions:
        "move mouse inside square to change square color; click inside square and hold down click to change background",
      title: "3.4: Boolean Variables (1)",
      youtube_link: "https://www.youtube.com/watch?v=Rk-_syQluvc",
    },
    {
      name: "3.4-boolean-button",
      description: "Square and background changes color",
      instructions:
        "move mouse inside square to change square color; click inside square to toggle background",
      title: "3.4: Boolean Variables (2)",
      youtube_link: "https://www.youtube.com/watch?v=Rk-_syQluvc",
    },
    {
      name: "4.1-while-for",
      description: "Two rows of circles",
      instructions: "",
      title: "4.1: while and for Loops",
      youtube_link: "https://www.youtube.com/watch?v=cnRD9o6odjk",
    },
    {
      name: "4.2-nested-loops",
      description: "Moving row of circles",
      instructions: "",
      title: "4.2: Nested Loops (1)",
      youtube_link: "https://www.youtube.com/watch?v=1c1_TMdf8b8",
    },
    {
      name: "4-2-nested-for-loops",
      description: "Grid of colored circles",
      instructions: "move mouse horizontally",
      title: "4.2: Nested Loops (2)",
      youtube_link: "https://www.youtube.com/watch?v=1c1_TMdf8b8",
    },
    {
      name: "5.1-functions",
      description: "Ball bouncing off 4 edges",
      instructions: "",
      title: "5.1: Function Basics",
      youtube_link: "https://www.youtube.com/watch?v=wRHAitGzBrg",
    },
    {
      name: "5.2-function-parameters",
      description: "Two lollipops",
      instructions: "",
      title: "5.2: Function Parameters and Arguments",
      youtube_link: "https://www.youtube.com/watch?v=zkc417YapfE",
    },
    {
      name: "5.3-function-return",
      description: "Console log results of function",
      instructions: "look at console",
      title: "5.3: Functions and Return",
      youtube_link: "https://www.youtube.com/watch?v=qRnUBiTJ66Y",
    },
    {
      name: "5.4-functions-inside-objects",
      description: "Moving circle",
      instructions: "",
      title: "5.4: Functions Inside of Objects",
      youtube_link: "https://www.youtube.com/watch?v=QoFWCPVpWUE",
    },
    {
      name: "6.1-array",
      description: "Show ellipse and text",
      instructions: "click canvas to change text",
      title: "7.1: What is an array?",
      youtube_link: "https://www.youtube.com/watch?v=VIQoUghHSxU",
    },
    {
      name: "6.2-arrays-loops",
      description: "Show 4 circles",
      instructions: "",
      title: "7.2: Arrays and Loops",
      youtube_link: "https://www.youtube.com/watch?v=RXWO3mFuW-I",
    },
    {
      name: "6.3-arrays-of-objects",
      description: "Show randomly placed circles",
      instructions: "",
      title: "7.3: Arrays of Objects",
      youtube_link: "https://www.youtube.com/watch?v=pGkSHeEZLMU",
    },
    {
      name: "6.4-constructor-function",
      description: "Show randomly placed circles",
      instructions: "",
      title: "7.4: The Constructor Function in JavaScript",
      youtube_link: "https://www.youtube.com/watch?v=F3GeM_KrGjI",
    },
    {
      name: "6.5-editing-objects",
      description: "Draw some circles",
      instructions: "click and drag mouse",
      title: "7.4: Adding and Removing Objects",
      youtube_link: "https://www.youtube.com/watch?v=EyG_2AdHlzY",
    },
    {
      name: "6.6-multiple-files",
      description: "Show randomly placed circles",
      instructions: "",
      title: "7.5: Multiple js Files",
      youtube_link: "https://www.youtube.com/watch?v=Yk18ZKvXBj4",
    },
    {
      name: "6.7-clicking-on-objects",
      description: "Change color of randomly placed circles",
      instructions: "click on circles to change color",
      title: "7.6: Clicking on Objects",
      youtube_link: "https://www.youtube.com/watch?v=DEHsr4XicN8",
    },
    {
      name: "6.9-object-intersection",
      description: "When circles touch, they change color",
      instructions: "",
      title: "7.6: Checking Objects Intersection Part I",
      youtube_link: "https://www.youtube.com/watch?v=uAfw-ko3kB8",
    },
    {
      name: "6.10-object-intersection-array",
      description: "When circles touch, they change color",
      instructions: "",
      title: "7.7: Checking Objects Intersection Part II",
      youtube_link: "https://www.youtube.com/watch?v=GY-c2HO2liA",
    },
    {
      name: "6.8-delete-objects",
      description: "Add x numbers of circles to canvas",
      instructions: "click to draw circle",
      title: "7.7: Deleting Objects Using splice()",
      youtube_link: "https://www.youtube.com/watch?v=HXOD_XDA-KU",
    },
    {
      name: "6.11-images",
      description: "Add images to canvas",
      instructions: "click to add image to canvas",
      title: "7.8: Objects and Images",
      youtube_link: "https://www.youtube.com/watch?v=FVYGyaxG4To",
    },
    {
      name: "7.2-create-html-elements",
      description: "Create DOM element ",
      instructions: "",
      title: "8.2: Creating HTML Elements with JavaScript",
      youtube_link: "https://www.youtube.com/watch?v=lAtoaRz78I4",
    },
    {
      name: "7.3-manipulating-dom-elements",
      description: "Create DOM element",
      instructions: "click to show random number",
      title: "8.3: Manipulating DOM Elements with html() and position()",
      youtube_link: "https://www.youtube.com/watch?v=YfaJ20vXcK8",
    },
    {
      name: "7.4-handling-dom-events-with-callbacks",
      description: "Change color of canvas by clicking button",
      instructions: "click on button",
      title: "8.4: Handling DOM Events with Callbacks",
      youtube_link: "https://www.youtube.com/watch?v=NcCEzzd9BGE",
    },
    {
      name: "7.5-other-events-and-inputs",
      description: "Change size of circle, text, background color",
      instructions:
        "Click on button to change background color. Move slider to change circle size. Type text to change text.",
      title:
        "8.5: Interacting with the DOM using Sliders, Buttons and Text Inputs",
      youtube_link: "https://www.youtube.com/watch?v=587qclhguQg",
    },

    {
      name: "7.7-events-changed-and-inputs",
      description: "Change text and font size",
      instructions:
        "Hover over 'Hover' to change text. Type text and hit enter in text box to change text. Click on square to change color.",
      title: "8.6: Other Events and Inputs",
      youtube_link: "https://www.youtube.com/watch?v=HsDVz2_Qgow",
    },
    {
      name: "7.6-css",
      description: "Apply css to paragraphs",
      instructions:
        "Hover over 'some text' or click button to change 'some text'",
      title: "8.7: The Basics of CSS",
      youtube_link: "https://www.youtube.com/watch?v=zGL8q8iQSQw",
    },
    {
      name: "8.8-changed-input",
      description: "Change content using input function",
      instructions:
        "Type text in text box to change text. Move slider to change font size.",
      title: '8.8: Events "changed" and "input"',
      youtube_link: "https://www.youtube.com/watch?v=ZEy0_NLhdSE",
    },
    {
      name: "8.9-css-selectors",
      description: "Show text and background color",
      instructions: "",
      title: "8.9: CSS Selectors",
      youtube_link: "https://www.youtube.com/watch?v=sVo8Dbii8OQ",
    },
    {
      name: "7.9-select-selectAll",
      description: "Show text and change background color",
      instructions: "Click button to change background color",
      title: "8.10: select() and selectAll() with CSS Selectors",
      youtube_link: "https://www.youtube.com/watch?v=sSQPLIHIzmg",
    },
    {
      name: "7.10-callbacks-multiple-DOM-elements",
      description: "Show text and change  background color",
      instructions: "Hover over 'rainbow' to change color",
      title: "8.11: Callbacks on Multiple DOM Elements",
      youtube_link: "https://www.youtube.com/watch?v=KeZBpeH59Q4",
    },
    {
      name: "7.11-parent-child",
      description: "Make canvas a child of particular paragraph",
      instructions: "",
      title: "8.12: parent() and child() (1)",
      youtube_link: "https://www.youtube.com/watch?v=eoXLD0Aw1YI",
    },
    {
      name: "7.11-parent-child-list",
      description: "Make li a child of ol",
      instructions: "Click button to create li",
      title: "8.12: parent() and child() (2)",
      youtube_link: "https://www.youtube.com/watch?v=eoXLD0Aw1YI",
    },
    {
      name: "7.12-add-css-class",
      description: "Add css class",
      instructions: "Click on word to change the color.",
      title: "8.13: Assigning a CSS Class Dynamically",
      youtube_link: "https://www.youtube.com/watch?v=KMRgLi2TBhQ",
    },
    {
      name: "8.14-parent-child-again",
      description: "Add child to parent.",
      instructions:
        "Click on 'apple' to add image. Click button to remove images.",
      title: "8.14: parent() and child() again with Variables",
      youtube_link: "https://www.youtube.com/watch?v=4OAG_BkQcPE",
    },
    {
      name: "8.15-drag-drop",
      description: "Drag and drop.",
      instructions: "Drag image over dashed rectangle.",
      title: "8.15: Drag and Drop a File (1)",
      youtube_link: "https://www.youtube.com/watch?v=o4UmGrPst_c",
    },
    {
      name: "8.15-drag-drop-2",
      description: "Drag and drop.",
      instructions: "Drag image over grey square.",
      title: "8.15: Drag and Drop a File (2)",
      youtube_link: "https://www.youtube.com/watch?v=o4UmGrPst_c",
    },
    {
      name: "8.16-slider",
      description: "Sliders moving",
      instructions: "",
      title: "8.16: The Slider Dance",
      youtube_link: "https://www.youtube.com/watch?v=o4UmGrPst_c",
    },
  ];

  // plain js functions

  function createLink(exampleName) {
    return "<a href='#'>" + exampleName + "</a>";
  }

  function createIndexUrl(exampleName) {
    return baseUrl + exampleName + "/index.html";
  }

  function createSourceUrl(exampleName) {
    return baseUrl + exampleName + "/sketch.js";
  }

  function findExample(text) {
    return examples.filter(function (example) {
      return example.name == text;
    })[0];
  }

  return {
    createLink: createLink,
    createIndexUrl: createIndexUrl,
    createSourceUrl: createSourceUrl,
    examples: examples,
    findExample: findExample,
  };
})();
