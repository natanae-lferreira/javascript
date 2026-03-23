function carregar() {
   
    var img = document.getElementById('img')
    var a = new Date()
    var h = a.getHours()
    var p = document.getElementById('hora')
    p.innerText = `Agora são ${h} da`
    if (h < 12) {
        document.body.style.background = '#e2cd9f'
        p.innerText += ' manhã'
    } else if (h < 18) {
        document.body.style.background = '#b9846f'
        img.src = 'imagens/pexels-vinicius-silva-706181917-31835801.jpg'
        p.innerText += ' tarde'
    } else {
        document.body.style.background = '#515154'
        img.src = 'imagens/noite.jpg'
        p.innerText += ' noite '
    }
}
