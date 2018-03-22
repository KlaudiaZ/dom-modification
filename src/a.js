console.log('I am a.js!');

// A.1 - Wyświetl zamiast linku, zawartosc znacznika ref

A1 = () => {
    for (let i = 0; i < 6; i++) {
        let link = document.querySelectorAll('a')[i];
        link.innerHTML = link.href;
    }
}

// A.2 - Dodaj na koniec link do Lubelskiej Akademii IT

A2 = () => {
    document.querySelector('section').append(document.createElement("a"));
    const lait = document.querySelectorAll('a')[6];
    lait.innerHTML = "Lait.pl";
    lait.setAttribute("href", "http://www.lait.pl");

}

// A.3 - Ustaw zeby wszystkie linki kierowaly do Lubelskiej Akademii IT

A3 = () => { //not working for some reason. Links change but still redirect to localhost9001
    for (let i = 0; i < 6; i++) {
        let link = document.querySelectorAll('a')[i];
        link.setAttribute("href", "http//:www.lait.pl");
    }
}

// A.4 - Wyswietl tylko oplacone linki

A4 = () => {
    for (let i = 0; i < 6; i++) {
        let link = document.querySelectorAll('a')[i];
        if (link.dataset.paid === "false") {
            link.innerHTML = "";
        }
    }
}

// A.5 - Ustaw zeby link 6 był opłacony i powtórz poprzednie zadania A.4

A5 = (num) => {
    let link = document.querySelectorAll('a')[(num - 1)];
    link.dataset.paid = "true";
}