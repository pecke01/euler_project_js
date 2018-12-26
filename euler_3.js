/*The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?*/

function largestPrimeFactor(n){
    i = 2
    while(i<=n){
        if(n%i==0){
            n /=i
        }
        else{
            i++;
        }
    }
    console.log('Largest Factor: '+i);
    return i
}

module.exports = largestPrimeFactor