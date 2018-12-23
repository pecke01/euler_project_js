/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000. */

function multiplesOfThreeAndFive(number){
    sum = 0
    if(number<3)
        return sum
        
    for(i=0; i<number; i++){
        if(i%3==0 || i%5==0)
        sum += i
    }
    console.log("Number: "+sum)
    return sum
}
module.exports = multiplesOfThreeAndFive 