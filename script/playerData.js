import * as ui from "./ui.js";
import * as hitBox from "./hitBox.js";
import * as playermove from "./playermove.js";


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
        ca2d.fillRect(playermove.playerPosition.xpos,playermove.playerPosition.ypos+24.5,playData.hp*10,5);
    }else if(playData.hp<4){ //下一擊必死
        ca2d.fillStyle="red";
        ca2d.fillRect(playermove.playerPosition.xpos,playermove.playerPosition.ypos+24.5,playData.hp*10,5);
    }else{   //其他狀況
        ca2d.fillStyle="yellow";
        ca2d.fillRect(playermove.playerPosition.xpos,playermove.playerPosition.ypos+24.5,playData.hp*10,5);
    }

}