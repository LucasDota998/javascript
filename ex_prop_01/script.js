function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 8


if(hora >= 0 && hora < 12){
    //bom dia
    img.src = 'fotos_exjs/Foto_manhap.png'
    msg.innerHTML = `Bom dia, agora são ${hora} horas`
    document.body.style.background = '#a4a8cb'
} else if(hora>=12 && hora < 18){
    //boa tarde
    img.src = 'fotos_exjs/foto_tardep.png'
    msg.innerHTML = `Boa tarde, agora são ${hora} horas`
    document.body.style.background = '#f0520c'
} else{
    //boa noite
    img.src = 'fotos_exjs/Foto_noitep.png'
    msg.innerHTML = `Boa noite, agora são ${hora} horas.`
    document.body.style.background = '#374d53'
}

}