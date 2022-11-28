import * as playermove from "./playermove.js";
import * as hitBox from "./hitBox.js";
import * as floor from "./floor.js";

window.addEventListener("keydown", tKey);

function tKey(e) {
    if (e.keyCode == 84) {
        if (floor.floorUpSpeed.floorUpSpeed == 0) {
            floor.floorUpSpeed.floorUpSpeed = 2;
            
        }else{
            floor.floorUpSpeed.floorUpSpeed = 0
        }

    }
}


