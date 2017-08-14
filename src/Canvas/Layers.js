
class Layers {
    constructor() {
    }

    loadImages(arrSrc, callback){
        this.arrSrc = arrSrc;
        this.imgArr = [];

        let _loaded = 0;
        let _arrLength = arrSrc.length;
        for(let i = 0; i < _arrLength; ++i) {
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

    draw (canvas, x, y) {
        this.canvas = canvas;
        let _x = x || 0;
        let _y = y || 0;
        for (let i = 0; i < this.imgArr.length; i++){
            const imgWidth = this.imgArr[i].width;
            const imgHeight = this.imgArr[i].height;
            const aspectRatio = this.canvas.canvas.height / imgHeight;
            this.canvas.ctx.drawImage(this.imgArr[i], _x, _y, imgWidth*aspectRatio, imgHeight*aspectRatio);
        }
    }
}


export {Layers};