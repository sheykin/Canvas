class Context {
    constructor(name, width, height) {
        this.name = name;
        this.canvas = document.getElementById(name);

        this.canvas.width = width || window.innerWidth;
        this.canvas.height = height || window.innerHeight;

        window.onresize = () => {
            this.canvas.width = width || window.innerWidth;
            this.canvas.height = height || window.innerHeight;
        };

        this.ctx = this.canvas.getContext("2d");
    }
}

export {Context};
