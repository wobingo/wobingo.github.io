const items = document.getElementsByClassName('item');
const itemSize = 200;

function init() {
  Array.prototype.forEach.call(items, function(item) {
    // Place the items
    // Position between the top and bottom of the canvas minus some offset
    var offset = itemSize;
    // Between 20 and 80%
    var posX = (Math.random() * 60) + 20;
    var posY = Math.round(Math.random() * document.body.clientHeight) - itemSize;
    item.style.cssText = `width: ${itemSize}px;
                         left: ${posX}%;
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

// Add parallax scrolling effect
function parallax() {
  console.log("called");
  window.addEventListener('scroll', function () {
    var scrolled = window.pageYOffset;
    console.log(scrolled);
  });
}

init();
parallax();
