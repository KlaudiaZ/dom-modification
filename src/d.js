import { deepEqual } from "assert";

console.log('I am d.js!');

/*testFunction = () => {
    console.log('test');
}*/

// D.1 - usun h1 ze strony

D1 = () => {
    document.querySelector('div').removeChild(document.querySelector('h1'));
}

// D.2 - utworz liste <ul></ul> zawierajaca nastepujaca tablice elementow:
const products = [
    { name: 'Milk', price: 3.00, available: 3 },
    { name: 'Bread', price: 3.40, available: 5 },
    { name: 'Chocolate', price: 4.00, available: 8 },
    { name: 'Ham', price: 5.00, available: 0 },
    { name: 'Fish', price: 10.00, available: 10 },
    { name: 'Chicken', price: 12.00, available: 0 }
];

const D2 = () => {
    document.querySelector('div').removeChild(document.querySelector('h1'));
    document.querySelector('body').appendChild(document.createElement('ul'));
    products.forEach((product, index) => {
        document.querySelector('ul').appendChild(document.createElement('li'));
        let availability;
        product.available === 0 ? availability = "unavailable" : availability = "available";
        document.querySelectorAll('li')[index].innerHTML = product.name + " costs " + product.price + "PLN and is " + availability + '.';
        document.querySelectorAll('li')[index].setAttribute("data-price", product.price);
        document.querySelectorAll('li')[index].setAttribute("data-available", availability);
    });
}

// kazdy element ma posiadac nastepujaca strukture:
// <li>{name} with {price} PLN is available/unvailable</li>
// kazdy li ma posiadac w data atrybutach - data-price i data-available

// D.3 - stworz pod lista kolejna liste z napisem - towary dostepne

/*const D3 = () => {
    document.querySelector('div').removeChild(document.querySelector('h1'));
    document.querySelector('body').appendChild(document.createElement('ul'));
    products.forEach((product, index) => {
        document.querySelector('ul').appendChild(document.createElement('li'));
        let availability;
        product.available === 0 ? availability = "unavailable" : availability = "available";
        document.querySelectorAll('li')[index].innerHTML = product.name + " costs " + product.price + "PLN and is " + availability + '.';
        document.querySelectorAll('li')[index].setAttribute("data-price", product.price);
        document.querySelectorAll('li')[index].setAttribute("data-available", availability);
    });
    let listDuplicate = document.querySelector('ul').cloneNode(deep);
    document.querySelector('body').appendChild('p');
    document.querySelector('p').innerHTML = "Available products:";
    document.querySelector('body').appendChild(listDuplicate);
    for (let i = 0; i < listDuplicate.childElementCount; i++) {
        if (listDuplicate.querySelectorAll('tr')[i].dataset.available === 0) {
            listDuplicate.removeChild(querySelectorAll('tr'));
            i--;
        }
    }
}*/

// wyswietl tylko dostepne towary

// D.4 - wyswietl produkt o najwiekszej cenie w nowo utworzonym divie o id = 'max-price'

// D.5 utworz tabele z kolumnami - Nazwa, Cena, Dostepnosc i wyswietl w niej produkty