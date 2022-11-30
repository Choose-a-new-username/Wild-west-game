// MAIN MODULE
// ===========
// runs the game.

import {
    on,
    listeners,
    keyPressed,
    keyDown,
    ctx,
    canvas
} from "./utils.js";

function loop(){
    main.loop();
    requestAnimationFrame(loop);
};

class Main {
    constructor() {
        this.objects = [];
    }

    start() {
        loop();
    }

    loop() {
        ctx.fillStyle = "red";
        if(keyPressed("a"))
            console.log("e");
    }
}

const main = new Main();
on(document, "DOMContentLoaded", () => {
    listeners();
    main.start();
});
