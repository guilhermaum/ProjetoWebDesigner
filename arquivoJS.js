function filtrarEventos() {
    let input = document.getElementById('pesquisa');
    let filter = input.value.toLowerCase();
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        let titulo = cards[i].getElementsByTagName("h3")[0];
        if (titulo) {
            let textoTitulo = titulo.textContent || titulo.innerText;
            if (textoTitulo.toLowerCase().indexOf(filter) > -1) {
                cards[i].style.display = "";
            } else {
                cards[i].style.display = "none";
            }
        }
    }
}

const botaoInscrever = document.getElementById('botaoInscrever');

botaoInscrever.addEventListener('click', function (event) {
    event.preventDefault(); // Impede o envio real do formulário
    alert('Inscrição realizada com sucesso!\nEm breve você receberá novidades no seu e-mail.');
});

function scrollEsquerda() {
    const container = document.querySelector('.cards-container');
    container.scrollBy({ left: -300, behavior: 'smooth' }); // Você pode ajustar -300 se quiser
}

function scrollDireita() {
    const container = document.querySelector('.cards-container');
    container.scrollBy({ left: 300, behavior: 'smooth' }); // Ajuste +300 se quiser
}
