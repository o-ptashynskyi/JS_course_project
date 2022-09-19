function calculateVolumeAndArea() {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
            return "При вычислении произошла ошибка";
        }
    
        let volume = 0,
            area = 0;
    
        volume = length * length * length;
        // length ** 3 - это тоже самое, что и выше или варианты через цикл.
        // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
        area = 6 * (length * length);
    
        return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
    }
    
// Место для второй задачи
function getCoupeNumber(seat) {
    if (seat < 0 || !Number.isInteger(seat) || typeof(seat) != "number") {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }
    if (seat == 0 || seat > 36) {
        return 'Таких мест в вагоне не существует';
    }
    return Math.ceil(seat / 4);
}

function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

function fib(n) {
    const fibo = [];
    if (typeof(n) != "number") {
        return '';
    }
    for (let i = 2; i < n; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo.join(' ');
}
console.log(fib(7));

let a = [1, 2, 3, 4, 5, 6, 7];
var b = new Set(a);
console.log(b.size);