import * as playermove from "./playermove.js";
import * as floor from "./floor.js";
import * as playerData from "./playerData.js";
import * as ui from "./ui.js";


var onFloor = false;

var fuckRock;

export var rockData = {};
Object.defineProperties(rockData, {
    "rockImgDownSpeed": {
        value: 0.75,
        writable: true
    },
    "rockDieSpeed": {
        value: 750,
        writable: true
    }
});

export var gravityG = {};
Object.defineProperties(gravityG, {
    "g": {
        value: 0.22,
        writable: true
    },
    "gg": {
        value: 0,
        writable: true
    },
    "isGravitySwitch": {
        value: true,
        writable: true
    },
    "isPlayerOnFloor": {
        value: false,
        writable: true
    },
    "bushUpForce": {   //草的跳躍力
        value: -7,
        writable: true
    }

});








//地板的x+寬=畫布上的寬
//如果玩家的寬,在地板的寬內
//停止下降

//玩家的腳寬度=>(xpos,ypos+100)___________(xpos+100,ypos+100)
//箱子上面寬度=>(floorPosX,floorPosY)------(floorPosX+100,floorPosY)

//當玩家腳的Y座標hitbox=地板上Y座標的hitbox,同時玩家左右腳判定在合理範圍內
//地板範圍內>>地板較小的座標x < 右腳   &&  左腳  < 地板較大的座標x 
//玩家y座標會=地板y座標
//直到離開地板


export function gravity() {

    gravityG.gg += gravityG.g;
    playermove.playerPosition.ypos += gravityG.gg;

}



export function hitBoxTest() {   //可以能把Y設定一個範圍,因為加入度無法細度控制,可以會不小心超過判定範圍
    if (floor.floorPosY < playermove.playerPosition.ypos + 100 &&  //上下兩句設定地板Y碰撞範圍,避免加速度破圖
        playermove.playerPosition.ypos + 100 < floor.floorPosY + 25 &&
        floor.floorPosX < playermove.playerPosition.xpos + 30 + 40 &&
        playermove.playerPosition.xpos + 30 < floor.floorPosX + floor.floorWidth) {
        gravityG.gg = 0;
        playermove.playerPosition.ypos = floor.floorPosY - 80;  //將玩家好好站到平台上
    }
}

export function hitBoxLogic(ca2d) {


    let i = 0;


    for (i = 0; i < 8; i++) {

        if (floor.floorArr[i].floorPosY < playermove.playerPosition.ypos + 100 &&  //上下兩句設定地板Y碰撞範圍,避免加速度破圖
            playermove.playerPosition.ypos + 100 < floor.floorArr[i].floorPosY + 25 &&  //這邊板子hitbox厚度
            floor.floorArr[i].floorPosX < playermove.playerPosition.xpos + 30 + 40 &&
            playermove.playerPosition.xpos + 30 < floor.floorArr[i].floorPosX + floor.floorArr[i].floorWidth) {

            //確定碰到後,確認用哪個hitbox       
            switch (floor.floorArr[i].floorType) {

                case 0:
                    normalFloorHitbox(i);
                    break;
                case 1:
                    spikesFloorHitbox(i);
                    break;
                case 2:
                    rockFloorHitbox(i);
                    break;
                case 3:
                    bushFloorHitbox(i);
                    break;

            }

        }
    }

    if (gravityG.gg != 0) {   //如果向下加速度大於0,表示不再地板上
        clearInterval(fuckRock);
        onFloor = false;
    }

    //天花板擠壓
    if (playermove.playerPosition.ypos + 40 < 10) {  //如果碰到
        playermove.playerPosition.ypos += 50;  //就擠他30
        gravityG.gg = 0;   //避免當時gg為正+,狂刺猛刺
        playerData.playData.hp -= 3;
        if (playerData.playData.hp < 0) {  //如果血少於0,設定為0
            playerData.playData.hp = 0;
        }

    }


    //死亡線
    if (playermove.playerPosition.ypos > 820) {
        playerData.playData.hp = 0;
    }


    if (playerData.playData.hp == 0 && ui.uiLogicValue.isGameStart == true) {
        ui.uiLogicValue.isGameStart = false;
    }
}




//地板效果區

function normalFloorHitbox(i) {
    gravityG.gg = 0;  //在平台上時,重力引響為0
    playermove.playerPosition.ypos = floor.floorArr[i].floorPosY - 80;  //將玩家好好站到平台上

    if (onFloor == false) {  //這邊碰到底板指觸發一次
        onFloor = true;
        if (playerData.playData.hp < 10) {
            playerData.playData.hp += 1;
        }
        playerData.playData.score += 1;
    }
}

function spikesFloorHitbox(i) {
    gravityG.gg = 0;  //在平台上時,重力引響為0
    playermove.playerPosition.ypos = floor.floorArr[i].floorPosY - 80;  //將玩家好好站到平台上

    if (onFloor == false) {  //這邊碰到底板指觸發一次
        onFloor = true;
        playerData.playData.hp -= 3;
        if (playerData.playData.hp < 0) {  //如果血少於0,設定為0
            playerData.playData.hp = 0;
        }
        //playerData.playData.score += 1;
    }
}

function rockFloorHitbox(i) {
    gravityG.gg = 0;
    playermove.playerPosition.ypos = floor.floorArr[i].floorPosY - 80;  //將玩家好好站到平台上
    if (floor.floorArr[i].floorHeight > 0) {  //圖片慢慢變細
        floor.floorArr[i].floorHeight -= rockData.rockImgDownSpeed;  //難度上升，這裡也要改
    }
    if (onFloor == false) {  //這邊碰到底板指觸發一次
        onFloor = true;
        if (playerData.playData.hp < 10) {
            playerData.playData.hp += 1;
        }

        fuckRock = setInterval(function () {  //經過1秒後,下調25
            floor.floorArr[i].floorPosX = 2000;//將板子實際位置移到千里之外(x),y不會動
        }, rockData.rockDieSpeed)  //難度上升，這裡也要改
        playerData.playData.score += 1;
    }
}

function bushFloorHitbox(i) {
    gravityG.gg = 0;  //在平台上時,重力引響為0
    playermove.playerPosition.ypos = floor.floorArr[i].floorPosY - 100;  //將玩家好好站到平台上,這個往上調一點,避免重複沾到

    if (onFloor == false) {  //這邊碰到底板指觸發一次
        onFloor = true;
        if (playerData.playData.hp < 10) {
            playerData.playData.hp += 1;
        }
        gravityG.gg = gravityG.bushUpForce; //-7;這樣會跳不上2樓  //8.5


        playerData.playData.score += 1;
    }
}

//他有時候跳不起來...


