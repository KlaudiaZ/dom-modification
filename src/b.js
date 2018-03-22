console.log('I am b.js!');

// B.1 - Wyświetl na stronie sumę goli strzelonych przez graczy

B1 = () => {
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        let goals = document.querySelectorAll('tr')[(i + 1)].lastElementChild;
        sum = sum + parseInt(goals.innerHTML);
    }
    document.querySelector('body').append("The sum of all goals is: " + sum);
}

// B.2 - Zaznacz gracza z największą ilością goli ustawiając tło na zielone

B2 = () => {
    let max = 0;
    for (let i = 0; i < 5; i++) {
        let goals = document.querySelectorAll('tr')[(i + 1)].lastElementChild;
        if (max < parseInt(goals.innerHTML)) {
            max = parseInt(goals.innerHTML);
        }
    }
    for (let i = 0; i < 5; i++) {
        let goals = document.querySelectorAll('tr')[(i + 1)].lastElementChild;
        if (max === parseInt(goals.innerHTML)) {
            document.querySelectorAll('tr')[(i + 1)].setAttribute("style", "background-color: green");
        }
    }
}

// B.3 - Zaznacz gracza z najmniejszą ilością goli ustawiając tło na czerwone

B3 = () => {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < 5; i++) {
        let goals = document.querySelectorAll('tr')[(i + 1)].lastElementChild;
        if (min > parseInt(goals.innerHTML)) {
            min = parseInt(goals.innerHTML);
        }
    }
    for (let i = 0; i < 5; i++) {
        let goals = document.querySelectorAll('tr')[(i + 1)].lastElementChild;
        if (min === parseInt(goals.innerHTML)) {
            document.querySelectorAll('tr')[(i + 1)].setAttribute("style", "background-color: red");
        }
    }
}

// B.4 - Posortuj i wyświetl graczy po id

B4 = (tableLength) => {
    for (let i = 0; i < (tableLength - i); i++) {
        for (let j = 0; j < tableLength; j++) {
            let previousId = document.querySelectorAll('tr')[(j + 1)];
            for (let k = (j + 1); k < tableLength; k++) {
                let nextId = document.querySelectorAll('tr')[(k + 1)];
                if (parseInt(nextId.dataset.id) < parseInt(previousId.dataset.id)) {
                    document.querySelector('tbody').insertBefore(nextId, previousId);
                    break;
                }
            }
        }
    }
}

// B.5 - Posortuj i wyświetl graczy po cenie z data-atrybutu

B5 = (tableLength) => {
    for (let i = 0; i < (tableLength - i); i++) {
        for (let j = 0; j < tableLength; j++) {
            let previousId = document.querySelectorAll('tr')[(j + 1)];
            for (let k = (j + 1); k < tableLength; k++) {
                let nextId = document.querySelectorAll('tr')[(k + 1)];
                if (parseInt(nextId.dataset.price) < parseInt(previousId.dataset.price)) {
                    document.querySelector('tbody').insertBefore(nextId, previousId);
                    break;
                }
            }
        }
    }
}

// B.6 - Usuń graczy z ceną wyższą nić 60 m USD

B6 = () => {
    const table = document.querySelector('tbody');
    for (let i = 0; i < table.childElementCount; i++) {
        let player = document.querySelectorAll('tr')[(i + 1)];
        if (parseInt(player.dataset.price) > 60) {
            table.removeChild(player);
            i--;
        }
    }
}

// B.7 - Dodaj kolumnę zawierającą cenę gracza

B7 = () => {
    document.querySelectorAll('tr')[0].append(document.createElement('th'));
    document.querySelectorAll('tr')[0].lastElementChild.innerHTML = "price";
    for (let i = 0; i < 5; i++) {
        let player = document.querySelectorAll('tr')[(i + 1)];
        player.append(document.createElement('td'));
        player.lastElementChild.innerHTML = player.dataset.price;
    }
}

// B.8 - Zostaw tylko graczy z PSG na liście

B8 = () => {
    const table = document.querySelector('tbody');
    for (let i = 0; i < table.childElementCount; i++) {
        let player = document.querySelectorAll('tr')[(i + 1)];
        if (player.querySelectorAll('td')[2].innerText !== "PSG") {
            table.removeChild(player);
            i--;
        }
    }
}

// B.9 - Dodaj do nazwy klubu ikonkę klubu

B9 = () => {
    for (let i = 0; i < 5; i++) {
        let playerTeam = document.querySelectorAll('tr')[(i + 1)].querySelectorAll('td')[2];
        if (playerTeam.innerHTML === 'Barcelona') {
            playerTeam.append(document.createElement('img'));
            playerTeam.lastElementChild.setAttribute("href", "img/Barcelona.jpg");
            playerTeam.lastElementChild.setAttribute("width", "15px");
            playerTeam.lastElementChild.setAttribute("height", "15px");
        }
        if (playerTeam.innerHTML === 'Beyern') {
            playerTeam.append(document.createElement('img'));
            playerTeam.lastElementChild.setAttribute("href", "img/Bayern.png");
            playerTeam.lastElementChild.setAttribute("width", "15px");
            playerTeam.lastElementChild.setAttribute("height", "15px");
        }
        if (playerTeam.innerHTML === 'PSG') {
            playerTeam.append(document.createElement('img'));
            playerTeam.lastElementChild.setAttribute("href", "img/PSG.png");
            playerTeam.lastElementChild.setAttribute("width", "15px");
            playerTeam.lastElementChild.setAttribute("height", "15px");
        }
        if (playerTeam.innerHTML === 'Real') {
            playerTeam.append(document.createElement('img'));
            playerTeam.lastElementChild.setAttribute("href", "img/Real.png");
            playerTeam.lastElementChild.setAttribute("width", "15px");
            playerTeam.lastElementChild.setAttribute("height", "15px");
        }

    }
}

// B.10 - wyświetl na stronie nazwę najlepszego gracza

B10 = () => {
    let max = 0;
    for (let i = 0; i < 5; i++) {
        let goals = document.querySelectorAll('tr')[(i + 1)].lastElementChild;
        if (max < parseInt(goals.innerHTML)) {
            max = parseInt(goals.innerHTML);
        }
    }
    for (let i = 0; i < 5; i++) {
        let goals = document.querySelectorAll('tr')[(i + 1)].lastElementChild;
        let player = document.querySelectorAll('tr')[(i + 1)].firstElementChild.nextElementSibling.innerHTML;
        if (max === parseInt(goals.innerHTML)) {
            document.querySelector('body').append(document.createElement('p'));
            document.querySelector('body').lastElementChild.innerHTML = "The best player is " + player;
        }
    }
}

// B.11 - wyświetl na stronie nazwę gracza najdroższego

B11 = () => {
    let max = 0;
    for (let i = 0; i < 5; i++) {
        let price = document.querySelectorAll('tr')[(i + 1)].dataset.price;
        if (max < parseInt(price)) {
            max = parseInt(price);
        }
    }
    for (let i = 0; i < 5; i++) {
        let price = document.querySelectorAll('tr')[(i + 1)].dataset.price;
        let player = document.querySelectorAll('tr')[(i + 1)].firstElementChild.nextElementSibling.innerHTML;
        if (max === parseInt(price)) {
            document.querySelector('body').append(document.createElement('p'));
            document.querySelector('body').lastElementChild.innerHTML = "The most expensive player is " + player;
        }
    }
}

// B.12 - wyświetl na stronie gracza z najlepszym stosunkiem ceny do strzelonych bramek

B12 = () => {
    let max = 0;
    for (let i = 0; i < 5; i++) {
        let price = document.querySelectorAll('tr')[(i + 1)].dataset.price;
        let goals = document.querySelectorAll('tr')[(i + 1)].lastElementChild;
        if (max < (parseInt(price) / parseInt(goals.innerHTML))) {
            max = (parseInt(price) / parseInt(goals.innerHTML));
        }
    }
    for (let i = 0; i < 5; i++) {
        let price = document.querySelectorAll('tr')[(i + 1)].dataset.price;
        let goals = document.querySelectorAll('tr')[(i + 1)].lastElementChild;
        let player = document.querySelectorAll('tr')[(i + 1)].firstElementChild.nextElementSibling.innerHTML;
        if (max === (parseInt(price) / parseInt(goals.innerHTML))) {
            document.querySelector('body').append(document.createElement('p'));
            document.querySelector('body').lastElementChild.innerHTML = "The player with the highest price-to-goals ratio is " + player;
        }
    }
}