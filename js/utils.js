// UTILS MODULE
// ============
// these are all thing used in many parts of the codebase that i am unable to
// place in a single category, such as collision detection, shorthands, key detection, etcetera.

const $ = (selectors) => document.querySelector(selectors);

export const on = function(object, listener, fun) {
    object.addEventListener(listener, fun);
}

let keys = {};
export const keyPressed = function(key) {
    if(keys[key] == 1) {
        keys[key] = 2;
        return true;
    }
    return keys[key] == 1;
}

export const keyDown = function(key) {
    return keys[key] > 0;
}

export function listeners() {
    on(document, "keydown", (e) => {
        if(keys[e.key] == 0) {
            keys[e.key] = 1;
        }
    });

    on(document, "keyup", (e) => {
        keys[e.key] = 0;
    });
}

export const canvas = $("#c");
export const ctx = canvas.getContext("2d");
