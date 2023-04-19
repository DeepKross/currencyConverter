
let myHeaders = new Headers();
myHeaders.append("apikey", "crQzi7QSkLURfV7I0gOQe4ThqevTVQTz");

export let fetchInterface = {
    url: "https://api.apilayer.com/exchangerates_data",
    requestOptions: {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    }
}

export let getSymbols = {
    __proto__: fetchInterface,
    getAll() {
        fetch(this.url + "/symbols", this.requestOptions)
            .then(response => response.json())
            .then(response => {
                document.querySelector('.all-currency').innerHTML = "";
                //set response to display in div with class 'all-currency'
                for (const key in response.symbols) {
                    //console.log(response.symbols);
                    document.querySelector('.all-currency').innerHTML += `${key}: ${response.symbols[key]}<br>`;
                }
            })
            .catch(error => console.log('error', error));
    }
}

export let convert = {
    __proto__: fetchInterface,
    convertCurrency(to, amount) {
        fetch(this.url + `/convert?from=USD&to=${to}&amount=${amount}`, this.requestOptions)
            .then(response => response.json())
            .then(response => {
                document.querySelector('.result').innerHTML = "";
                //set response to display in div with class 'result'
                document.querySelector('.result').innerHTML += `${amount} USD = ${response.result} ${to}`;
            })
            .catch(error => console.log('error', error));
    }
}

export let getLatest = {
    __proto__: fetchInterface,
    getLatest() {
        fetch(this.url + "/latest?base=USD", this.requestOptions)
            .then(response => response.json())
            .then(response => {
                document.querySelector('.all-currency').innerHTML = "";
                //set response to display in div with class 'latest'
                for (const key in response.rates) {
                    document.querySelector('.all-currency').innerHTML += `${key}: ${response.rates[key]}<br>`;
                }
            })
            .catch(error => console.log('error', error));
    }
}