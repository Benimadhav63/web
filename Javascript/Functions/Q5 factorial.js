// Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
// recursion. Test the function with different inputs.

function recursion(num){
    if(num==1) return 1
    let result= num * recursion(num-1)
    return result
}
console.log(recursion(6))