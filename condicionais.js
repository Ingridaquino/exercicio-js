function maiorNumero(num1 = 5, num2 = 10, num3 = 8){
    if(num1 > num2 && num1 > num3){
        return num1;
    }else if (num2 > num3){
        return num2
    }else{
        return num3
    }
    
}
console.log('O maior é :')
console.log(maiorNumero());