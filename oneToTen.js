// Problem 1: Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3Or5(number) {
  let sum = 0;
  for (let i = 3; i < number; i++) {
      if(i % 3 === 0 || i % 5 === 0) sum += i;  
  }
  return sum;
}

// console.log(multiplesOf3Or5(1000));


//--------------------------------------------------------------------------------------------
// Problem 2: Even Fibonacci Numbers
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.

function fiboEvenSum(n) {
  const fibboSeries = [0,1]; 

  for(let i = 3; i <= n; i++){
      fibboSeries.push(fibboSeries[fibboSeries.length -1] + fibboSeries[fibboSeries.length - 2])
  }

  return fibboSeries.filter((num) => num % 2 === 0 && num <= n).reduce((acc, num) => acc + num);

  // return fibboSeries;
}

// console.log(fiboEvenSum(8));


//--------------------------------------------------------------------------------------------
// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

function largestPrimeFactor(number) {
  const factors = [];
  for(let i = 1; i <= number; i++){
      if(number % i === 0) factors.push(i);
  }

  const filterPrime = (num) => {
      const primeArr = [1, num];
      for(let i = 2; i < num; i++){
          if(num % i === 0) return false
      }
      return true
  }

  const filterArr = factors.filter((fact) => filterPrime(fact) === true);

  return filterArr[filterArr.length - 1];
}


// console.log(largestPrimeFactor(2));
// console.log(largestPrimeFactor(3));
// console.log(largestPrimeFactor(5));
// console.log(largestPrimeFactor(7));
// console.log(largestPrimeFactor(8));
// console.log(largestPrimeFactor(13195));

// console.log(largestPrimeFactor(600851475143));





//--------------------------------------------------------------------------------------------
// Problem 4: Largest palindrome product
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.
const largestPalindromeProduct = n => {
  let largestPalindromeProduct = 0;

  // function to check if a number is palindrome or not
  const checkPalindromeNum = a => Number(a.toString().split('').reverse().join('')) === a;

  // finding maximum and minimum number made from n number of digits
  const maxNum = (10 ** n) - 1;
  const minNum = 10 ** (n - 1);

  for(let i = maxNum; i >= minNum; i--){
      for(let j = i; j >= minNum; j--){
          let product = i * j;
          checkPalindromeNum(product) && product > largestPalindromeProduct  
          ? 
          largestPalindromeProduct = product : largestPalindromeProduct
          ;
      }
  }

  return largestPalindromeProduct;
}
console.log(largestPalindromeProduct(2));


// const checkPalindromeNum = a => Number(a.toString().split('').reverse().join('')) === a;
// console.log(checkPalindromeNum(9800));
// console.log(checkPalindromeNum(9009));



//--------------------------------------------------------------------------------------------
const smallestMult = (n) => {


}
console.log(smallestMult(10));


//--------------------------------------------------------------------------------------------
// Problem 6: Sum square difference
// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385

// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

const sumSquareDifference = (n) => {

  const numArr = [];
  for(let i = 1; i <= n; i++){
      numArr.push(i);
  }

  const sumOfSquares = num => numArr.reduce(
      (acc, num) => acc + num**2, 0);

  const sumOfNum = num => numArr.reduce(
      (acc, num) => acc + num
  )

  return sumOfNum(n) ** 2 - sumOfSquares(n); 
}

// console.log(sumSquareDifference(10));
// console.log(sumSquareDifference(20));
// console.log(sumSquareDifference(100));





//--------------------------------------------------------------------------------------------
// Problem 7: 10001st prime
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the nth prime number?
function nthPrime(n) {
  const primeArr = [];

  const checkPrime = (num) => {
    if(num < 2) return false; //Numbers less than 2 are not prime numbers
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false; //if a divisor is found, num is not prime
    }
    return true; //if no divisor is found, num is a prime number
  }

  for(let i = 2; primeArr.length < n; i++){
    if(checkPrime(i)) primeArr.push(i);
  }

  return primeArr[n - 1];
}

console.log(nthPrime(6));
console.log(nthPrime(10001));




//--------------------------------------------------------------------------------------------
// Problem 10: Summation of primes
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below n.

function primeSummation(n) {

  let sumPrime = 0;

  // checking if number is prime
  const checkPrime = (num) => {
      if(num < 2) return false; //Numbers less than 2 are not prime numbers
      for(let i = 2; i <= Math.sqrt(num); i++){
          if(num % i === 0) return false; //if a divisor is found, num is not prime
      }
      return true; //if no divisor is found, num is a prime number
  }

  // if number is prime and less than n, add to  sumPrime
  for(let i = 2; i < n; i++){
      if(checkPrime(i)) sumPrime += i;
  }

  return sumPrime;
}

console.log(primeSummation(2000000)); //142913828922