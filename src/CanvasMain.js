import * as Canvas from '../src/Canvas/Canvas';

window.onload = () => {
    const canvas = new Canvas.Context('canvas');
    const layers = new Canvas.Layers(canvas);
    const animation = new Canvas.Animation();

    const imgSrc = [];
    for (let i = 8; i > 0; i--) {
        let src = './img/background/layer_0' + i + '_1920 x 1080.png';
        imgSrc.push(src);
    }

    layers.loadImages(imgSrc, (arrLayers) => {
        document.onmousemove = animateBg;
    });

    let oldX = 0;
    let oldY = 0;
    function animateBg() {
        let x = window.event.clientX;
        let y = window.event.clientY;

        if (oldX > x) {
            layers.parallax('left', .5)
        } else if (oldX < x){
            layers.parallax('right', .5)
        }
        if (oldY > y) {
            layers.parallax('down', .5)
        } else if (oldY < y){
            layers.parallax('up', .5)
        }
        oldX = x;
        oldY = y;
    }


    // const animate = () => {
    //     requestAnimationFrame( animate );
    //
    // };
    //
    // animate();
};