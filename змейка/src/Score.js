"use strict";

class Score {
    constructor() {
        this.currentEl = document.querySelector(".current");
        this.finalEl = document.querySelector(".final");
    }

    init(settings) {
        this.settings = settings;
    }

    settingCurrent(text) {
        this.currentEl.textContent = text;
    }

    settingFinal(text) {
        this.finalEl.textContent = text;
    }

};
