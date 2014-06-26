var start_speed = 4;
var block_width = 100;
var bg_width = 1200; //background
var toLeft = false, 
    toRight = false;
var vx = 2;
var started = false;

window.onload = initWindow;

function initWindow() {
    document.addEventListener("keydown", function(event) {
    switch (event.keyCode) {
        case 37:
            toLeft = true;
            toRight = false;
            break;
        case 39:
            toLeft = false;
            toRight = true;
            break;
        case 32: if(!started){
                move(document.getElementById("ball"));
                started = true;
        }
    }
    });
    document.addEventListener("keyup", function(event) {
        toLeft = false;
        toRight = false;
    });

}



function move(ball) {

    var bottom = 0; // start
    var speed = start_speed;
    var res = 0;

    var margin_left = bg_width - 11*block_width;

    function frame() { // paint
        
        var bottom_distance = Number(ball.style.bottom.replace(/[^\d\.\-]/g, ''));
        var right_distance = Number(ball.style.right.replace(/[^\d\.\-]/g, ''));
        var rg = Number(ball.style.right.replace(/[^\d\.\-]/g, ''));
      
        if (toLeft) {
            rg += vx;
            ball.style.right = rg.toString()+'px';
        }
        if (toRight) {
            rg -= vx;
            // touch left border
            if (right_distance > 0) {
                ball.style.right = rg.toString()+'px';  
            }
            
        }

        time = document.getElementById("time");
        time.innerHTML = ++res + " ms";

        
 
        bottom += speed;
        speed -= 0.098;
        ball.style.bottom = bottom + 'px';

        // touch bottom
        if (bottom_distance - 5 < 0) {
            speed = start_speed;
        }
        

        // finish
        if (right_distance + 50 > bg_width) {
            clearInterval(timer);
            alert("Your time: " + res);
        }
        
        
        // blocks
        if (right_distance > margin_left-45 && right_distance < (margin_left + block_width)) { //block 11
            if (bottom_distance - 5 < 60) {
                speed = start_speed;
            }
        }
        if (right_distance > block_width+margin_left-45 && right_distance < (margin_left + 2*block_width)) { //block 10
            if (bottom_distance - 5 < 120) {
                speed = start_speed;
            }
        }
        if (right_distance > 2*block_width+margin_left-45 && right_distance < (margin_left + 3*block_width)) { //block 9
            if (bottom_distance - 5 < 160) {
                speed = start_speed;
            }
        }
        if (right_distance > 3*block_width+margin_left-45 && right_distance < (margin_left + 4*block_width)) { //block 8
            if (bottom_distance - 5 < 200) {
                speed = start_speed;
            }
        }   
        if (right_distance > 4*block_width+margin_left-45 && right_distance < (margin_left + 5*block_width)) { //block 7
            if (bottom_distance - 5 < 160) {
                speed = start_speed;
            }
        }   
        if (right_distance > 5*block_width+margin_left-45 && right_distance < (margin_left + 6*block_width)) { //block 6
            if (bottom_distance - 5 < 100) {
                speed = start_speed;
            }
        }
        if (right_distance > 6*block_width+margin_left-45 && right_distance < (margin_left + 7*block_width)) { //block 5
            if (bottom_distance - 5 < 160) {
                speed = start_speed;
            }
        } 
        if (right_distance > 7*block_width+margin_left-45 && right_distance < (margin_left + 8*block_width)) { //block 4
            if (bottom_distance - 5 < 220) {
                speed = start_speed;
            }
        }   
        if (right_distance > 8*block_width+margin_left-45 && right_distance < (margin_left + 9*block_width)) { //block 3
            if (bottom_distance - 5 < 280) {
                speed = start_speed;
            }
        } 
        if (right_distance > 9*block_width+margin_left-45 && right_distance < (margin_left + 10*block_width)) { //block 2
            if (bottom_distance - 5 < 340) {
                speed = start_speed;
            }
        } 
        if (right_distance > 10*block_width+margin_left-45 && right_distance < (margin_left + 11*block_width)) { //block 1
            if (bottom_distance - 5 < 400) {
                speed = start_speed;
            }
        } 
    }

    var timer = setInterval(frame, 1) // every 1ms
}



