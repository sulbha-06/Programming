const isPrime = (n)=>{
    let i = 2;
    
    for(i = 2;i<n;i++){
        if(n%i == 0){
            console.log("is not a prime number",i);
            break;
        }
    }
    if(i== n){
        console.log(n," is a prime numer");
    }
}
console.log(isPrime(3));