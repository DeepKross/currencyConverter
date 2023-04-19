import {getSymbols, convert, getLatest} from "./api.js";

let clickHandler = {
    convertCurrency(){
        convert.convertCurrency(document.querySelector('.to').value, document.querySelector('.amount').value);
    },
    getSymbols() {
        getSymbols.getAll();
    },
    getLatest() {
        getLatest.getLatest();
    }
}

document.querySelector('.convert').addEventListener('click', clickHandler.convertCurrency );

document.querySelector('.load-symbols').addEventListener('click', clickHandler.getSymbols );

document.querySelector('.load-rates').addEventListener('click', clickHandler.getLatest);

