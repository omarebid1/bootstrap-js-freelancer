const discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

let frontendCost = 15.3;
let backendCost = 20.5;
let analysisCost = 33.6;

const formattatorePrezzo = new Intl.NumberFormat(navigator.languages[0], {
    style: 'currency',
    currency: 'EUR'
});


