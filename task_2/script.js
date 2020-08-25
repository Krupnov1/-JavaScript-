"use strict";

const buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        changingСontents(event);
    });
});
function changingСontents(event) {
    let data = event.target.parentNode;
    let button = data.querySelector("button");
    let prod = data.querySelector(".productName");
    let img = data.querySelector("img");
    
    if(button.innerText === "Подробнее") {
        inputText(img, button, prod);
    } else {
        inputImage(img, button, data);
    }
}
function inputText(img, button, prod) {
    img.style.display = 'none';
    let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque reiciendis ut cupiditate, explicabo accusantium vero vitae sit est illo cumque inventore odio voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque reiciendis ut cupiditate, explicabo accusantium vero vitae sit est illo cumque inventore odio voluptatibus Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
    prod.insertAdjacentHTML('afterend', `<div class="description">${text}</div>`);
    button.innerText = "Отмена";
}

function inputImage(img, button, data) {
    img.style.display = 'block';
    data.querySelector('.description').remove();
    button.innerText = "Подробнее";
}




