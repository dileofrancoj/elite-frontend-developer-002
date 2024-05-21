"use strict";
(() => {
    const name = 'Guille';
    const lastname = Math.PI;
    const profession = 'Ing. en sistemas de información';
    let languages = "Typescript";
    const guille = {};
    console.log(languages.toString());
    console.log(name.toUpperCase());
    console.log(name.toLowerCase());
    let age = 30;
    console.log(age.toUpperCase());
    if (typeof lastname === 'string') {
        console.log((lastname).toUpperCase());
    }
    try {
        console.log("guille.name", guille.name);
    }
    catch (e) {
        console.error(e.toLowerCase());
        console.log('error', e);
    }
})();
