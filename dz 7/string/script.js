

function exs_1() {

    let text = prompt("Введіть текст");

    for(let i = 0; i < text.length; i++) {
        if(text[i] == " ") {
            console.log(text[i]);
        }
    }
    
}


// ==============================================================


function exs_2() {

let email = prompt("Введіть email");

if(email.endsWith("@")) {
    alert(`Символ "@" не може завершувати email`);
}
else if(email.startsWith("@")) {
    alert(`Email не може починатись з символа "@"`);
} 
else if (email.indexOf("@") < 1) {
    alert(`Символ "@" відсутній`);
}

}


// ==============================================================


function exs_3() {

    let text = prompt("Введіть текст");

    for(let i = 0; i < text.length; i++) {
        if(text[i] == " html ") {
            console.log(text.search(html));
        }
    }
}


// =============================================================


function exs_4() {
    let url = prompt("Введіть URL адрес");

    if (url.startsWith("https")) {
        alert(url.slice(8));
    }
    else if (url.startsWith("http")) {
        alert(url.slice(7));
    }
    else { 
        alert(url);
    }
}