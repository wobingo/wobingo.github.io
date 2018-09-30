const items = document.getElementsByClassName('item');
var inventoryCount;

// TO DO
// - Enable dragging inventory
// - Enable minimizing inventory
// - Add inventory descriptions
// - Enable item collection
// - Create an easier way to manage items and descriptions
// - Revert cursor back to default on collect

function init() {
  Array.prototype.forEach.call(items, function(item) {
    // Place the items
    // Position between the top and bottom of the canvas minus some offset
    var posX = Math.round(Math.random() * document.body.clientWidth);
    var posY = Math.round(Math.random() * document.body.clientHeight);
    item.style.cssText = `left: ${posX}px;
                         top: ${posY}px;`;

    item.onclick = function() {
      collectItem(item);
    }
  });

  inventoryCount = 0;
}

function collectItem(item) {
  item.style.cssText = null;
  increaseInventoryCount();
}

function increaseInventoryCount() {
  inventoryCount++;
}

init();
