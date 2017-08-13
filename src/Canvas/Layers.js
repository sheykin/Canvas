var layers;

class Layers {
    constructor(canvas) {
        this.canvas = canvas;

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

    loadImages(arrSrc, callback){
        this.arrSrc = arrSrc;
        this.imgArr = [];

        let _loaded = 0;
        let _arrLength = arrSrc.length;
        for(let i = 0; i < _arrLength; i ++) {
            const img = new Image();
            img.src = arrSrc[i];
            img.onload = () => {
                _loaded++;
                if (_loaded === _arrLength) {
                    callback(this.imgArr);
                }
            };
            this.imgArr.push(img);
        }
    }

    draw (x, y) {
        let _x = x || 0;
        let _y = y || 0;
        for (let i = 0; i < this.imgArr.length; i++){
            const imgWidth = this.imgArr[i].width;
            const imgHeight = this.imgArr[i].height;
            const aspectRatio = this.canvas.canvas.height / imgHeight;
            this.canvas.ctx.drawImage(this.imgArr[i], _x, _y, imgWidth*aspectRatio, imgHeight*aspectRatio);
        }
    }

    parallax() {
        layers = this;
        animation();
    }

}

let _startX = 0;
let _startY = 0;

function animation () {
    layers.draw(_startX++, _startY++);

    window.requestAnimFrame(animation);
}


export {Layers};