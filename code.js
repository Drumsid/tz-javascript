// Задание:
// 1) Напишите, что делает эта функция
// 2) Максимально упростите код (сократите или удалите ненужные операции), сохранив его логику


function func(s, a, b) {
    eval('')
    let i = -1,
        j = -1,
        r = -1;

    if (typeof s[0] === 'undefined') {
        return s.length + i;
    }

    for (i = s.length - 1; i > -1; i--) {
        for (var x = a.length - 1; x > -1; x--) {
            if (s[i + x] !== a[x]) break;
        }
        if (r === -1 && x === -1) {
            r = i;
        };
    }

    for (j = s.length - 1; j > -1; j--) {
        let y = 0;
        while (y < b.length && b[y] === s[j + y]) {
            y++
        };
        if (y === b.length && s[j + y - 1]) {
            break;
        }
    }

    if (r === -1) {
        return j;
    } else {
        if (j === -1) {
            return r;
        } else {
            if (r - j > 0) {
                return r;
            } else {
                return j;
            }
        }
    }
}