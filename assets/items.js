const items = document.getElementsByClassName('item');
const itemWidth = 200;

function init() {
  Array.prototype.forEach.call(items, function(item) {
    // Place the items
    // Position between the top and bottom of the canvas minus some offset
    var posX = Math.round(Math.random() * document.body.clientWidth) - itemWidth;
    var posY = Math.round(Math.random() * document.body.clientHeight) - itemWidth;
    item.style.cssText = `width: ${itemWidth}px;
                         left: ${posX}px;
                         top: ${posY}px;`;

    item.onclick = function() {
      collectItem(item);
    }
  });
}

function collectItem(item) {
  console.log("clicked" + item);
  item.style.cssText = null;
}

init();
