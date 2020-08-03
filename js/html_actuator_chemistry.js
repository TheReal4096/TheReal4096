function HTMLActuator() {
  this.tileContainer    = document.querySelector(".tile-container");
  this.scoreContainer   = document.querySelector(".score-container");
  this.bestContainer    = document.querySelector(".best-container");
  this.messageContainer = document.querySelector(".game-message");

  this.score = 0;
}

HTMLActuator.prototype.actuate = function (grid, metadata) {
  var self = this;

  window.requestAnimationFrame(function () {
    self.clearContainer(self.tileContainer);

    grid.cells.forEach(function (column) {
      column.forEach(function (cell) {
        if (cell) {
          self.addTile(cell);
        }
      });
    });

    self.updateScore(metadata.score);
    self.updateBestScore(metadata.bestScore);

    if (metadata.terminated) {
      if (metadata.over) {
        self.message(false); // You lose
      } else if (metadata.won) {
        self.message(true); // You win!
      }
    }

  });
};

// Continues the game (both restart and keep playing)
HTMLActuator.prototype.continueGame = function () {
  this.clearMessage();
};

HTMLActuator.prototype.clearContainer = function (container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

HTMLActuator.prototype.addTile = function (tile) {
  var self = this;

  var wrapper   = document.createElement("div");
  var inner     = document.createElement("div");
  var position  = tile.previousPosition || { x: tile.x, y: tile.y };
  var positionClass = this.positionClass(position);

  // We can't use classlist because it somehow glitches when replacing classes
  var classes = ["tile", "tile-" + tile.value, positionClass];
  if (tile.value > 590295810358705651712)
    classes = ["tile", "tile-" + 590295810358705700000, positionClass];

  this.applyClasses(wrapper, classes);
  var outputtext = new Array();
  outputtext[1] = "H";
  outputtext[2] = "He";
  outputtext[3] = "Li";
  outputtext[4] = "Be";
  outputtext[5] = "B";
  outputtext[6] = "C";
  outputtext[7] = "N";
  outputtext[8] = "O";
  outputtext[9] = "F";
  outputtext[10] = "Ne";
  outputtext[11] = "Na";
  outputtext[12] = "Mg";
  outputtext[13] = "Al";
  outputtext[14] = "Si";
  outputtext[15] = "P";
  outputtext[16] = "S";
  outputtext[17] = "Cl";
  outputtext[18] = "Ar";
  outputtext[19] = "K";
  outputtext[20] = "Ca";
  outputtext[21] = "Sc";
  outputtext[22] = "Ti";
  outputtext[23] = "V";
  outputtext[24] = "Cr";
  outputtext[25] = "Mn";
  outputtext[26] = "Fe";
  outputtext[27] = "Co";
  outputtext[28] = "Ni";
  outputtext[29] = "Cu";
  outputtext[30] = "Zn";
  outputtext[31] = "Ga";
  outputtext[32] = "Ge";
  outputtext[33] = "As";
  outputtext[34] = "Se";
  outputtext[35] = "Br";
  outputtext[36] = "Kr";
  outputtext[37] = "Rb";
  outputtext[38] = "Sr";
  outputtext[39] = "Y";
  outputtext[40] = "Zr";
  outputtext[41] = "Nb";
  outputtext[42] = "Mo";
  outputtext[43] = "Tc";
  outputtext[44] = "Ru";
  outputtext[45] = "Rh";
  outputtext[46] = "Pd";
  outputtext[47] = "Ag";
  outputtext[48] = "Cd";
  outputtext[49] = "In";
  outputtext[50] = "Sn";
  outputtext[51] = "Sb";
  outputtext[52] = "Te";
  outputtext[53] = "I";
  outputtext[54] = "Xe";
  outputtext[55] = "Cs";
  outputtext[56] = "Ba";
  outputtext[57] = "La";
  outputtext[58] = "Ce";
  outputtext[59] = "Pr";
  outputtext[60] = "Nd";
  outputtext[61] = "Pm";
  outputtext[62] = "Sm";
  outputtext[63] = "Eu";
  outputtext[64] = "Gd";
  outputtext[65] = "Tb";
  outputtext[66] = "Dy";
  outputtext[67] = "Ho";
  outputtext[68] = "Er";
  outputtext[69] = "Tm";
  outputtext[70] = "Yb";
  outputtext[71] = "Lu";
  outputtext[72] = "Hf";
  outputtext[73] = "Ta";
  outputtext[74] = "W";
  outputtext[75] = "Re";
  outputtext[76] = "Os";
  outputtext[77] = "Ir";
  outputtext[78] = "Pt";
  outputtext[79] = "Au";
  outputtext[80] = "Hg";
  outputtext[81] = "Tl";
  outputtext[82] = "Pb";
  outputtext[83] = "Bi";
  outputtext[84] = "Po";
  outputtext[85] = "At";
  outputtext[86] = "Rn";
  outputtext[87] = "Fr";
  outputtext[88] = "Ra";
  outputtext[89] = "Ac";
  outputtext[90] = "Th";
  outputtext[91] = "Pa";
  outputtext[92] = "U";
  outputtext[93] = "Np";
  outputtext[94] = "Pu";
  outputtext[95] = "Am";
  outputtext[96] = "Cm";
  outputtext[97] = "Bk";
  outputtext[98] = "Cf";
  outputtext[99] = "Es";
  outputtext[100] = "Fm";
  outputtext[101] = "Md";
  outputtext[102] = "No";
  outputtext[103] = "Lr";
  outputtext[104] = "Rf";
  outputtext[105] = "Db";
  outputtext[106] = "Sg";
  outputtext[107] = "Bh";
  outputtext[108] = "Hs";
  outputtext[109] = "Mt";
  outputtext[110] = "Ds";
  outputtext[111] = "Rg";
  outputtext[112] = "Cn";
  outputtext[113] = "Nh";
  outputtext[114] = "Fl";
  outputtext[115] = "Mc";
  outputtext[116] = "Lv";
  outputtext[117] = "Ts";
  outputtext[118] = "Og";
  outputtext[119] = "Uut";
  outputtext[120] = "Uup";
  outputtext[121] = "Uus";
  outputtext[122] = "Uuo";
  outputtext[123] = "Uby";
  outputtext[124] = "Urd";
  outputtext[125] = "Uoh";
  outputtext[126] = "Uwf";
  outputtext[127] = "Urs";
  outputtext[128] = "Ubo";

  inner.classList.add("tile-inner");
  inner.textContent = outputtext[tile.value];

  if (tile.value > 128) classes.push("tile-super");
  if (tile.value < 0) classes.push("tile--super");
  
  if (tile.previousPosition) {
    // Make sure that the tile gets rendered in the previous position first
    window.requestAnimationFrame(function () {
      classes[2] = self.positionClass({ x: tile.x, y: tile.y });
      self.applyClasses(wrapper, classes); // Update the position
    });
  } else if (tile.mergedFrom) {
    classes.push("tile-merged");
    this.applyClasses(wrapper, classes);

    // Render the tiles that merged
    tile.mergedFrom.forEach(function (merged) {
      self.addTile(merged);
    });
  } else {
    classes.push("tile-new");
    this.applyClasses(wrapper, classes);
  }

  // Add the inner part of the tile to the wrapper
  wrapper.appendChild(inner);

  // Put the tile on the board
  this.tileContainer.appendChild(wrapper);
};

HTMLActuator.prototype.applyClasses = function (element, classes) {
  element.setAttribute("class", classes.join(" "));
};

HTMLActuator.prototype.normalizePosition = function (position) {
  return { x: position.x + 1, y: position.y + 1 };
};

HTMLActuator.prototype.positionClass = function (position) {
  position = this.normalizePosition(position);
  return "tile-position-" + position.x + "-" + position.y;
};

HTMLActuator.prototype.updateScore = function (score) {
  this.clearContainer(this.scoreContainer);

  var difference = score - this.score;
  this.score = score;

  this.scoreContainer.textContent = this.score;

  if (difference > 0) {
    var addition = document.createElement("div");
    addition.classList.add("score-addition");
    addition.textContent = "+" + difference;

    this.scoreContainer.appendChild(addition);
  }
};

HTMLActuator.prototype.updateBestScore = function (bestScore) {
  this.bestContainer.textContent = bestScore;
};

HTMLActuator.prototype.message = function (won) {
  var type    = won ? "game-won" : "game-over";
  var message = won ? "You win!" : "Game over!";

  this.messageContainer.classList.add(type);
  this.messageContainer.getElementsByTagName("p")[0].textContent = message;
};

HTMLActuator.prototype.clearMessage = function () {
  // IE only takes one value to remove at a time.
  this.messageContainer.classList.remove("game-won");
  this.messageContainer.classList.remove("game-over");
};
