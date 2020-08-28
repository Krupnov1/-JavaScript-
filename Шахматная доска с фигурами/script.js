"use strict";

const chessGame = {

    parameters: {
        rows: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        columns: ["o", "a", "b", "c", "d", "e", "f", "g", "h", "o"],
        numberRows: ["", 8, 7, 6, 5, 4, 3, 2, 1, ""],
        numberColumns: ["", "a", "b", "c", "d", "e", "f", "g", "h", ""],

        whiteFigure: ["&#9817;",    //пешка
                      "&#9814;",    //ладья
                      "&#9816;",    //конь
                      "&#9815;",    //слон
                      "&#9813;",    //ферзь
                      "&#9812;",    //король
                      "&#9815;",    //слон
                      "&#9816;",    //конь
                      "&#9814;"     //ладья            
        ],

        blackFigure: ["&#9823;",    //пешка
                      "&#9820;",    //ладья
                      "&#9822;",    //конь
                      "&#9821;",    //слон
                      "&#9819;",    //ферзь
                      "&#9818;",    //король
                      "&#9821;",    //слон
                      "&#9822;",    //конь
                      "&#9820;",    //ладья
       ],
    },

    launch() {
        //генерируем доску
        let boardChess = this.generateBoardСhess();
        //добавляем доску в body
        document.body.innerHTML = boardChess;
        //добавляем нумерацию столбцов и строк
        this.callColRowNumber();
        //добавляем черные и белые фигуры 
        this.figure();
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
     * А так же в первую и последнюю строку поля нумерацию от a до h.
     *  @param {number} side номер колонки и номер строки. 
     * @param {number} position данные для вставки в колонки и строки. 
     */

    number(side, position) {
        for(let i = 0; i < side.length; i++) {
            let span = document.createElement("span");
            span.innerText = position[i];
            side[i].insertAdjacentElement("afterbegin", span);
            //span.classList.add("numbering");
        };
    },

     /**
     * Метод передает параметры и вызывает метод для нумерации колонок 
     */

    callColRowNumber() {
        let colTop = document.querySelectorAll("tr:nth-child(1) td");
        this.number(colTop, this.parameters.numberColumns);
        let colBottom = document.querySelectorAll("tr:nth-child(10) td");
        this.number(colBottom, this.parameters.numberColumns);
        let rowLeft = document.querySelectorAll("tr td:nth-child(1)");
        this.number(rowLeft, this.parameters.numberRows);
        let rowRight = document.querySelectorAll("tr td:nth-child(10)");
        this.number(rowRight, this.parameters.numberRows);
    },

    /**
     * Метод вставляет на доску все фигуры (пешки не вставляет).
     * @param {number} pawns передает данные строки.  
     * @param {number} figure передает о фигуре и ее цвете.
     * @param {string} text добавляет класс в новый тег HTML. 
     */

    addingFigure(pawns, figure, text) {
        for(let i = 0; i < pawns.length; i++) {
            if(pawns[i] !== pawns[0] && pawns[i] !== pawns[9]) {
                let span = document.createElement("span");
                span.innerHTML = figure[i];
                pawns[i].insertAdjacentElement("afterbegin", span);
                span.classList.add(text);   
            };
        };  
    },
    
    /**
     * Метод вставляет на доску только пешки.
     * @param {number} pawns передает данные строки. 
     * @param {number} colorPawn добавляет цвет пешки.
     * @param {string} text добавляет класс в новый тег HTML. 
     */

    addingPawns(pawns, colorPawn, text) {
        for(let i = 0; i < pawns.length; i++) {
            if(pawns[i] !== pawns[0] && pawns[i] !== pawns[9]) {
                let span = document.createElement("span");
                span.innerHTML = colorPawn;
                pawns[i].insertAdjacentElement("afterbegin", span);
                span.classList.add(text);
            }
        }  
    },

    /**
     * Метод передает параметры и вызывает методы, которые вставляют фигуры на доску.
     */

    figure() {
        let pawnsFigure = document.querySelectorAll("tr:nth-child(2) td");
        this.addingFigure(pawnsFigure, this.parameters.blackFigure, "blackFigure");
        let pawns = document.querySelectorAll("tr:nth-child(3) td");
        this.addingPawns(pawns, this.parameters.blackFigure[0], "blackFigure");

        let pawn = document.querySelectorAll("tr:nth-child(8) td");
        this.addingPawns(pawn, this.parameters.whiteFigure[0], "whiteFigure");
        let pawnFigure = document.querySelectorAll("tr:nth-child(9) td");
        this.addingFigure(pawnFigure, this.parameters.whiteFigure, "whiteFigure"); 
    }
};
chessGame.launch()