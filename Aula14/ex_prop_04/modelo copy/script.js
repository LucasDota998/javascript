function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('tabsel')
    
    if(num.value.length == 0){
        alert('ERRO Digite um número')
    } else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while(c<=10){
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c=c+1    
        }


    }
    
    


}