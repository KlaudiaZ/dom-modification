console.log('I am c.js!');

// C.1 - posortuj elementy po pupularności (największa na 1 miejscu)

C1 = () => {
    const list = document.querySelector('ul');
    for (let i = 0; i < list.childElementCount - i; i++) {
        for (let j = 0; j < list.childElementCount; j++) {
            let previousElement = list.querySelectorAll('li')[j];
            for (let k = j + 1; k < list.childElementCount; k++) {
                let nextElement = list.querySelectorAll('li')[k];
                if (parseInt(nextElement.dataset.popularity) > parseInt(previousElement.dataset.popularity)) {
                    list.insertBefore(nextElement, previousElement);
                    break;
                }
            }
        }
    }
}

// C.2 - dodaj do nazwy sportu suffix (team) dla sportu druzynowego i (single) dla reszty

C2 = () => {
    const list = document.querySelector('ul');
    for (let i = 0; i < list.childElementCount; i++) {
        let listElement = document.querySelectorAll('li')[i];
        listElement.dataset.teamSport === "true" ?
            (listElement.innerHTML = "(team) " + listElement.innerHTML) :
            (listElement.innerHTML = "(single) " + listElement.innerHTML);
    }
}

// C.3 - pozostaw na ekranie tylko sporty druzynowe

C3 = () => {
    const list = document.querySelector('ul');
    for (let i = 0; i < list.childElementCount; i++) {
        let listElement = document.querySelectorAll('li')[i];
        if (listElement.dataset.teamSport !== "true") {
            list.removeChild(listElement);
            i--;
        }
    }
}

// C.4 - zamiast jednej listy zrob dwie z podzialem na typ sportu - jedna lista druzynowy druga indywidualne

C4 = () => {
    const listTeam = document.querySelectorAll('ul')[0];
    document.querySelector('body').append(document.createElement('ul'));
    const listSingle = document.querySelectorAll('ul')[1];
    for (let i = 0; i < listTeam.childElementCount; i++) {
        let listElement = document.querySelectorAll('li')[i];
        if (listElement.dataset.teamSport !== "true") {
            listSingle.appendChild(listElement);
            i--;
        }
    }
}

// C.5 - stwórz tabelkę zawierającą te same dane

C5 = () => {
    const list = document.querySelector('ul');
    document.querySelector('body').append(document.createElement('table'));
    document.querySelector('table').append(document.createElement('thead'));
    document.querySelector('thead').append(document.createElement('tr'));
    document.querySelector('tr').append(document.createElement('th'));
    document.querySelector('th').innerHTML = "Sport";
    document.querySelector('table').append(document.createElement('tbody'));
    for (let i = 0; i < list.childElementCount; i++) {
        let listElement = document.querySelectorAll('li')[i];
        document.querySelector('tbody').append(document.createElement('tr'));
        document.querySelectorAll('tr')[i + 1].append(document.createElement('td'));
        document.querySelectorAll('td')[i].innerHTML = listElement.innerHTML;
    }
    document.querySelector('body').removeChild(list);
}

// C.6 - dodaj do tabelki z C5 kolumnę z informacją team lub single

C6 = () => {
    const list = document.querySelector('ul');
    document.querySelector('body').append(document.createElement('table'));
    document.querySelector('table').append(document.createElement('thead'));
    document.querySelector('thead').append(document.createElement('tr'));
    document.querySelector('tr').append(document.createElement('th'));
    document.querySelectorAll('th')[0].innerHTML = "Sport";
    document.querySelector('tr').append(document.createElement('th'));
    document.querySelectorAll('th')[1].innerHTML = "Team/Single";
    document.querySelector('table').append(document.createElement('tbody'));
    for (let i = 0; i < list.childElementCount; i++) {
        let listElement = document.querySelectorAll('li')[i];
        document.querySelector('tbody').append(document.createElement('tr'));
        document.querySelectorAll('tr')[i + 1].append(document.createElement('td'));
        document.querySelectorAll('td')[2 * i].innerHTML = listElement.innerHTML;
        document.querySelectorAll('tr')[i + 1].append(document.createElement('td'));
        listElement.dataset.teamSport === "true" ?
            document.querySelectorAll('td')[(2 * i) + 1].innerHTML = "team" :
            document.querySelectorAll('td')[(2 * i) + 1].innerHTML = "single";
    }
    document.querySelector('body').removeChild(list);
}

// C.7 - Wyświetl ile jest sportów, ile sportów drużynowych i ile indywidualnych

C7 = () => {
    const list = document.querySelector('ul');
    document.querySelector('body').append(document.createElement('p'));
    let singleSports = 0;
    let teamSports = 0;
    for (let i = 0; i < list.childElementCount; i++) {
        let listElement = document.querySelectorAll('li')[i];
        listElement.dataset.teamSport === "true" ?
            teamSports++ :
            singleSports++;
    }
    document.querySelector('p').innerHTML = "There are " + list.childElementCount + " sports on the list, " + singleSports + " of which are single sports while " + teamSports + " are team sports.";
}