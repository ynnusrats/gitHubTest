//我不知道,反正他圖片一定最早讀,還越下面越晚讀
//完全不知道怎麼解決,但這邊好像可以直接管理圖層
//Code越下面,圖層越上面,唯一控制腳本
//另外,同一場景不會出現兩個相同名的image,他自己會去掉舊的,極神

//update裡面不受onload影響,那如果我生成圖片,都放在onload呢?還可以避免覆蓋後忘記填上的問題
//所有的同步回調函式都執行完成了，才會開始依順序執行異步的回調函式。
//我的圖片生成,如果都放在異部執行,就可以確保圖片都已經讀取完成

//src相對位置,都用主運行位置當定點


//等等靠北.我把寬與高設定為負,他就翻轉了


//0~3>右站立,4~7>左站立,9~13右跑,14~19左跑
export var playerAnimationArr=[];
//0>一般地板 1>spikes 2>rock 3>bush
export var floorImgArr=[];

export var topSpikesArr=[];

var playerIdleRight1 = new Image();
playerIdleRight1.src = "img/player/idle/playerIdleRight1.png";
playerAnimationArr.push(playerIdleRight1);
console.log("pic1Done");

var playerIdleRight2 =new Image();
playerIdleRight2.src = "img/player/idle/playerIdleRight2.png";
playerAnimationArr.push(playerIdleRight2);
console.log("pic1Done");

var playerIdleRight3 =new Image();
playerIdleRight3.src = "img/player/idle/playerIdleRight3.png";
playerAnimationArr.push(playerIdleRight3);
console.log("pic1Done");

var playerIdleRight4 =new Image();
playerIdleRight4.src = "img/player/idle/playerIdleRight4.png";
playerAnimationArr.push(playerIdleRight4);
console.log("pic1Done");

var playerIdleLeft1 = new Image();
playerIdleLeft1.src = "img/player/idle/playerIdleLeft1.png";
playerAnimationArr.push(playerIdleLeft1);

var playerIdleLeft2 = new Image();
playerIdleLeft2.src = "img/player/idle/playerIdleLeft2.png";
playerAnimationArr.push(playerIdleLeft2);

var playerIdleLeft3 = new Image();
playerIdleLeft3.src = "img/player/idle/playerIdleLeft3.png";
playerAnimationArr.push(playerIdleLeft3);

var playerIdleLeft4 = new Image();
playerIdleLeft4.src = "img/player/idle/playerIdleLeft4.png";
playerAnimationArr.push(playerIdleLeft4);


var playerRunRight1 = new Image();
playerRunRight1.src = "img/player/run/playerRunRight1.png";
playerAnimationArr.push(playerRunRight1);

var playerRunRight2 = new Image();
playerRunRight2.src = "img/player/run/playerRunRight2.png";
playerAnimationArr.push(playerRunRight2);

var playerRunRight3 = new Image();
playerRunRight3.src = "img/player/run/playerRunRight3.png";
playerAnimationArr.push(playerRunRight3);

var playerRunRight4 = new Image();
playerRunRight4.src = "img/player/run/playerRunRight4.png";
playerAnimationArr.push(playerRunRight4);

var playerRunRight5 = new Image();
playerRunRight5.src = "img/player/run/playerRunRight5.png";
playerAnimationArr.push(playerRunRight5);

var playerRunRight6 = new Image();
playerRunRight6.src = "img/player/run/playerRunRight6.png";
playerAnimationArr.push(playerRunRight6);


var playerRunLeft1 = new Image();
playerRunLeft1.src = "img/player/run/playerRunLeft1.png";
playerAnimationArr.push(playerRunLeft1);

var playerRunLeft2 = new Image();
playerRunLeft2.src = "img/player/run/playerRunLeft2.png";
playerAnimationArr.push(playerRunLeft2);

var playerRunLeft3 = new Image();
playerRunLeft3.src = "img/player/run/playerRunLeft3.png";
playerAnimationArr.push(playerRunLeft3);

var playerRunLeft4 = new Image();
playerRunLeft4.src = "img/player/run/playerRunLeft4.png";
playerAnimationArr.push(playerRunLeft4);

var playerRunLeft5 = new Image();
playerRunLeft5.src = "img/player/run/playerRunLeft5.png";
playerAnimationArr.push(playerRunLeft5);

var playerRunLeft6 = new Image();
playerRunLeft6.src = "img/player/run/playerRunLeft6.png";
playerAnimationArr.push(playerRunLeft6);

var normalFloor = new Image();
normalFloor.src = "img/floor/normalFloor.png";
floorImgArr.push(normalFloor);

var downSpikes = new Image();  //必須改
downSpikes.src = "img/floor/downSpikesSmart.png";
floorImgArr.push(downSpikes);

var rock = new Image();  //要改
rock.src = "img/floor/rock.png";
floorImgArr.push(rock);

var bush = new Image();  //笑死,草蠻好看的
bush.src = "img/floor/bush.png";
floorImgArr.push(bush);

var topSpikes = new Image();
topSpikes.src = "img/floor/spikesTopSmart.png";
topSpikesArr.push(topSpikes);

