"use strict";
(() => {
    const PRICE_PER_UNIT = 100.201231;
    let stock = 20;
    const price = stock * PRICE_PER_UNIT;
    const MINIMUM_STOCK = 30;
    console.log(PRICE_PER_UNIT.toFixed(2));
    stock = Number('55');
    stock = Number('55A');
    console.log('typeof(stock)', typeof (stock));
    if (Number.isNaN(stock)) {
        stock = 0;
    }
    console.log('stock', stock);
})();
