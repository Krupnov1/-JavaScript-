"use strict";

let buttons = document.querySelectorAll(".butSection");
buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        extractingAttributes(event);
    });
});

function extractingAttributes(event) {
    let id = event.target.dataset.id;
    let name = event.target.dataset.name;
    let price = event.target.dataset.price;
    basket.addProduct({ id: id, name: name, price: price });
};

let button = document.querySelector(".butHead");
button.addEventListener("click", function () {
    let list = document.querySelector(".blockNone");
    if(list !== null) {
        list.classList.remove("blockNone"); 
    } else {
        let lists = document.querySelector(".basketBlock");
        lists.classList.add("blockNone");
    }   
});

let basket = {
    products: {},

    addProduct(product) {
        this.addProductToBasket(product);
        this.addProductToList(product);
        this.totalSum();
        this.addRemoveListeners();
    },

    removeProductFromBasket(id) {
        let countTd = document.querySelector(`.productList[data-id="${id}"]`);
        if (countTd.textContent == 1) {
            countTd.parentNode.remove();
        } else {
            countTd.textContent--;
        }
    },

    removeProductFromObject(id) {
        if (this.products[id].number == 1) {
            delete this.products[id];
        } else {
            this.products[id].number--;
        }
    },

    removeProduct(event) {
        let id = event.target.dataset.id;
        this.removeProductFromObject(id);
        this.removeProductFromBasket(id);
    },

    removeProductListener(event) {
        basket.removeProduct(event);
        basket.totalSum();
    },

    addRemoveListeners() {
        let position = document.querySelectorAll(".productRemove");
        for (let i = 0; i < position.length; i++) {
            position[i].addEventListener("click", this.removeProductListener);
        }
    },

    totalSum() {
        document.querySelector(".total").textContent = this.getTotalSum();
    },

    getTotalSum() {
        let sum = 0;
        for (let key in this.products) {
            sum += this.products[key].price * this.products[key].number;
        }
        return sum;
    },

    addProductToList(product) {
        let productAvailability = document.querySelector(`.productList[data-id="${product.id}"]`);
        if (productAvailability) {
            productAvailability.textContent++;
            return;
        }
        let productRow = `
            <tr>
                <th>${product.id}</th>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td class="productList" data-id="${product.id}">1</td>
                <td><i class="fas fa-trash-alt productRemove" data-id="${product.id}"></i></td>
            </tr>
        `;
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML("beforeend", productRow);
    },

    addProductToBasket(product) {
        if (this.products[product.id] == undefined) {
            this.products[product.id] = {
                name: product.name,
                price: product.price,
                number: 1
            };
        } else {
            this.products[product.id].number++;
        };
    } 

};