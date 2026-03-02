// Selecionando os botões (abas)
const btnSimulator = document.querySelector('.nav_simulator');
const btnNegotiate = document.querySelector('.nav_negotiate');

// Selecionando os conteúdos
const contentSimulator = document.querySelector('.content_simulator');
const contentNegotiate = document.querySelector('.content_negotiate');

// Função para alternar as abas
function switchTab(tab) {
    // 1. Remove a classe active de ambos os conteúdos
    contentSimulator.classList.remove('active');
    contentNegotiate.classList.remove('active');

    // 2. Remove a classe active de ambos os botões (estética)
    btnSimulator.classList.remove('active');
    btnNegotiate.classList.remove('active');

    // 3. Ativa a aba selecionada
    if (tab === 'simulator') {
        contentSimulator.classList.add('active');
        btnSimulator.classList.add('active');
    } else {
        contentNegotiate.classList.add('active');
        btnNegotiate.classList.add('active');
    }
}

// Eventos de Clique
btnSimulator.addEventListener('click', () => switchTab('simulator'));
btnNegotiate.addEventListener('click', () => switchTab('negotiate'));

// Inicializa a página mostrando a primeira aba
switchTab('simulator');