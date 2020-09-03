"use strict";

window.addEventListener("load", () => {
    const field = new Field();
    const status = new Status();
    const game = new Game();
    
    field.renderMap();
    field.initEventHandlers(game, status);   
});