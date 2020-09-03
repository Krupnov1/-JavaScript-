"use strict";

class Field {
   constructor() {
    this.fieldEl = document.getElementById("game");
   }

   /**
     * Вывод ячеек в html.
     */
    renderMap() {
        for (let row = 0; row < 3; row++) {
            const tr = document.createElement('tr');
            this.fieldEl.appendChild(tr);
            for (let col = 0; col < 3; col++) {
                let td = document.createElement('td');
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                tr.appendChild(td);
            }
        }
    }
    
    initEventHandlers(game, status) {
        // Ставим обработчик, при клике на таблицу вызовется функция this.cellClickHandler.
        //this.fieldEl.addEventListener('click', event => Game.cellClickHandler(event));
        this.fieldEl.addEventListener('click', function(event) {
            game.cellClickHandler(event, status);
        });  
    }   
};