var gridHeight = 16;
var gridWidth = 16;
var grid = [];

function createGrid() {
  for (var i = 1; i <= gridHeight; i++) {
    for (var j = 1; j <= gridWidth; j++) {
      $("<div class='square'></div>").appendTo('#container');
    };
  };
};

createGrid()
