"use strict";

const chessGame = {

    parameters: {
        rows: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        columns: ["o", "a", "b", "c", "d", "e", "f", "g", "h", "o"],

        numberRows: ["", 8, 7, 6, 5, 4, 3, 2, 1, ""],
        numberColumns: ["", "a", "b", "c", "d", "e", "f", "g", "h", ""]  
    },

    launch() {
        //генерируем доску
        let boardChess = this.generateBoardСhess();
        //добавляем доску в body
        document.body.innerHTML = boardChess;
        //добавляем нумерацию строк
        this.rowNumber();
        //добавляем нумерацию столбцов
        this.colNumber()
    },

    /**
     * Метод генерирует поле 10 на 10 (с учетом строк и столбцов для нумерации).
     * @returns {string} html разметка в виде строки.
     */

    generateBoardСhess() {
        let boardChess = "";
        let firstCellRowColor = "white";
        for(let i = 0; i < this.parameters.rows.length; i++) {
            let row = "";
            if(firstCellRowColor == "white") {
                row = this.generateBoardСhessRow(firstCellRowColor, this.parameters.rows[i]);
                firstCellRowColor = "black";
            } else {
                row = this.generateBoardСhessRow(firstCellRowColor, this.parameters.rows[i]);
                firstCellRowColor = "white";
            } 
            boardChess += row;
        }
        return `<table>${boardChess}</table>`;
    },

    /**
     * Метод генерирует тег tr (строку игровой доски) с закрашенными тегами
     * td (ячейкам).
     * @param {string} startColor с какого цвета строка начинается от левого края,
     * "white" или "black".
     * @param {number} numberRow номер строки от 9 до 0, т.к. шахматная доска формируется
     * сверху вниз, поэтому номер начинается с 9.
     * @returns {string} html-разметка, тег tr с оформленными внутри тегами td.
     */

    generateBoardСhessRow(startColor, numberRow) {
        let currentColor = startColor;
        let row = "";
        for(let i = 0; i < this.parameters.columns.length; i++) {
            let column = "";
            if(currentColor === "white") {
                column = this.generateBoardСhessColumn("white", numberRow, this.parameters.columns[i], "column");
                currentColor = "black";
            } else {
                column = this.generateBoardСhessColumn("black", numberRow, this.parameters.columns[i], "column");
                currentColor = "white";
            }
            row += column;
        }
        return `<tr>${row}</tr>`;
    },

    /**
     * Метод генерирует ячейку (тег td) с нужным классом цвета
     * и координатами на поле.
     * @param {string} colorClass класс цвета ячейки, "white" или "black".
     * @param {number} numberRow номер строки игровой доски.
     * @param {string} lettersNumber буква колонки игровой доски.
     *  @param {string} columnClass класс для первой и последней строки (находится нумерация).
     * @returns {string} html-разметка с заполненными атрибутами координат и классом цвета.
     */

    generateBoardСhessColumn(colorClass, numberRow, lettersNumber, columnClass) {
        if(lettersNumber === "o") {
            return `<td data-rownum="${numberRow}" data-colnum="${lettersNumber}" class="${colorClass} ${columnClass}"></td>`;
        }
        return `<td data-rownum="${numberRow}" data-colnum="${lettersNumber}" class="${colorClass}"></td>`;
    },

    /**
     * Метод сверху вставляет в первую и последнюю колонку поля нумерацию от 8 до 1.
     */

    colNumber() {
        let colTop = document.querySelectorAll("tr:nth-child(1) td");
        for(let i = 0; i < colTop.length; i++) {
            let span = document.createElement("span");
            span.innerText = this.parameters.numberColumns[i];
            colTop[i].insertAdjacentElement("afterbegin", span);
        };
        let colBottom = document.querySelectorAll("tr:nth-child(10) td");
        for(let i = 0; i < colBottom.length; i++) {
            let span = document.createElement("span");
            span.innerText = this.parameters.numberColumns[i];
            colBottom[i].insertAdjacentElement("afterbegin", span);
        };    
    },

    /**
     * Метод вставляет в первую и последнюю строку поля нумерацию от a до h.
     */

    rowNumber() {
        let rowLeft = document.querySelectorAll("tr td:nth-child(1)");
        for(let i = 0; i < rowLeft.length; i++) {
            let span = document.createElement("span");
            span.innerText = this.parameters.numberRows[i];
            rowLeft[i].insertAdjacentElement("afterbegin", span);
        };
        let rowRight = document.querySelectorAll("tr td:nth-child(10)");
        for(let i = 0; i < rowRight.length; i++) {
            let span = document.createElement("span");
            span.innerText = this.parameters.numberRows[i];
            rowRight[i].insertAdjacentElement("afterbegin", span);
        };    
    },  
};
chessGame.launch()