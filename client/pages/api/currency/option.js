const currencyOption = [{ "value": "usd", "label": "USD" }, { "value": "aed", "label": "AED" }, { "value": "ars", "label": "ARS" }, { "value": "aud", "label": "AUD" }, { "value": "bdt", "label": "BDT" }, { "value": "bhd", "label": "BHD" }, { "value": "bmd", "label": "BMD" }, { "value": "brl", "label": "BRL" }, { "value": "cad", "label": "CAD" }, { "value": "chf", "label": "CHF" }, { "value": "clp", "label": "CLP" }, { "value": "cny", "label": "CNY" }, { "value": "czk", "label": "CZK" }, { "value": "dkk", "label": "DKK" }, { "value": "eur", "label": "EUR" }, { "value": "gbp", "label": "GBP" }, { "value": "hkd", "label": "HKD" }, { "value": "huf", "label": "HUF" }, { "value": "idr", "label": "IDR" }, { "value": "ils", "label": "ILS" }, { "value": "inr", "label": "INR" }, { "value": "jpy", "label": "JPY" }, { "value": "krw", "label": "KRW" }, { "value": "kwd", "label": "KWD" }, { "value": "lkr", "label": "LKR" }, { "value": "mmk", "label": "MMK" }, { "value": "mxn", "label": "MXN" }, { "value": "myr", "label": "MYR" }, { "value": "ngn", "label": "NGN" }, { "value": "nok", "label": "NOK" }, { "value": "nzd", "label": "NZD" }, { "value": "php", "label": "PHP" }, { "value": "pkr", "label": "PKR" }, { "value": "pln", "label": "PLN" }, { "value": "rub", "label": "RUB" }, { "value": "sar", "label": "SAR" }, { "value": "sek", "label": "SEK" }, { "value": "sgd", "label": "SGD" }, { "value": "thb", "label": "THB" }, { "value": "try", "label": "TRY" }, { "value": "twd", "label": "TWD" }, { "value": "uah", "label": "UAH" }, { "value": "vef", "label": "VEF" }, { "value": "vnd", "label": "VND" }, { "value": "zar", "label": "ZAR" }, { "value": "xdr", "label": "XDR" }, { "value": "xag", "label": "XAG" }, { "value": "xau", "label": "XAU" }, { "value": "bits", "label": "BITS" }, { "value": "sats", "label": "SATS" }]

export default function getCurrencyOption(req, res) {
   res.status(200).json(currencyOption)
}