 /* par ou Impar
 function parimp(n){
    if(n%2==0){
        return 'Par'
    } else{
        return 'Impar'
    }
    
}
var res = parimp(344)
    console.log(res)

    function soma(n1,n2){
        return n1 + n2
    }
    console.log(soma(2,5)) */

    function fatorial(n){
        var fat = 1
        for(var c = n; c > 1; c--){
            fat=fat*c
        }
        return fat
    }
    console.log(fatorial(6))