
function exs_5_1() {

    let number = +prompt("Введіть число:");

    switch (number) {
        case 3:
        case 4:
        case 5:    
            alert("Весна");
            break;
        case 6:
        case 7:
        case 8:
            alert("Літо");
            break;
        case 9:
        case 10:
        case 11:
            alert("Осінь");
            break;
        case 12:
        case 1:
        case 2:
            alert("Зима");
            break;
        default:
            alert('Введіть чилсо від 1 до 12.')
            break;
    }
}


// ==============================================================



function exs_5_2() {
    let n = prompt("Введіть число");

    for (let i = 2; i < n ; i++) {
        if( n % i == 0) {
           alert("Це не просте число")
           break;
        }
        else if (i == n - 1) {
            alert("Молодець, це просте число");
        }
    }
}





// ==============================================================

// більше нічого не придумав

function exs_5_3() {

    let a = +prompt("Введіть число №1");
    let b = +prompt("Введіть число №2");
    let c = +prompt("Введіть чилос №3");
    let d = +prompt("Введіть число №4");

    if (a > b && a > c && a > d){
        alert(`Найбільше число: ${a}`);
    } 
    else if (b > a && b > c && b > d){
        alert(`Найбільше число: ${b}`);
    }
    else if(c > a && c > b && c > d){
        alert(`Найбільше число: ${c}`);
    }
    else if (d > a && d > b && d > c){
        alert(`Найбільше число: ${d}`);
    }
}

