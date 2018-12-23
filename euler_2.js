/*Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.*/

function evenFibonnaci(number){
    if(number <=0)
        return 0
    sum = 0
    current = 1
    prev = 0
    while(current<number){
        
        if(current%2==0){
            sum += current;
        }
        temp = current
        current = prev +current
        prev = temp
        
    }
    console.log("Sum: "+sum)
    return sum;
}
module.exports = evenFibonnaci