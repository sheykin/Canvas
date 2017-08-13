import * as Canvas from '../src/Canvas/Canvas';

window.onload = () => {
    const canvas = new Canvas.Context('canvas');
    const layers = new Canvas.Layers(canvas);

    const imgSrc = [];
    for(let i = 8; i > 0; i --) {
        let src = './img/background/layer_0'+i+'_1920 x 1080.png';
        imgSrc.push(src);
    }

    layers.loadImages(imgSrc, ()=>{
        layers.parallax();
    });
};