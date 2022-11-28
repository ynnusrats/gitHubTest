import * as imgIn from "./imgIn.js"


//player移動+動畫邏輯
//判定按鍵狀況>選擇動畫開關>執行相關邏輯


//按鍵判定
export var dKey = false;
export var wKey = false;
export var aKey = false;
export var sKey = false;

//按鍵偵測
window.addEventListener("keydown", dKeyDown)  //左右放下
window.addEventListener("keydown", aKeyDown)

//window.addEventListener("keydown", wKeyDown)
//window.addEventListener("keydown", sKeyDown)

window.addEventListener("keyup", dKeyUp)  //左右放開
window.addEventListener("keyup", aKeyUp)

//window.addEventListener("keyup", wKeyUp)
//window.addEventListener("keyup", sKeyUp)

//動畫測試按鈕(未實裝)


//控制player面相 true右  false左
var playerFace = true;

//動畫控制與代碼
var PlayerAnimationCode = 0;
var PlayerAnimationPage = 0; //控制函數內
//右站立
var isPlayerIdleRightAnimation = false;
var isplayerIdleRightAnimationAlive = false //避免重複執行

//左站立
var isPlayerIdleLeftAnimation = false;
var isplayerIdleLeftAnimationAlive = false //避免重複執行

//右跑
var isPlayerRunRightAnimation = false;
var isPlayerRunRightAnimationAlive = false;

//左跑
var isPlayerRunLeftAnimation = false;
var isPlayerRunLeftAnimationAlive = false;

//player位置
export var playerPosition={};
Object.defineProperties(playerPosition,{
    "xpos":{
        value:590,
        writable:true
    },
    "ypos":{
        value:10,
        writable:true
    }
});


//player移動速度
export var playerMoveSpeed = {};

Object.defineProperties(playerMoveSpeed, {  //必須進物件設定,把此物件改成可修改writable:true,不然其他腳本改不到幹
    "xspeed": {
        value: 6.4,
        writable: true
    },
    "yspeed": {
        value: 0,
        writable: true
    }
})



//畫布大小
export var canvasWidth = 1280;
export var canvasHeigth = 720;



export function playerDrawLogic(ca2d) {
    KeyLogic();
    playerAnimationLogic();
    ca2d.drawImage(imgIn.playerAnimationArr[PlayerAnimationCode], playerPosition.xpos, playerPosition.ypos, 100, 100);
}







function dKeyDown(e) {    //按下右控制器
    if (e.keyCode == 68) {
        dKey = true;
    }
}

function aKeyDown(e) {    //按下左控制器
    if (e.keyCode == 65) {
        aKey = true;
    }
}

function wKeyDown(e) {    //上按下控制器
    if (e.keyCode == 87) {
        wKey = true;
    }
}

function sKeyDown(e) {    //下按下控制器
    if (e.keyCode == 83) {
        sKey = true;
    }
}

function dKeyUp(e) {  //右放開控制器
    if (e.keyCode == 68) {
        dKey = false;  //右控制器放開判定

    }
}

function aKeyUp(e) {  //左放開控制器
    if (e.keyCode == 65) {
        aKey = false;  //左控制器放開判定
    }
}


function wKeyUp(e) {  //上放開控制器
    if (e.keyCode == 87) {
        wKey = 0;
    }
}

function sKeyUp(e) {  //下放開控制器
    if (e.keyCode == 83) {
        sKey = 0;
    }
}

function KeyLogic() {   //face等等考慮要不要+

    if (aKey == false && dKey == false) {
        playerPosition.xpos = playerPosition.xpos;
        playerPosition.ypos = playerPosition.ypos;

        if (playerFace == true) {
            isPlayerIdleRightAnimation = true;
            isPlayerIdleLeftAnimation = false;
        }
        else {
            isPlayerIdleRightAnimation = false;
            isPlayerIdleLeftAnimation = true;
        }

        isPlayerRunRightAnimation = false;
        isPlayerRunLeftAnimation = false;
    }

    if (aKey == true && dKey == false) {
        playerPosition.xpos = playerPosition.xpos - playerMoveSpeed.xspeed;      //xspeed;
        playerPosition.ypos = playerPosition.ypos;
        playerFace = false;

        isPlayerIdleRightAnimation = false;
        isPlayerIdleLeftAnimation = false;
        isPlayerRunRightAnimation = false;
        isPlayerRunLeftAnimation = true;
    }

    if (aKey == false && dKey == true) {
        playerPosition.xpos = playerPosition.xpos + playerMoveSpeed.xspeed;
        playerPosition.ypos = playerPosition.ypos;
        playerFace = true;

        isPlayerIdleRightAnimation = false;
        isPlayerIdleLeftAnimation = false;
        isPlayerRunRightAnimation = true;
        isPlayerRunLeftAnimation = false;

    }

    if (aKey == true && dKey == true) {
        playerPosition.xpos = playerPosition.xpos;
        playerPosition.ypos = playerPosition.ypos;

        if (playerFace == true) {
            isPlayerIdleRightAnimation = true;
            isPlayerIdleLeftAnimation = false;
        }
        else {
            isPlayerIdleRightAnimation = false;
            isPlayerIdleLeftAnimation = true;
        }
        isPlayerRunRightAnimation = false;
        isPlayerRunLeftAnimation = false;
    }


    if (wKey == false && sKey == false) {
        playerPosition.xpos = playerPosition.xpos;
        playerPosition.ypos = playerPosition.ypos;


    }

    if (wKey == true && sKey == false) {
        playerPosition.xpos = playerPosition.xpos;
        playerPosition.ypos = playerPosition.ypos - playerMoveSpeed.yspeed;

        if (playerFace == true) {
            isPlayerRunRightAnimation = true;
            isPlayerRunLeftAnimation = false;
        }
        else {
            isPlayerRunRightAnimation = false;
            isPlayerRunLeftAnimation = true;
        }

        isPlayerIdleRightAnimation = false;
        isPlayerIdleLeftAnimation = false;


    }

    if (wKey == false && sKey == true) {
        playerPosition.xpos = playerPosition.xpos;
        playerPosition.ypos = playerPosition.ypos + playerMoveSpeed.yspeed;

        if (playerFace == true) {
            isPlayerRunRightAnimation = true;
            isPlayerRunLeftAnimation = false;
        }
        else {
            isPlayerRunRightAnimation = false;
            isPlayerRunLeftAnimation = true;
        }

        isPlayerIdleRightAnimation = false;
        isPlayerIdleLeftAnimation = false;
    }

    if (wKey == true && sKey == true) {
        playerPosition.xpos = playerPosition.xpos;
        playerPosition.ypos = playerPosition.ypos;
    }
}

function playerAnimationLogic() {
    playerIdleAnimation();
    playerRunAnimation();


}

function playerIdleAnimation() {
    if (playerFace == true && isPlayerIdleRightAnimation == true && isplayerIdleRightAnimationAlive == false) {  //臉要對,動畫啟動,檢查迴圈是否已啟動(避免重複執行)
        isplayerIdleRightAnimationAlive = true; //迴圈開啟
        PlayerAnimationCode = 0;
        PlayerAnimationPage = 0; //設定起始動畫頁數(記得-1)

        playerIdleRightAnimation();

    } else if (playerFace == false && isPlayerIdleLeftAnimation == true && isplayerIdleLeftAnimationAlive == false) {
        isplayerIdleLeftAnimationAlive = true; //迴圈開啟
        PlayerAnimationCode = 4;
        PlayerAnimationPage = 4;
        playerIdleLeftAnimation();
    }
}

function playerIdleRightAnimation() {

    var loop = setInterval(function () {

        if (isPlayerIdleRightAnimation == false) {
            clearInterval(loop);
            isplayerIdleRightAnimationAlive = false;  //關閉迴圈
        } else if (PlayerAnimationPage < 3) {
            PlayerAnimationPage += 1;
            PlayerAnimationCode = PlayerAnimationPage;
        } else if (PlayerAnimationPage = 3) {
            PlayerAnimationPage = 0;
            PlayerAnimationCode = PlayerAnimationPage;
        }
    }, 300)

}

function playerIdleLeftAnimation() {

    var loop = setInterval(function () {

        if (isPlayerIdleLeftAnimation == false) {
            clearInterval(loop);
            isplayerIdleLeftAnimationAlive = false;  //關閉迴圈
        } else if (PlayerAnimationPage < 7) {
            PlayerAnimationPage += 1;
            PlayerAnimationCode = PlayerAnimationPage;
        } else if (PlayerAnimationPage = 7) {
            PlayerAnimationPage = 4;
            PlayerAnimationCode = PlayerAnimationPage;
        }
    }, 300)

}

function playerRunAnimation() {
    if (playerFace == true && isPlayerRunRightAnimation == true && isPlayerRunRightAnimationAlive == false) {  //確認左右,如果沒有動畫,執行
        isPlayerRunRightAnimationAlive = true;
        PlayerAnimationCode = 9;  //先跑第一張
        PlayerAnimationPage = 9; //從第二張開始跑
        playerRunRightAnimation();

    } else if (playerFace == false && isPlayerRunLeftAnimation == true && isPlayerRunLeftAnimationAlive == false) {  //確認左右,如果沒有動畫,執行
        isPlayerRunLeftAnimationAlive = true;
        PlayerAnimationCode = 14;
        PlayerAnimationPage = 14;
        playerRunLeftAnimation();

    }
}

function playerRunRightAnimation() {
    var loop = setInterval(function () {

        if (isPlayerRunRightAnimation == false) { //當動畫關閉時
            clearInterval(loop);
            isPlayerRunRightAnimationAlive = false;  //關閉迴圈
        } else if (PlayerAnimationPage < 13) {
            PlayerAnimationPage += 1;
            PlayerAnimationCode = PlayerAnimationPage;

        } else if (PlayerAnimationPage = 13) {
            PlayerAnimationPage = 8;
            PlayerAnimationCode = PlayerAnimationPage;
        }
    }, 200)
}

function playerRunLeftAnimation() {
    var loop = setInterval(function () {

        if (isPlayerRunLeftAnimation == false) { //當動畫關閉時
            clearInterval(loop);
            isPlayerRunLeftAnimationAlive = false;  //關閉迴圈
        } else if (PlayerAnimationPage < 19) {
            PlayerAnimationPage += 1;
            PlayerAnimationCode = PlayerAnimationPage;
        } else if (PlayerAnimationPage = 19) {
            PlayerAnimationPage = 14;
            PlayerAnimationCode = PlayerAnimationPage;
        }
    }, 200)
}





