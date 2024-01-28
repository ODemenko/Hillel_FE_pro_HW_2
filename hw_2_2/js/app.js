let digit = prompt('Enter a five-digit number:');

if (digit === null) {
    alert('Goodbye dude')
} else {
    setDigits();
}

function setDigits() {
    digit = parseInt(digit)
    let digits = [];
    while (digit != 0) {
        digits.push(digit % 10);
        digit = Math.trunc(digit / 10);
    }
    alert(digits.reverse().join(' '));
}




