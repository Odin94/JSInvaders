/**
 * Created by Odin on 03.03.2016.
 */

var bullet_width = 7;
var bullet_height = 14;

var bullet_base_speed_y = -4;
var bullet_speed_y = bullet_base_speed_y;

var bullet_color = "#8B51EE";


function spawn_and_get_bullet(x, y) {
    var bullet_x = x - bullet_width / 2;
    var bullet_y = y + bullet_height / 2;

    return {x: bullet_x, y: bullet_y};
}

function draw_bullets(bullets, context) {
    for (var b = bullets.length - 1; b > -1; b--) {
        var bullet = bullets[b];

        context.beginPath();
        context.rect(bullet.x, bullet.y, bullet_width, bullet_height);
        context.fillStyle = bullet_color;
        context.fill();
        context.closePath();
    }
}

function move_bullets(bullets) {
    for (var b = bullets.length - 1; b > -1; b--) {
        bullet = bullets[b];

        bullet.y += bullet_speed_y;
    }
}

function remove_offscreen_bullets(bullets) {
    for (var b = bullets.length - 1; b > -1; b--) {
        var bullet = bullets[b];

        if (bullet.y < (0 - bullet_height)) {
            bullets.splice(b, 1); // this doesn't break the loop because we go from last to first element
        }
    }
}

function set_bullet_speed(stage) {
    bullet_speed_y = bullet_base_speed_y * (1 + stage/8);
}