class Animation{
    constructor(){
        window.requestAnimFrame = function(){
            return (
                window.requestAnimationFrame       ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                window.oRequestAnimationFrame      ||
                window.msRequestAnimationFrame     ||
                function(callback){
                    window.setTimeout(callback, 1000 / 60);
                }
            );
        }();
    }

    layerParallax(canvas, layers){
        this.canvas = canvas;
        this.layers = layers;
    }

}

export {Animation}