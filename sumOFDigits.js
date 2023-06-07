const sumOfDigits = (n)=>{
    let sum = 0;
    while(n!= 0){
       
        sum = sum + n%10;
        n =  parseInt(n/10);
       
    }
    console.log(sum);
}
console.log(sumOfDigits(15));