import * as imgIn from "./imgIn.js";

/*var eee1 = imgIn.enemyEevee;
var eeee =[eee1];
var enn={eee1:imgIn.enemyEevee};*/


export function enemyTest(ca2d) {
    imgIn.enemyEevee.onload = function () {
        //ca2d.drawImage(imgIn.enemyEevee, 30, 30,200,200);
        ca2d.drawImage(imgIn.enemyEevee, 30, 30,200,200);
        
    }
}

export function enemyTest2(ca2d) {
    imgIn.enemyEevee2.onload = function () {
        ca2d.drawImage(imgIn.enemyEevee2, 60, 60,200,200);
        
    }
}

export function enemyTest3(ca2d) {
    imgIn.enemyEevee.onload = function () {
        ca2d.drawImage(imgIn.enemyEevee, 90, 90,200,200);
        
    }
}


