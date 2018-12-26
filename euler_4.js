/*A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers 
is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.*/

function palindromeProduct(n){
    palindrome = 0
    start1 = ""
    start2 = ""
    for(i=0; i<n; i++){
        start1 += "9"
        start2 += "9"
    }
    number1 = parseInt(start1)
    number2 = parseInt(start2)

    for(i = number1; i>2; i-- ){
        for(y = number2; y>2; y-- ){
            val = i*y
            digits = (""+val).split('').map(Number)
            console.log('Digits: '+digits)

        }
    }

    console.log('Palindrome: '+palindrome)
    return palindrome;
}

module.exports = palindromeProduct