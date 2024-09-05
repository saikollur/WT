document.getElementById('factorialBtn').addEventListener('click', function() {
    const number = parseInt(document.getElementById('numberInput').value);
    if (isNaN(number) || number < 0) {
        document.getElementById('result').innerText = "Please enter a positive number.";
        return;
    }
    const result = factorialize(number);
    document.getElementById('result').innerText = `Factorial of ${number} is ${result}`;
});

function factorialize(num) {
    if (num === 0) return 1;
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

document.getElementById('fibonacciBtn').addEventListener('click', function() {
    const number = parseInt(document.getElementById('numberInput').value);
    if(isNaN(number) || number < 0){
        document.getElementById('result').innerText = "Enter positive Number.";
        return;
    }
    const result = fibonacci(number);
    document.getElementById('result').innerText = `Fibonacci series upto ${number} is ${result}`;
});

function fibonacci(num) {
    if (num === 0) return [0];
    if (num === 1) return [0, 1];
    
    const series = [0, 1];
    for (let i = 2; i <= num; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}

document.getElementById('primeBtn').addEventListener('click', function(){
    const number = parseInt(document.getElementById('numberInput').value);
    if (isNaN(number) || number < 2) {
        document.getElementById('result').innerText = "Please enter a number greater than 1.";
        return;
    }
    const result = findPrimes(number);
    document.getElementById('result').innerText = `Prime numbers up to ${number} are: ${result.join(', ')}`
})

function findPrimes(num) {
    const primes = [];
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
document.getElementById('palindromeBtn').addEventListener('click', function(){
    const number = parseInt(document.getElementById('numberInput').value);
    if (isNaN(number)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
    }
    const result = isPalindrome(number);
    document.getElementById('result').innerText = `${number} is ${result ? '' : 'not '}a palindrome.`
})

function isPalindrome(num) {
    const numStr = num.toString();
    let left = 0;
    let right = numStr.length - 1;
    while (left < right) {
        if (numStr[left] !== numStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}