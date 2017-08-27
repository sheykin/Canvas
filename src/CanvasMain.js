import * as Canvas from '../src/Canvas/Canvas';

window.onload = () => {
    const canvas = new Canvas.Context('canvas');
    const layers = new Canvas.Layers(canvas);
    //const animation = new Canvas.Animation();



    function preStart(numOfBgGet, numOfSlidesGet) {

        let numOfBg = numOfBgGet || 'one',
            numOfSlides = numOfSlidesGet || 8;

        const imgSrc = [];
        for (let i = numOfSlides; i > 0; i--) {
            let src = './img/background/'+numOfBg+'/' + i + '.png';
            imgSrc.push(src);
        }

        layers.loadImages(imgSrc, (arrLayers) => {
            const aspectRatio = canvas.canvas.height / arrLayers[0].height;
            const leftShift = (arrLayers.length * arrLayers.length) * 2;
            canvas.canvas.width = arrLayers[0].width * aspectRatio - leftShift;
            layers.parallax('init', 0);
            document.onmousemove = animateBg;
        });
    }

    preStart();

    let oldX = 0;
    let oldY = 0;

    function animateBg() {
        let x = window.event.clientX;
        let y = window.event.clientY;

        const k = .2;

        if (oldX > x) {
            layers.parallax('left', k)
        } else if (oldX < x) {
            layers.parallax('right', k)
        }

        if (oldY > y) {
            layers.parallax('down', k)
        } else if (oldY < y) {
            layers.parallax('up', k)
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

    let li = document.querySelectorAll('.dropdown-menu li');

    li.forEach(function(item, i, arr) {
        item.addEventListener('click', function (element) {
            const bg = element.target.getAttribute('data-bg');
            const numOfSlides = element.target.getAttribute('data-slides');

            preStart(bg, numOfSlides);
        });
    });
};