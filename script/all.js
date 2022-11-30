/*import區*/
import * as backGround from "./backGround.js";
import * as playermove from "./playermove.js";
import * as floor from "./floor.js";
import * as hitBox from "./hitBox.js";
import * as testControl from "./testControl.js";
import * as imgIn from "./imgIn.js";
import * as ui from "./ui.js";
import * as playerData from "./playerData.js";

//我好像可以把,所有變數包成物件,然後再取出

//讓function從function移除的方式

//11/29，我應該弄兩塊天使板，確保玩家的死亡是反應問題而非遊戲問題
//還有UI改進(更明確的血量?)
//操控教學


export function gameStartLoad() {
    var ca2d = document.getElementById("ca").getContext("2d"); //抓取畫布
    setInterval(gameupdate, 1000 / 63, ca2d); //開始遊戲
    console.log("到底他有沒有pubin上去R?");
}

function gameupdate(ca2d) {         //每秒執行60次

    if (ui.uiLogicValue.isGameStart == true) {
        hitBox.gravity();
        playerData.unlimitedStageSystem();
        floor.floorCreatLogic();
        hitBox.hitBoxTest(); //初始板塊的hitBox
        hitBox.hitBoxLogic(ca2d);
        //playerData.scoreLogic();
        //系統計算先放,最後再放繪圖
        ca2d.clearRect(0, 0, 1280, 720);  //清除所有畫面
        ca2d.drawImage(backGround.inaBackGround, 0, 0, 1280, 720);  //繪製背景
        floor.drawNormalFloor(ca2d);
        playermove.playerDrawLogic(ca2d);  //player position draw
        playerData.playerHpBarDraw(ca2d);
        ui.showScore(ca2d);
    } else {
        ui.dieUi(ca2d);
    }




    //重新繪圖(背景+UI+新物件+舊物件)(其他函數只更改位置)

}

