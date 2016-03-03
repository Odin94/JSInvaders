/**
 * Created by Odin on 02.03.2016.
 */

var invader_row_count = 4;
var invader_column_count = 7;

var invader_offset_x = 20;
var invader_offset_y = 20;
var invader_distance = 15;

var invader_width = 40;
var invader_height = 20;

var invader_base_speed_x = 2;
var invader_speed_x = invader_base_speed_x;
var invader_jump_y = 30;

var invader_color = "#8B51EE";


function get_invaders() {
    var invaders = [];
    for (var i = 0; i < invader_column_count; i++) {
        invaders[i] = [];
        for (var j = 0; j < invader_row_count; j++) {
            var invader_x = (i * (invader_width + invader_distance)) + invader_offset_x;
            var invader_y = (j * (invader_height + invader_distance)) + invader_offset_y;

            invaders[i][j] = {x: invader_x, y: invader_y, alive: true};
        }
    }
    return invaders;
}

function check_invader_bullet_collision(invaders, bullets) {
    for (var i = 0; i < invader_column_count; i++) {
        for (var j = 0; j < invader_row_count; j++) {
            var invader = invaders[i][j];
            if (!invader.alive) {
                continue;
            }

            for (var b = bullets.length - 1; b > -1; b--) {
                var bullet = bullets[b];

                if (bullet.x > invader.x && bullet.x < invader.x + invader_width && bullet.y > invader.y && bullet.y < invader.y + invader_height) {
                    bullets.splice(b, 1); // this doesn't break the loop because we go from last to first element
                    invader.alive = false;
                }
            }
        }
    }
}

function draw_invaders(invaders, context) {
    for (var i = 0; i < invader_column_count; i++) {
        for (var j = 0; j < invader_row_count; j++) {
            var invader = invaders[i][j];
            if (!invader.alive) {
                continue;
            }

            context.beginPath();
            context.rect(invader.x, invader.y, invader_width, invader_height);
            context.fillStyle = invader_color;
            context.fill();
            context.closePath();
        }
    }
}

function move_invaders(invaders, canvas_width) {
    var need_to_turn = invaders_need_to_turn(invaders, canvas_width);

    if (need_to_turn) {
        invader_speed_x = -invader_speed_x;
    }

    for (var i = 0; i < invader_column_count; i++) {
        for (var j = 0; j < invader_row_count; j++) {
            var invader = invaders[i][j];

            if (need_to_turn) {
                invader.y += invader_jump_y;

                invader.x += invader_speed_x;
            }
            else {
                invader.x += invader_speed_x;
            }
        }
    }
}

function invaders_need_to_turn(invaders, canvas_width) {
    return invaders[invader_column_count - 1][0].x + invader_width > canvas_width - invader_offset_x
        || invaders[0][0].x < 0 + invader_offset_y;
}

function set_invader_speed(stage) {
    invader_speed_x = invader_base_speed_x * (1 + stage/2);
}