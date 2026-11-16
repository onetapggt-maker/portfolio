// 1. Сумма чисел
function sum() {
    var x = 12;
    var y = 5;
    document.getElementById("sumResult").textContent = x + y;
}

// 1. Работа с числами
function numbers() {
    var result = "";
    result += "<p>parseInt('12px') = " + parseInt("12px") + "</p>";
    result += "<p>parseInt('7.9') = " + parseInt("7.9") + "</p>";
    result += "<p>parseInt('25') = " + parseInt("25") + "</p>";
    result += "<p>parseFloat('3.14') = " + parseFloat("3.14") + "</p>";
    result += "<p>parseFloat('8.5px') = " + parseFloat("8.5px") + "</p>";
    result += "<p>parseFloat('10') = " + parseFloat("10") + "</p>";
    result += "<p>isNaN('abc') = " + isNaN("abc") + "</p>";
    result += "<p>isNaN('15') = " + isNaN("15") + "</p>";
    result += "<p>isNaN('5x') = " + isNaN("5x") + "</p>";
    document.getElementById("numbersResult").innerHTML = result;
}

// 2. Соединение строк
function joinWords() {
    var x = "Привет, ";
    var y = "это JavaScript!";
    var page = window.open("", "_blank");
    page.document.write(x + y);
}

// 3. Проверка возраста
function checkAge() {
    var age = Number(document.getElementById("age").value);
    if (age >= 18) {
        location.href = "about.html";
    } else {
        alert("Вам нет 18-ти лет");
    }
}

// 3. Выбор товара
function chooseFood() {
    var food = document.getElementById("food").value;
    switch (food) {
        case "сэндвич":
            alert("Сэндвич — 100 рублей");
            break;
        case "пудинг":
            alert("Пудинг — 80 рублей");
            break;
        case "слойка":
            alert("Слойка — 60 рублей");
            break;
    }
}

// 4. Циклы
function showLoops() {
    var result = "<h3>while</h3>";
    var i = 1;
    while (i <= 20) {
        result += "Строка " + i + "<br>";
        i++;
    }

    result += "<h3>do while</h3>";
    i = 1;
    do {
        result += "Строка " + i + "<br>";
        i++;
    } while (i <= 20);

    result += "<h3>for</h3>";
    for (i = 1; i <= 20; i++) {
        result += "Строка " + i + "<br>";
    }

    document.getElementById("loopsResult").innerHTML = result;
}
