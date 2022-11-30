import * as ui from "./ui.js";
import * as hitBox from "./hitBox.js";
import * as playermove from "./playermove.js";
import * as floor from "./floor.js";


var scoreLogicLoop = false;


export var playData={};
Object.defineProperties(playData,{
    "score":{
        value:0,
        writable:true
    },
    "hp":{
        value:10,
        writable:true
    },
    "healHp":{
        value:1,
        writable:true
    }
});



export function playerHpBarDraw(ca2d){
    if(playData.hp==10){  //扛4下
        ca2d.fillStyle="green";
        ca2d.fillRect(playermove.playerPosition.xpos,playermove.playerPosition.ypos+24.5,playData.hp*10,7.5);
    }else if(playData.hp<4){ //下一擊必死
        ca2d.fillStyle="red";
        ca2d.fillRect(playermove.playerPosition.xpos,playermove.playerPosition.ypos+24.5,playData.hp*10,7.5);
    }else{   //其他狀況
        ca2d.fillStyle="yellow";
        ca2d.fillRect(playermove.playerPosition.xpos,playermove.playerPosition.ypos+24.5,playData.hp*10,7.5);
    }

}

export function stageSystem(){
    //依照分數去調整板子速度/彈跳力/玩家移動速度/垃圾板塊機率?
    //把變數獨立拉出來,應該可以形成無限變難的關卡

    if(playData.score<20){

        floor.floorUpSpeed.floorUpSpeed = 2;
        hitBox.gravityG.bushUpForce = -7;
    }else if(playData.score<40){
        floor.floorUpSpeed.floorUpSpeed = 2.5;
        hitBox.gravityG.bushUpForce = -7.5;
    }else if(playData.score<60){
        floor.floorUpSpeed.floorUpSpeed = 3;
        hitBox.gravityG.bushUpForce = -8;
    }
}

export function unlimitedStageSystem(){
    let r=0.025;  //變數
    floor.floorUpSpeed.floorUpSpeed = 2+playData.score*r;
    hitBox.gravityG.bushUpForce = -7-playData.score*r;
}