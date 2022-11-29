import * as playermove from "./playermove.js";
import * as imgIn from "./imgIn.js";

//如果可以,我一定生成一塊,玩家可以在極端位置採到的方塊


//
export var firstTime = {};
Object.defineProperties(firstTime,{
    "firstTime":{
        value:false,
        writable:true
    }
});

//地板物件陣列,場面上最多?個地板
//用陣列內的物件改動,去選擇生成種類與函數
export var floorArr = [];

//floor 物件

floorArr[0] = {};
Object.defineProperties(floorArr[0], {
    "floorPosX": {
        value: 300,
        writable: true
    },
    "floorPosY": {
        value: 300,
        writable: true
    }, "floorWidth": {
        value: 150,
        writable: true
    },
    "floorHeight": {
        value: 40,
        writable: true
    },
    "floorUpSpeed": {
        value: 1,
        writable: true
    },
    "isFloorAlive": {
        value: false,
        writable: true
    },
    "floorType": {   //屬性,0>正常 1>尖刺 2>石頭 3>草
        value: 0,
        writable: true
    }

});

floorArr[1] = {};
Object.defineProperties(floorArr[1], {
    "floorPosX": {
        value: 300,
        writable: true
    },
    "floorPosY": {
        value: 300,
        writable: true
    }, "floorWidth": {
        value: 150,
        writable: true
    },
    "floorHeight": {
        value: 40,
        writable: true
    },
    "floorUpSpeed": {
        value: 1,
        writable: true
    },
    "isFloorAlive": {
        value: false,
        writable: true
    },
    "floorType": {   //屬性,0>正常 1>尖刺 2>石頭 3>草
        value: 0,
        writable: true
    }

});

floorArr[2] = {};
Object.defineProperties(floorArr[2], {
    "floorPosX": {
        value: 300,
        writable: true
    },
    "floorPosY": {
        value: 300,
        writable: true
    }, "floorWidth": {
        value: 150,
        writable: true
    },
    "floorHeight": {
        value: 40,
        writable: true
    },
    "floorUpSpeed": {
        value: 1,
        writable: true
    },
    "isFloorAlive": {
        value: false,
        writable: true
    },
    "floorType": {   //屬性,0>正常 1>尖刺 2>石頭 3>草
        value: 0,
        writable: true
    }

});

floorArr[3] = {};
Object.defineProperties(floorArr[3], {
    "floorPosX": {
        value: 300,
        writable: true
    },
    "floorPosY": {
        value: 300,
        writable: true
    }, "floorWidth": {
        value: 150,
        writable: true
    },
    "floorHeight": {
        value: 40,
        writable: true
    },
    "floorUpSpeed": {
        value: 1,
        writable: true
    },
    "isFloorAlive": {
        value: false,
        writable: true
    },
    "floorType": {   //屬性,0>正常 1>尖刺 2>石頭 3>草
        value: 0,
        writable: true
    }

});

floorArr[4] = {};
Object.defineProperties(floorArr[4], {
    "floorPosX": {
        value: 300,
        writable: true
    },
    "floorPosY": {
        value: 300,
        writable: true
    }, "floorWidth": {
        value: 150,
        writable: true
    },
    "floorHeight": {
        value: 40,
        writable: true
    },
    "floorUpSpeed": {
        value: 1,
        writable: true
    },
    "isFloorAlive": {
        value: false,
        writable: true
    },
    "floorType": {   //屬性,0>正常 1>尖刺 2>石頭 3>草
        value: 0,
        writable: true
    }

});

floorArr[5] = {};
Object.defineProperties(floorArr[5], {
    "floorPosX": {
        value: 300,
        writable: true
    },
    "floorPosY": {
        value: 300,
        writable: true
    }, "floorWidth": {
        value: 150,
        writable: true
    },
    "floorHeight": {
        value: 40,
        writable: true
    },
    "floorUpSpeed": {
        value: 1,
        writable: true
    },
    "isFloorAlive": {
        value: false,
        writable: true
    },
    "floorType": {   //屬性,0>正常 1>尖刺 2>石頭 3>草
        value: 0,
        writable: true
    }

});

floorArr[6] = {};
Object.defineProperties(floorArr[6], {
    "floorPosX": {
        value: 300,
        writable: true
    },
    "floorPosY": {
        value: 300,
        writable: true
    }, "floorWidth": {
        value: 150,
        writable: true
    },
    "floorHeight": {
        value: 40,
        writable: true
    },
    "floorUpSpeed": {
        value: 1,
        writable: true
    },
    "isFloorAlive": {
        value: false,
        writable: true
    },
    "floorType": {   //屬性,0>正常 1>尖刺 2>石頭 3>草
        value: 0,
        writable: true
    }

});

floorArr[7] = {};
Object.defineProperties(floorArr[7], {
    "floorPosX": {
        value: 300,
        writable: true
    },
    "floorPosY": {
        value: 300,
        writable: true
    }, "floorWidth": {
        value: 150,
        writable: true
    },
    "floorHeight": {
        value: 40,
        writable: true
    },
    "floorUpSpeed": {
        value: 1,
        writable: true
    },
    "isFloorAlive": {
        value: false,
        writable: true
    },
    "floorType": {   //屬性,0>正常 1>尖刺 2>石頭 3>草
        value: 0,
        writable: true
    }

});

floorArr[8] = {};
Object.defineProperties(floorArr[8], {
    "floorPosX": {
        value: 300,
        writable: true
    },
    "floorPosY": {
        value: 300,
        writable: true
    }, "floorWidth": {
        value: 150,
        writable: true
    },
    "floorHeight": {
        value: 40,
        writable: true
    },
    "floorUpSpeed": {
        value: 1,
        writable: true
    },
    "isFloorAlive": {
        value: false,
        writable: true
    },
    "floorType": {   //屬性,0>正常 1>尖刺 2>石頭 3>草
        value: 0,
        writable: true
    }

});

floorArr[9] = {};
Object.defineProperties(floorArr[9], {
    "floorPosX": {
        value: 300,
        writable: true
    },
    "floorPosY": {
        value: 300,
        writable: true
    }, "floorWidth": {
        value: 150,
        writable: true
    },
    "floorHeight": {
        value: 40,
        writable: true
    },
    "floorUpSpeed": {
        value: 1,
        writable: true
    },
    "isFloorAlive": {
        value: false,
        writable: true
    },
    "floorType": {   //屬性,0>正常 1>尖刺 2>石頭 3>草
        value: 0,
        writable: true
    }

});

floorArr[10] = {};
Object.defineProperties(floorArr[10], {
    "floorPosX": {
        value: 300,
        writable: true
    },
    "floorPosY": {
        value: 300,
        writable: true
    }, "floorWidth": {
        value: 150,
        writable: true
    },
    "floorHeight": {
        value: 40,
        writable: true
    },
    "floorUpSpeed": {
        value: 1,
        writable: true
    },
    "isFloorAlive": {
        value: false,
        writable: true
    },
    "floorType": {   //屬性,0>正常 1>尖刺 2>石頭 3>草
        value: 0,
        writable: true
    }

});

floorArr[11] = {};
Object.defineProperties(floorArr[11], {
    "floorPosX": {
        value: 300,
        writable: true
    },
    "floorPosY": {
        value: 300,
        writable: true
    }, "floorWidth": {
        value: 150,
        writable: true
    },
    "floorHeight": {
        value: 40,
        writable: true
    },
    "floorUpSpeed": {
        value: 1,
        writable: true
    },
    "isFloorAlive": {
        value: false,
        writable: true
    },
    "floorType": {   //屬性,0>正常 1>尖刺 2>石頭 3>草
        value: 0,
        writable: true
    }

});

floorArr[12] = {};
Object.defineProperties(floorArr[12], {
    "floorPosX": {
        value: 300,
        writable: true
    },
    "floorPosY": {
        value: 300,
        writable: true
    }, "floorWidth": {
        value: 150,
        writable: true
    },
    "floorHeight": {
        value: 40,
        writable: true
    },
    "floorUpSpeed": {
        value: 1,
        writable: true
    },
    "isFloorAlive": {
        value: false,
        writable: true
    },
    "floorType": {   //屬性,0>正常 1>尖刺 2>石頭 3>草
        value: 0,
        writable: true
    }

});

//初始地板位置
export var floorPosX = 550;
export var floorPosY = 680;
//地板大小
export var floorWidth = 150;
export var floorHeight = 40;

//上升速度
export var floorUpSpeed={};
Object.defineProperties(floorUpSpeed,{
    "floorUpSpeed":{
        value:3, //2  //4.5
        writable:true
    }
});


/*地板生成邏輯
經過?時間,在某一條y(記得要>dieLine)
決定板子屬性,普通?尖刺?彈簧?石頭?
都用同一種HitBox
隨機決定生成的X位置
碰到某一條Y消失>>回到1
*/



export function drawNormalFloor(ca2d) {
    StartGameLogic(ca2d);
    floorDrawLogic(ca2d)
}

function StartGameLogic(ca2d) {
    if (floorPosY > -50) {  //超過他就不執行了
        ca2d.drawImage(imgIn.floorImgArr[0], floorPosX, floorPosY, floorWidth, floorHeight);
        floorPosY -= floorUpSpeed.floorUpSpeed;
    }

}

//Math.random()有*以後,機率不平均...嗎?

export function floorCreatLogic() {   //1-8到2-1會過遠,斷層 好像是良性BUG,我覺得暫時不用動
    let i = 0;
    let hi = 840;
    if (firstTime.firstTime == false) {
        for (i = 0; i < 8; i++) {
            if (floorArr[i].isFloorAlive == false) {  //避免不要重複生成
                firstTime.firstTime = true;
                floorArr[i].isFloorAlive = true;  //確定生成
                floorArr[i].floorType = Math.floor(Math.random() * 4); //決定地板種類
                floorArr[i].floorPosY = hi;  //決定地板Y軸  
                floorArr[i].floorPosX = Math.floor(Math.random() * 1131);  //決定地板x軸  //天使板應該在這裡+IF
                hi+=100;
            } else if (floorArr[i].isFloorAlive == true &&
                floorArr[i].floorPosY < -50) {
                floorArr[i].floorWidth=150;  //回歸正常大小
                floorArr[i].floorHeight=40;
                floorArr[i].isFloorAlive = false;
            } else {
            }
        }
    } else if(firstTime.firstTime == true) {
        for (i = 0; i < 8; i++) {
            if (floorArr[i].isFloorAlive == false) {  //避免不要重複生成
                floorArr[i].isFloorAlive = true;  //確定生成
                floorArr[i].floorType = Math.floor(Math.random() * 4); //決定地板種類
                floorArr[i].floorPosY = hi;  //決定地板Y軸  //他跑久了會疊起來,怪怪的
                floorArr[i].floorPosX = Math.floor(Math.random() * 1131);  //決定地板x軸
            } else if (floorArr[i].floorPosY < -50) {
                floorArr[i].floorWidth=150;  //回歸正常大小
                floorArr[i].floorHeight=40;
                floorArr[i].isFloorAlive = false;
            } else {
                //console.log(floorCreatNumber);
            }
        }
    }
}


function floorDrawLogic(ca2d) {
    let i = 0;
    for (i = 0; i < 8; i++) {
        ca2d.drawImage(imgIn.floorImgArr[floorArr[i].floorType],
            floorArr[i].floorPosX,
            floorArr[i].floorPosY,
            floorArr[i].floorWidth,
            floorArr[i].floorHeight);
        floorArr[i].floorPosY -= floorUpSpeed.floorUpSpeed;
    }
    ca2d.drawImage(imgIn.topSpikesArr[0],0,0,1280,15);
}





//地板的x+寬=畫布上的寬
//如果玩家的寬,在地板的寬內
//停止下降

//玩家的腳寬度=>(xpos,ypos+100)___________(xpos+100,ypos+100)
//箱子上面寬度=>(floorPosX,floorPosY)------(floorPosX+100,floorPosY)

//當玩家腳的Y座標hitbox=地板上Y座標的hitbox,同時玩家X座標的hitbox小於地板X座標hitbox(在地板範圍內)
//玩家y座標會=地板y座標
//直到離開地板

