var idade = 69
console.log(`você tem ${idade} anos, então seu `)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
        console.log('voto opcional')
} else {
    console.log('voto obrigatorio')
} 