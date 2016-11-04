function Score(canvas, num)
{
    var score = 0;

    var x;
    function init() {
        if(num == 0) x = 150;
        else         x = canvas.width - 150;
    }
    init();

    this.draw = function(ctx) {
        ctx.font = '40pt Calibri';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        var s = score;
        ctx.fillText(s, x, 50);
    }

}
