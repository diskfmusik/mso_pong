function Player(canvas, x, y, num)
{
    var ctx = canvas.getContext('2d');

    var w = 10;
    var h = 30;
    var margin = 20;

    var UpMax = (h / 2) + margin;
    var DownMax = (canvas.height - margin) - (h / 2);

    var spd = 3;

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
// left player
        if(num == 0) {
            if (keys[87 /* w */]) {
                up();
            }
            if (keys[83 /* s */]) {
                down();
            }
        }
// right player
        else {
            if (keys[73 /* i */]) {
                up();
            }
            if (keys[75 /* k */]) {
                down();
            }
        }

    }

    this.update = function(keys) {
        this.input(keys);
    }

    this.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.moveTo(x + w / 2, y - h / 2);
        ctx.lineTo(x + w / 2, y + h / 2);
        ctx.lineTo(x - w / 2, y + h / 2);
        ctx.lineTo(x - w / 2, y - h / 2);
        ctx.fill();
    }

}
