function Contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtfi')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.lenght ==0){
        window.alert('[Erro] Faltam dados!')
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo Invalido! Considerando o PASSO 1')
        }
        if(i < f){ //contagem crescente
            for(let c = i; c <= f; c += p) 
            res.innerHTML += `${c} \u{1FAE0}`
        }
        else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1FAE0}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
       
        
    }

}