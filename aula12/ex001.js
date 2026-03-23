var agora = new Date()
var hora = agora.getHours()
console.log(`agora são ${hora} horas.`)
if (hora > 5 && hora <12) {
    console.log(`Bom dia`)
} else if (hora <= 18) {
    console.log('Boa tarde')
} else if (hora <= 24) {
    console.log('Boa noite')
} else {
    console.log('Boa madrugada')
}