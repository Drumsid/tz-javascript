// Напишите функцию, которая принимает строку, и превращает ее в хэштег:
//     -строка должна начинаться с символа#; -
// каждое слово должно начинаться с прописной буквы, все остальные буквы строчные; -
// функция должна возвращать false, если длина хэштега превышает 100 символов или равна 0; -
// хэштег может содержать только буквы, цифры и символ#.

// Пример:

// let res = getHashTag('Пример НОВОГО ""хэштега""');
// console.log(res); // #ПримерНовогоХэштега"

let str = 'Прим#ер НОВОГО ""хэштега""';

// console.log(str.split(" "));

let test = '"qweыв34№:ЭЭ"#"';

// console.log(test.replace(/[^# a-zа-яё\d]/gmi, ""));

function ucFirst(str) {
    let lowStr = str.toLowerCase()
    return lowStr[0].toUpperCase() + lowStr.slice(1);
}

function change(str) {
    let arr = str.split(" ");
    let res = [];
    arr.forEach(function (elem) {
        let tmp = elem.replace(/[^ a-zа-яё\d]/gmi, "");
        if (tmp) {
            res.push(ucFirst(tmp));
        }
    });
    let joinStr = res.join('');
    if (joinStr.length === 0 || joinStr.length > 100) {
        return false;
    }
    return "#".concat(joinStr);
}

console.log(change(str));