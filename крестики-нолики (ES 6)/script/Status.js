"use strict";

class Status {
    constructor() {
        this.status = "playing";
    }

     /**
     * Проверяем, что игра не закончена.
     * @returns {boolean} Вернет true, статус игры "играем", иначе false.
     */
    isStatusPlaying() {
        return this.status === 'playing';
    }

    /**
     * Останавливаем игру.
     */
    setStatusStopped() {
        this.status = 'stopped';
    }

    /**
     * Меняем крестик на нолик и наоборот.
     */
    togglePhase() {
        this.phase = this.phase === 'X' ? '0' : 'X';
    }

    
    
};