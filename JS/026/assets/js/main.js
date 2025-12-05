const container = document.querySelector("#container");
const form= container.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const peso = Number(e.target.querySelector("#peso").value);
    const altura = Number(e.target.querySelector("#altura").value);

    if (!peso) {
        creatP("Peso inválido", false)
        return
    }
    if (!altura) {
        creatP("Altura inválida", false)
        return
    }

    const imc = calcImc(peso, altura)
    const getNvlImc = nvlImc(imc)
    
    const msg = `Seu IMC é ${imc} (${getNvlImc})`

    creatP(msg, true);
})

function nvlImc (imc) {
    const nivel = ["Abaixo do Peso", "Peso Normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"]

    if (imc >= 40) return nivel[5]
    if (imc >= 35) return nivel[4]
    if (imc >= 30) return nivel[3]
    if (imc >= 25) return nivel[2]
    if (imc >= 18.6) return nivel[1]
    if (imc <= 18.5) return nivel[0]
}

function calcImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2)
}

function creatP (msg, classColor) {
    const resultado = container.querySelector("#resultado");
    resultado.innerHTML = '';
    const paragrafo = document.createElement('p');
    const creat = resultado.appendChild(paragrafo);
    creat.textContent = msg
    if (classColor) {
        paragrafo.classList.add('cGreen')
    } else {
        paragrafo.classList.add('cRed')
    }
}