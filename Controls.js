/**
 * Created by Odin on 03.03.2016.
 */

var right_pressed = false;
var left_pressed = false;

var space_pressed = false;
var should_shoot = false;

document.addEventListener("keydown", key_down_handler, false);
document.addEventListener("keyup", key_up_handler, false);

function key_down_handler(e) {
    if (e.keyCode == 39 || e.keyCode == 68) {
        right_pressed = true;
    }
    else if (e.keyCode == 37 || e.keyCode == 65) {
        left_pressed = true;
    }
    else if (e.keyCode == 32 || e.keyCode == 13) {
        if (!space_pressed) {
            space_pressed = true;
            should_shoot = true;
        }
    }
}

function key_up_handler(e) {
    if (e.keyCode == 39 || e.keyCode == 68) {
        right_pressed = false;
    }
    else if (e.keyCode == 37 || e.keyCode == 65) {
        left_pressed = false;
    }
    else if (e.keyCode == 32 || e.keyCode == 13) {
        space_pressed = false;
    }
}

function get_right_pressed() {
    return right_pressed;
}

function get_left_pressed() {
    return left_pressed;
}

function get_and_falsify_should_shoot() {
    if (should_shoot) {
        should_shoot = false;
        return true;
    }
    return should_shoot;
}