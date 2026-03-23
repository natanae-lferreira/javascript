let vetor = []
function gerar() {
    let num = document.getElementById('num')
    let n = Number(num.value)
    if (n != 0 & n <= 100){ 
        vetor.push(n)
        let tab = document.getElementById('seltab')
        let item = document.createElement('option')
        tab.appendChild(item)
        item.text = `Você adicionou o número ${n}`   
    } else {
        window.alert('Insira númeo valido para adicionar')
    }
   
}
function Fim() {
    if (n != 0 ) {
        let res= document.getElementById('res')
        let maior = vetor[0]
        res.innerHTML = `Ao todos temos ${vetor.length} elemntos`
        for(let i = 1;i < vetor.length;i++) {
            if (vetor[i] > maior) {
            maior = vetor[i]
            }
        }
        res.innerHTML += `<br><br>O maior número informado foi ${maior}`
        let menor = vetor[0]
        for(let l = 1;l < vetor.length;l++) {
            if (vetor[l] < menor) {
            menor = vetor[l]
            }
        }
        res.innerHTML += `<br><br>O menor número informado foi ${menor}`
        let soma = vetor.reduce((acumulador , valor) => {return acumulador + valor;}, 0)
        res.innerHTML += `<br><br> soma desses valores resulta em ${soma}`
        res.innerHTML += `<br><br>A media desses valores é ${soma / vetor.length}` 
    } else{
        window.alert('Adicione um número.')
    }
}