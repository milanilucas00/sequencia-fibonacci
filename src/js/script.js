function isFibonacci(num) {
    let a = 0, b = 1, next;

    if (num === a || num === b) return true;

    while (b < num) {
        next = a + b;
        a = b;
        b = next;
    }

    return b === num;
}

document.getElementById('checkButton').addEventListener('click', function () {
    const inputNumber = parseInt(document.getElementById('numberInput').value);

    if (isNaN(inputNumber)) {
        resultMessage.textContent = 'Por favor, insira um número válido'
    } else {
        if (isFibonacci(inputNumber)) {
            resultMessage.textContent = `${inputNumber} pertence a sequência de Fibonacci.`
        } else {
            resultMessage.textContent = `${inputNumber} não pertence a sequência de Fibonacci.`;
        }
    }
});
