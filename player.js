function Player(canvas, x, y, type)
{
    var w = 10;
    var h = 30;
    var margin = 30;

    var UpMax = h/2 + margin;
    var DownMax = (canvas.height - margin) - h/2;

    var spd = 3;

    this.getX = function() { return x; }
    this.getY = function() { return y; }
    this.getW = function() { return w; }
    this.getH = function() { return h; }
    this.getType = function() { return type; }

    function up() {
        if((y -= spd) < UpMax) {
            y = UpMax;
        }
    }

    function down() {
        if((y += spd) > DownMax) {
            y = DownMax;
        }
    }

    this.input = function(keys) {
        if(type == "left") {
            if (keys[87 /* w */]) up();
            if (keys[83 /* s */]) down();
        }
        else {
            if (keys[73 /* i */]) up();
            if (keys[75 /* k */]) down();
        }

    }

    this.update = function(keys) {
        this.input(keys);
    }

    this.draw = function(ctx) {
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.moveTo(x + w/2, y - h/2);
        ctx.lineTo(x + w/2, y + h/2);
        ctx.lineTo(x - w/2, y + h/2);
        ctx.lineTo(x - w/2, y - h/2);
        ctx.fill();
    }

}

function isHitQuad(player, x, y)
{
    var w = player.getW();
    var h = player.getH();
    var startX = player.getX() - w/2;
    var startY = player.getY() - h/2;

    if(startX < x && x < (startX + w) &&
       startY < y && y < (startY + h))
    {
        return true;
    }
    return false;
}
