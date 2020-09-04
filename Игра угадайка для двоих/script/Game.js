"use strict";

class Game {

    tryCount = 0;
    maxTryCount = 10;
    answer = parseInt(Math.random() * 100);
    player = "";

    /**
     * Метод получает элементы кнопки и поля и запускает метод замены текста.
     */

    enteringNumber() {
        this.infoEl = document.getElementById("info");
        this.buttonEl = document.getElementById("button");
        this.textInput("Игрок 1: Введите в поле число", "Ваш ответ"); 
    }

    /**
     * Методу передаются параметры и он вносит изменения в текст кнопки и поля.
     * @param {string} info изменения в текст поля.
     * @param {string} textBut изменения в тексте кнопки.
     */

    textInput(info, textBut) {
        this.infoEl.innerText = info;
        this.buttonEl.innerText = textBut;
        
    }

    /**
     * Метод очищает поле ввода ответа игрока.
     */

    clearText() {
        document.getElementById("userAnswer").value = "";
    }

    /**
     * Метод скрывает кнопку и поле.
     * @param {string} id получает идентификатор элемента.
     */

    hide(id){
        document.getElementById(id).style.display = "none";
    }

    /**
     * Метод получает ответ игрока и проверяет вариант на верность.
     * @param {string} usAnswer ответ игрока.
     */

    checkNumber(usAnswer) {
        this.tryCount++;
        let userAnswer = this.userAnswerNumber(usAnswer);
        this.numberPlayer();
        this.clearText();
        if(userAnswer === this.answer){
            this.textInput("Поздравляю, вы угадали!", "Победа!");
            this.hide("button");
            this.hide("userAnswer");
        } else if(this.tryCount >= this.maxTryCount){
            this.textInput("Вы проиграли\n Правильный ответ: " + this.answer, "Проигрыш");
            this.hide("button");
            this.hide("userAnswer");
        } else if(userAnswer > this.answer){
            this.textInput(`Вы ввели слишком большое число.\n ${this.player}.\n Введите число от 1 до 100`, "Ваш ответ");
        } else if(userAnswer < this.answer){
            this.textInput(`Вы ввели слишком маленькое число.\n ${this.player}.\n Введите число от 1 до 100`, "Ваш ответ");					
        };
    }

    /**
     * Метод получает ответ игрока в строке и возвращает число.
     * @param {string} usAnswer ответ игрока.
     * @returns {number} number - числовое значение
     * 
     */

    userAnswerNumber(usAnswer) {
        let number = usAnswer;
        return parseInt(number); 
    }

    /**
     * Метод проверяет какой игрок 1 или 2 отвечает и возвращает строку.
     *  @returns {string} player - данные для ввода в поле
     */

    numberPlayer() {
        if(this.infoEl.textContent === "Игрок 1: Введите в поле число" || 
            this.infoEl.textContent === "Вы ввели слишком маленькое число. Игрок 1: Введите в поле число. Введите число от 1 до 100" ||
            this.infoEl.textContent === "Вы ввели слишком большое число. Игрок 1: Введите в поле число. Введите число от 1 до 100") {
            this.player = "Игрок 2: Введите в поле число";
        } else {
            this.player = "Игрок 1: Введите в поле число";
        };
        return this.player;
    }   
};