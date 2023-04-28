let checkPrime = (num) =>{
    let factor = 0
    for(let i=0;i<=num;i++){
        if(num%i==0){
            factor++
        }
    }
    if(factor==2){
        return true;
    }else{
        return false;
    }
}

let result = checkPrime(17);
console.log(result);

