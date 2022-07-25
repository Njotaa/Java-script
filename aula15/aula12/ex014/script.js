function Carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        //BOM DIA
        img.src = 'fotos/bom dia.png'
        document.body.style.background = '#E7AF58'
    }
    else if (hora >= 12 && hora <= 18)
    {
        img.src = 'fotos/boatarde.png'
        document.body.style.background ='#B37E6D'
    }
    else {
        img.src = 'fotos/boanoite.png'
        document.body.style.background ='#0F1B28'
    }
}