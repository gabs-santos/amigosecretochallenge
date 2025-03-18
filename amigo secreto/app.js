let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo.trim() === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    amigos.push(nomeAmigo);
    document.getElementById('amigo').value = '';
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let nomeAmigo = amigos[i];
        let elementoLi = document.createElement('li');
        elementoLi.textContent = nomeAmigo;
        listaAmigos.appendChild(elementoLi);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não há amigos para sortear.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    let elementoLi = document.createElement('li');
    elementoLi.textContent = `O amigo secreto é: ${nomeSorteado}`;
    resultado.appendChild(elementoLi);
}

document.getElementById('botao-adicionar').addEventListener('click', adicionarAmigo);
document.getElementById('botao-sortear').addEventListener('click', sortearAmigo);