"use strict";

class Start {
  constructor() {
    this.buttonEl = document.getElementById("button");
  }

  /**
     * Метод назначает обработчики на события клика на кнопке "Начать игру/Ваш ответ",
     * а также исходя из данных кнопки, запускает метод игры.
     *  @param {string} game передается для запуска игры.
     */

  startGame(game) {
    this.buttonEl.addEventListener("click", function (event) {
        this.userAnswer = document.getElementById("userAnswer").value;
        if(this.userAnswer === "") {
            game.enteringNumber(event);
        } else {
            game.checkNumber(this.userAnswer);
        };  
    });
  } 
};
