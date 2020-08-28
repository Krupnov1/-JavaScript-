"use strict";

let slider = document.querySelector(".slider");

let iconLoad = document.createElement("i");
iconLoad.classList.add("fas", "fa-spinner", "fa-spin");
slider.insertAdjacentElement("afterbegin", iconLoad); 

let leftArrow = document.createElement("i");
leftArrow.classList.add("fas", "fa-chevron-circle-left", "leftArrow");
slider.insertAdjacentElement("beforeend", leftArrow); 

let rightArrow = document.createElement("i");
rightArrow.classList.add("fas", "fa-chevron-circle-right", "rightArrow");
slider.insertAdjacentElement("beforeend", rightArrow); 

window.addEventListener("load", function() {
    iconLoad.style.display = "none";
    sliderImages.start();
});

leftArrow.addEventListener("click", function() {
    sliderImages.nextLeftImage();
});

rightArrow.addEventListener("click", function() {
    sliderImages.nextRightImage();
});



let sliderImages = {
    imageIndex: 0,
    slides: [],

    start() {
        this.slides = document.querySelectorAll(".visible");
        this.showImageWithImageIndex();
    },

    showImageWithImageIndex() {
        this.slides[this.imageIndex].classList.remove("hidden");
    },

    visibleImage() {
        document.querySelector(".visible:not(.hidden)").classList.add("hidden");
    },
    
    nextLeftImage() {
        this.visibleImage();
        if(this.imageIndex == 0) {
            this.imageIndex = this.slides.length - 1;
        } else {
            this.imageIndex--;
        }
        let animSlide = this.slides[this.imageIndex];
        animSlide.classList.add("animate__animated", "animate__slideInRight");
        animSlide.classList.remove("hidden");
        setTimeout(function() {
            animSlide.classList.remove("animate__animated", "animate__slideInRight");
        }, 1000);
    },

    nextRightImage() {
        this.visibleImage();
        if(this.imageIndex == 2) {
            this.imageIndex = this.slides.length - 3;
        } else {
            this.imageIndex++;
        }
        let animSlide = this.slides[this.imageIndex];
        animSlide.classList.add("animate__animated", "animate__slideInLeft");
        animSlide.classList.remove("hidden");
        setTimeout(function() {
            animSlide.classList.remove("animate__animated", "animate__slideInLeft");
        }, 1000);
    }
};