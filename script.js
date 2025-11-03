// --- JAVASCRIPT: CÓDIGO FINAL E FUNCIONAL ---

// 1. Elementos que controlam as telas
const musicaCapa = document.getElementById('musica-capa');
const capa = document.getElementById('capa');
const detalhes = document.getElementById('detalhes');
const audio = document.getElementById('musica'); 

// 2. Botões
const btnComMusica = document.getElementById('btnComMusica');
const btnSemMusica = document.getElementById('btnSemMusica');
const btnVerDetalhes = document.getElementById('btnVerDetalhes');

// Links de Ação (TUDO CONFIGURADO)
const whatsappLink = 'https://api.whatsapp.com/send?phone=5521974659992&text=Olá%20gostaria%20de%20confirmar%20a%20minha%20presença%20no%20casamento%20de%20Lorenna%20e%20Maycon';
const mapaLink = 'http://googleusercontent.com/maps.google.com/7'; 
const agendaLink = 'https://calendar.google.com/calendar/r/eventedit?text=Casamento+Lorenna+e+Maycon&dates=20260214T180000/20260214T200000&details=Cerimônia+e+Festa+na+Paróquia+Nossa+Senhora+das+Mercês+-+Ramos&location=Rua+Roberto+Silva,+76+-+Ramos,+Rio+de+Janeiro';
const listaPresentesLink = 'https://casamento-sqam.listaideal.com.br/pt';
const dressCodeLink = 'https://docs.google.com/document/d/1Fx4C0x13hwNOSJZnxlS4YiCFleNprB49TCoXN3sifno/edit?usp=sharing'; 


// --- FUNÇÃO DO CONTADOR REGRESSIVO ---
function countdownTimer() {
    const countdownElement = document.getElementById('countdown');
    const finalDate = countdownElement.getAttribute('data-date');
    const finalTime = new Date(finalDate).getTime();
    
    // Configuração do botão Agendar
    document.getElementById('btnAgendar').addEventListener('click', () => {
        window.open(agendaLink, '_blank');
    });

    const updateCountdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = finalTime - now;
        
        const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distance % (1000 * 60)) / 1000);
        
        countdownElement.innerHTML = dias + " dias " + horas + "h " + minutos + "m " + segundos + "s ";
        
        if (distance < 0) {
            clearInterval(updateCountdown);
            countdownElement.innerHTML = "NOSSO GRANDE DIA CHEGOU!";
        }
    }, 1000); 
}


// --- FUNÇÕES DE TRANSIÇÃO (TELAS) ---
function goToCapa(playMusic) {
    musicaCapa.classList.add('hidden'); 
    capa.classList.remove('hidden');    
    
    if (playMusic) {
        audio.play().catch(error => {
            console.log("Erro ao tocar música:", error);
        });
    }
    countdownTimer();
}

function goToDetalhes() {
    capa.classList.add('hidden');    
    detalhes.classList.remove('hidden'); 
}


// 3. Conecta as ações aos botões
btnComMusica.addEventListener('click', () => {
    goToCapa(true);
});

btnSemMusica.addEventListener('click', () => {
    goToCapa(false);
});

btnVerDetalhes.addEventListener('click', goToDetalhes);

// Botão Dress Code (abre link)
document.getElementById('btnDressCode').addEventListener('click', () => {
    window.open(dressCodeLink, '_blank');
});

// Ação do botão RSVP (WHATSAPP)
document.getElementById('btnRSVP').addEventListener('click', () => {
    window.open(whatsappLink, '_blank');
});

// Ação do botão MAPA
document.getElementById('btnMapa').addEventListener('click', () => {
    window.open(mapaLink, '_blank');
});

// Ação do botão Lista de Presentes
document.getElementById('btnListaPresentes').addEventListener('click', () => {
    window.open(listaPresentesLink, '_blank');
});