const sumOFOddDigits = (n) =>{
let i = 0;
let sum  = 0;
while(n >= 1){
    let q =Math.floor(n%10);
    if(q%2 !== 0){
        sum = sum + q;
        // console.log(sum,q);
    } n  =( Math.ceil(n/10))-1;
}
console.log("sum---->",sum);
}
console.log(sumOFOddDigits(12345));