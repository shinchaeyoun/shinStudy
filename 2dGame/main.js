let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let overMsg = document.getElementById('gameOver');

var timer = 0;
var hurdleArr = [];
var jumpTimer = 0;
var animation;
var jumping = false;

var img1 = new Image();
img1.src = 'dinosaur.png'
var img2 = new Image();
img2.src = 'cactus.png'

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// 그릴 캐릭터의 정보를 Object에 담아두기
var dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.drawImage(img1,this.x, this.y, this.width, this.height);
  }
};

// 장애물의 오브젝트 자료 만들기
class Hurdle {
  constructor (xVal, yVal, speedVal, sizeVal){
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.drawImage(img2, this.x, this.y, this.width, this.height);
  }
};

let hurdleTimeArr = [20, 60, 120]
function playing(e){
  animation = requestAnimationFrame(playing);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // 200프레임마다 장애물 나옴

  if(timer % (Math.random() * 60) === 0) {
    var hurdle = new Hurdle();
    hurdleArr.push(hurdle);
  };

  // 장애물
  hurdleArr.forEach((item, i, o) => {
    // x좌표가 0미만이면 제거
    if(item.x < -50) {
      o.splice(i, 1)
    };
    item.x -= 5;
    hitTest(dino, item);
    item.draw();
  });

  // 스페이스바 누르면 점프
  if(jumping == true) {
    dino.y -= 3;
    jumpTimer++;
  };
  if(jumping == false) {
    if(dino.y < 200) {
      dino.y += 3;
    }
  };
  if(jumpTimer > 35) {
    jumping = false;
    jumpTimer = 0;
  };
  
  dino.draw();
};
playing();

// 충돌확인
function hitTest(dino, hurdle){
  var xVal = (hurdle.x + 10) - (dino.x + dino.width);
  var yVal = hurdle.y - (dino.y + dino.height);

  if (xVal < 0 && yVal < 0){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
    overMsg.style.display = 'block';
  };
};


document.addEventListener('keydown', function(e){
  if(e.code === 'Space'){
    jumping = true;
  };
});