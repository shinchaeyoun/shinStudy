let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let overMsg = document.getElementById('gameOver');
let pointText = document.getElementById('point');

var timer = 0;
var hurdleArr = [];
var jumpTimer = 0;
var animation;
var jumping = false;
var hitCount = 300;
var point = 0;

var dinoImg = new Image();
dinoImg.src = 'dinosaur.png'
var hurdleImg = new Image();
hurdleImg.src = 'cactus.png'

canvas.width = 500;
canvas.height = 300;


// 그릴 캐릭터의 정보를 Object에 담아두기
var dino = {
  x: canvas.offsetLeft + 10,
  y: canvas.offsetHeight - 60,
  width: 50,
  height: 50,
  draw() {
    ctx.drawImage(dinoImg, this.x, this.y, this.width, this.height);
  }
};

// 장애물의 오브젝트 자료 만들기
class Hurdle {
  constructor (){
    this.x = canvas.offsetWidth - 60;
    this.y = canvas.offsetHeight - 60;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.drawImage(hurdleImg, this.x, this.y, this.width, this.height);
  }
};

// gamePoint ();
function gamePoint (){
  setInterval(() => {
    point++;
    console.log(point);
    pointText.innerHTML = point
  }, 1000);
};

function playing(e){
  animation = requestAnimationFrame(playing);
  timer++;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // 60프레임마다 장애물 나옴
  if(timer % 60 === 0) {
    var hurdle = new Hurdle();
    hurdleArr.push(hurdle);
  };

  // 점수
  if(timer % 10 === 0) {
    point++;
    pointText.innerHTML = String(point).padStart(5,'0');
  };

  // 장애물
  hurdleArr.forEach((item, i, o) => {
    // x좌표가 0미만이면 제거
    if(item.x < -50) {
      o.splice(i, 1);
      point+=20; // 장애물 피하면 점수 올라가기
    };
    item.x -= 5;
    item.draw();
    hitTest(dino, item, o);
  });

  // 스페이스바 누르면 점프
  if(jumping == true) {
    dino.y -= 3; // 점프 올라가는 스피드
    jumpTimer++;
  };
  if(jumping == false) {
    if(dino.y < 200) {
      dino.y += 5; // 점프 내려오는 스피드
    };
  };
  if(jumpTimer > 35) { // 점프하는 시간
    jumping = false;
    jumpTimer = 0;
  };
  
  dino.draw();
};
playing();

// 충돌확인
function hitTest(dino, hurdle, o){
  var xVal = (hurdle.x + 10) - (dino.x + dino.width);
  var yVal = hurdle.y - (dino.y + dino.height);

  if (xVal < 0 && yVal < 0){
    o.splice(0, 1);
    hitCount--;

    if(hitCount <= 0) {
      cancelAnimationFrame(animation);
      overMsg.style.display = 'block';
    };
  };
};

// 스페이스로 점프
document.addEventListener('keydown', function(e){
  if(e.code === 'Space'){
    jumping = true;
  };
});