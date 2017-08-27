class Layers {
    constructor(canvas) {
        this.canvas = canvas;
        this.x =
            this.y = 0;
    }

    loadImages(arrSrc, callback) {
        this.arrLayers = [];

        let _loaded = 0;
        let _arrLength = arrSrc.length;
        for (let i = 0; i < _arrLength; ++i) {
            const img = new Image();
            img.src = arrSrc[i];
            img.onload = () => {
                _loaded++;
                if (_loaded === _arrLength) {
                    callback(this.arrLayers);
                }
            };
            this.arrLayers.push(img);
        }
    }

    draw(x, y) {
        this.canvas.ctx.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height);

        this.x = x || window.event.clientX;
        this.y = y || window.event.clientY;
        for (let i = 0; i < this.arrLayers.length; i++) {
            const imgWidth = this.arrLayers[i].width;
            const imgHeight = this.arrLayers[i].height;
            const aspectRatio = this.canvas.canvas.height / imgHeight;
            this.canvas.ctx.drawImage(this.arrLayers[i], this.x, this.y, imgWidth * aspectRatio, imgHeight * aspectRatio);
            console.log(this.canvas.canvas.width, this.canvas.canvas.height);
        }
    }

    parallax(direc, k) {

        this.canvas.ctx.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height);

        const that = this;

        this.leftShift= (this.arrLayers.length * this.arrLayers.length);

        if (direc === 'left') {
            this.x = (this.x - 1*k);
            if (this.x < (0 - this.arrLayers.length) ) this.x = (0 - this.arrLayers.length);
            direction(this.x, this.y);
        } else if (direc === 'right') {
            if (this.x > this.arrLayers.length ) this.x = this.arrLayers.length;
            this.x = (this.x + 1*k);
            direction(this.x, this.y);
        } else if (direc === 'up') {
            this.y = (this.y + 1*k);
            if (this.y > this.arrLayers.length ) this.y = this.arrLayers.length;
            direction(this.x, this.y);
        } else if (direc === 'down') {
            if (this.y < 0 ) this.y = 0 ;
            this.y = (this.y - 1*k);
            direction(this.x, this.y);
        } else {
            direction(this.x, this.y);
        }

        function direction(x, y) {
            for (let i = 0; i < that.arrLayers.length; i++) {
                const imgWidth = that.arrLayers[i].width;
                const imgHeight = that.arrLayers[i].height;
                const aspectRatio = that.canvas.canvas.height / imgHeight;
                that.canvas.ctx.drawImage(that.arrLayers[i], x*i - that.leftShift, y*i, imgWidth * aspectRatio, imgHeight * aspectRatio);
            }
        }
    }
}


export {Layers};