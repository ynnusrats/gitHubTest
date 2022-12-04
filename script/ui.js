import * as playerData from "./playerData.js";
import * as floor from "./floor.js";
import * as playermove from "./playermove.js";
import * as hitBox from "./hitBox.js";


window.addEventListener("keydown", gmaeGo);

export var uiLogicValue = {};
Object.defineProperties(uiLogicValue, {
    "isGameStart": {
        value: false,
        writable: true
    }
})

export function showScore(ca2d) {
    ca2d.font = "60px serif";
    ca2d.fillStyle = "red";
    ca2d.fillText("Score:" + playerData.playData.score, 100, 100);
}


export function dieUi(ca2d) {
    ca2d.font = "100px serif";
    ca2d.fillStyle = "white";
    ca2d.fillText("Score:" + playerData.playData.score, 475, 380);
    ca2d.font = "70px serif";
    ca2d.fillText("press g to start", 440, 480);
}


function gmaeGo(e) {
    if (e.keyCode == 71) {
        if (uiLogicValue.isGameStart == false) {

            //要重制
            playermove.playerPosition.xpos = 590;
            playermove.playerPosition.ypos = 10;
            playerData.playData.hp = 10;
            hitBox.gravityG.gg = 0;
            playerData.playData.score = 0;  //可以更改初始直測試


            uiLogicValue.isGameStart = true;
        }
    }
}
