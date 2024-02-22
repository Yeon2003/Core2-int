var canvas, ctx, inner = false;
var currX = "0";
var currY = "0";
                    
function init() {
  canvas = document.getElementById("can");
  ctx = canvas.getContext("2d");
  ctx.fillStyle = "#282828";
  ctx.fillRect(0, 0, 280 , 280);

  canvas.addEventListener("mouseover", function (e) {
    findxy('over', e)
    });
  canvas.addEventListener("mouseout", function (e) {
    findxy('out', e)
    });
  canvas.addEventListener("mousemove", function (e) {
    findxy('move', e)
    });
  canvas.addEventListener("click", function (e) {
                        findxy('click', e)
                    });
   }

function draw() {
  ctx.clearRect(currX, currY, 20, 20);
  }
 function drawMobile() {
  ctx.clearRect(0, 0, 280, 280);
  }

function findxy(res, e) {
  if (res == 'over') {
    inner = true;
    var text = document.getElementById("text");
     text.style.display = "block";
     }
  if (res == "out") {
    inner = false;
    }
  if (res == 'move') {
    if (inner) {
       currX = e.clientX - canvas.offsetLeft;
       currY = (e.clientY - canvas.offsetTop)/2;
       draw();
       }
     }
   if (res == 'click') {
     if (inner) {
       currX = e.clientX - canvas.offsetLeft;
       currY = (e.clientY - canvas.offsetTop)/2;
       drawMobile();
       }
     }
   }