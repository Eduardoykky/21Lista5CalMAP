
function CalcularMedias(nota1, nota2, nota3, media) {
    let mediaAri = 0
    let mediaPonderada = 0
    if (media == "a") {
        mediaAri = (nota1 + nota2 + nota3) / 3
        return mediaAri
    }else{
        mediaPonderada = ((nota1 * 5) + (nota2 * 3) + (nota3 * 2)) / 10
        return mediaPonderada
    }
}
let nota1 = parseInt(prompt("Insira um numero"))
let nota2 = parseInt(prompt("Insira um numero"))
let nota3 = parseInt(prompt("Insira um numero"))
let media = prompt("Deseja realizar um calculo aritimético ou poderada? a ou p")
console.log(CalcularMedias(nota1, nota2, nota3, media))