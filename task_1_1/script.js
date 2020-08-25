"use strict";

let button = document.querySelector("button");
let span = document.querySelector("span");
let wind = document.querySelector(".wind");

button.addEventListener('click', function() {
    wind.classList.remove("hide", "animate__hinge");
    wind.classList.add("animate__rotateIn");
});

span.addEventListener('click', function() {
    wind.classList.remove("animate__rotateIn");
    wind.classList.add("animate__hinge");
    setTimeout(function() {
        wind.classList.add("hide");
    }, 2000); 
});

