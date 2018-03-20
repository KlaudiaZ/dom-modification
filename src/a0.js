console.log('I am a0.js');

// A0.1 - sklonuj div A 10 razy i ustaw go za C

A0_1 = () => {
    const div_A = document.querySelector('div');
    const div_C = document.querySelectorAll('div')[2];
    for (let i = 0; i < 10; i++) {
        div_C.parentElement.append(div_A.cloneNode(true));
    }
}

// A0.2 - zastąp div B i C na div A

A0_2 = () => {
    const div_A = document.querySelector('div');
    const div_B = document.querySelectorAll('div')[1];
    const div_C = document.querySelectorAll('div')[2];
    div_A.parentElement.replaceChild(div_A.cloneNode(true), div_B);
    div_A.parentElement.replaceChild(div_A.cloneNode(true), div_C);
}

// A0.3 - usuń akapity ze wszystkich div

A0_3 = () => {
    const div_A = document.querySelector('div');
    const div_B = document.querySelectorAll('div')[1];
    const div_C = document.querySelectorAll('div')[2];
    div_A.removeChild(div_A.lastElementChild);
    div_B.removeChild(div_B.lastElementChild);
    div_C.removeChild(div_C.lastElementChild);
}

// A0.4 - przestaw miejscami tak zeby było C, B, A

A0_4 = () => {
    const div_A = document.querySelector('div');
    const div_B = document.querySelectorAll('div')[1];
    const div_C = document.querySelectorAll('div')[2];
    div_C.parentElement.appendChild(div_B);
    div_C.parentElement.appendChild(div_A);
}

// A0.5 - wstaw diva D na koniec

A0_5 = () => {
    const div_A = document.querySelector('div');
    const div_D = document.createElement("div");
    div_D.append(document.createElement("b"));
    div_D.append(document.createElement("p"));
    div_D.firstElementChild.innerText = "D";
    div_D.lastElementChild.innerText = "I am div D";
    div_A.parentElement.appendChild(div_D);
}

// A0.6 - wstaw diva Z przed A

A0_6 = () => {
    const div_A = document.querySelector('div');
    const div_Z = document.createElement("div");
    div_Z.append(document.createElement("b"));
    div_Z.append(document.createElement("p"));
    div_Z.firstElementChild.innerText = "Z";
    div_Z.lastElementChild.innerText = "I am div Z";
    div_A.parentElement.insertBefore(div_Z, div_A);
}

// A0.7 - wstaw diva z napisem Brake pomiędzy A i B oraz B i C

A0_7 = () => {
    const div_A = document.querySelector('div');
    const div_B = document.querySelectorAll('div')[1];
    const div_C = document.querySelectorAll('div')[2];
    const divBreak = document.createElement("div");
    divBreak.append(document.createElement('p'));
    divBreak.firstElementChild.innerText = "break";
    div_A.parentElement.insertBefore(divBreak.cloneNode(divBreak), div_B);
    div_A.parentElement.insertBefore(divBreak.cloneNode(divBreak), div_C);
}

// A0.8 - wstaw do srodka diva B liste <ul></ul>

A0_8 = () => {
    const div_B = document.querySelectorAll('div')[1];
    div_B.append(document.createElement('ul'));
}

// A0.9 - wstaw do diva C sklonowane divy A, B, C

A0_9 = () => {
    const div_A = document.querySelector('div');
    const div_B = document.querySelectorAll('div')[1];
    const div_C = document.querySelectorAll('div')[2];
    div_C.appendChild(div_C.cloneNode(true));
    div_C.appendChild(div_B.cloneNode(true));
    div_C.appendChild(div_A.cloneNode(true));
}