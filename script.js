function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const exchangeRates = {
        USD: { EUR: 0.85, GBP: 0.75, KES: 110, JPY: 109.49, AUD: 1.34 },
        EUR: { USD: 1.18, GBP: 0.88, KES: 129, JPY: 129.53, AUD: 1.58 },
        GBP: { USD: 1.34, EUR: 1.14, KES: 146, JPY: 149.05, AUD: 1.80 },
        KES: { USD: 0.0091, EUR: 0.0078, GBP: 0.0068, JPY: 1.03, AUD: 0.012 },
        JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0067, KES: 0.97, AUD: 0.012 },
        AUD: { USD: 0.74, EUR: 0.63, GBP: 0.56, KES: 81.50, JPY: 82.19 }
    };

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = `Please enter a valid amount.`;
        return;
    }

    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerText = `Please select different currencies.`;
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    addToHistory(amount, fromCurrency, convertedAmount, toCurrency);
}

function addToHistory(amount, fromCurrency, convertedAmount, toCurrency) {
    const history = document.getElementById('history');
    const historyItem = document.createElement('div');
    historyItem.innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    history.appendChild(historyItem);
}
