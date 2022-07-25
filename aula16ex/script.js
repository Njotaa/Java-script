
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#lista')
let res = document.querySelector('dic#res')
let valores = [] 

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100)
    {return true}
    else{
        return false
    }
}

function flista(n ,1)

    {if(indexOF(Number(n)) != -1)
    {return true}
    else {return false}
}
   function Adicionar()
   if(isnumero(num.value) && !inlista(num.value,valores)){
   valores.push(Number(num.value))
   let item = document.createElement('option')
   item.text =`valor ${num.value} adicionado`
   lista.appendChild(item)
   res.innerHTML =''
}
    else{
        window.alert('Valor Inválido ou já encontrado na lista')
    }
    num.value=''
    num.focus()

    function finalizar(){
       if(valores.lenght == 0){
        window.alert('Adicione valores antes de finalizar')
       }
       else{
        let tot = valores.length
        res.innerHTML=''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
       }
    }
   }
