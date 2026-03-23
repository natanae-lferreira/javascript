function contar() {
    var bt = document.getElementById('bt')
    var res = document.getElementById('res')
    var ini = document.getElementById('inicio')
    var fm = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var passo = Number(pas.value)
    var inicio = Number(ini.value)
    var fim = Number(fm.value) 
    for (inicio;inicio<=fim;inicio=inicio+passo) {
        res.innerHTML += `${inicio}`
    }
}

