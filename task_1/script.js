"use strict";

let button = document.querySelector("button");
let span = document.querySelector("span");
let wind = document.querySelector(".wind");

button.addEventListener('click', function() {
    wind.classList.remove("hide");
});

span.addEventListener('click', function() { 
    wind.classList.add("hide");
});

