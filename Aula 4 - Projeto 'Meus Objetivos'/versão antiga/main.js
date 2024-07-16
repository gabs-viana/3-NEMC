const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

function getDataObjetivo(index) {
    const dataStr = textos[index].getAttribute("data-date");
    return new Date(dataStr);
}

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {
    for (let i = 0; i < textos.length; i++) {
        let tempoObjetivo = getDataObjetivo(i);
        let [dias, horas, minutos, segundos] = calculaTempo(tempoObjetivo);

        document.getElementById(`dias${i}`).textContent = dias;
        document.getElementById(`horas${i}`).textContent = horas;
        document.getElementById(`min${i}`).textContent = minutos;
        document.getElementById(`seg${i}`).textContent = segundos;
    }
}

setInterval(atualizaCronometro, 1000);