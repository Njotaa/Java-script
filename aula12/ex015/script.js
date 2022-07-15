function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO]Verifique novamente os dados e tente novamente!')
    }
    else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    //res.innerHTML = `Idade calculada ${idade}`
}
if (fsex[0].checked){
    gênero = 'Homem'
    if (idade >=0 && idade < 10){
        img.setAttribute('src', 'bebemenino.png')
        //criança
    }
    else if( idade <21){
        img.setAttribute('src','jovemrapaz.png')
        //jovem
    }
    else if(idade < 50){
        img.setAttribute('Src','homem.png')
        //Adulto
    }
    else {
        //idoso
        img.setAttribute('src', 'velho.png')

    }
    
}
else if (fsex[1].checked){
    gênero ='Mulher'
    if (idade >=0 && idade < 10){
        img.setAttribute('src', 'bebemenina.png')
        //criança
    }
    else if( idade <21){
        img.setAttribute('src','jovemmulher.png')
        //jovem
    }
    else if(idade < 50){
        img.setAttribute('Src','mulher.png')
        //Adulta
    }
    else {
        //idosa
        img.setAttribute('src', 'velha.png')

    }

}
res.style.textalign = 'center'
res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
res.appendChild(img)
}
