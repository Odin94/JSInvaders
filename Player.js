/**
 * Created by Odin on 03.03.2016.
 */

var player_width = 40;
var player_height = 30;

player_speed_x = 6;

var player_y_offset = 5;

var player_color = "#8B51EE";

function spawn_and_get_player(canvas_width, canvas_height) {
    var player_x = canvas_width / 2 - player_width / 2;
    var player_y = canvas_height - player_height - player_y_offset;

    return {x: player_x, y: player_y, health: 3}
}

function draw_player(player, context) {
    context.beginPath();
    context.rect(player.x, player.y, player_width, player_height);
    context.fillStyle = player_color;
    context.fill();
    context.closePath();
}

function move_player(player, right_pressed, left_pressed, canvas_width) {
    if(right_pressed && player.x + player_width < canvas_width) {
        player.x += player_speed_x;
    }
    else if (left_pressed && player.x > 0) {
        player.x -= player_speed_x;
    }
}