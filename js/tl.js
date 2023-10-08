const events = document.querySelectorAll('.event');
const eventDetails = document.getElementById('event-details');

events.forEach(event => {
    event.addEventListener('click', () => {
        // Limpa o conteúdo anterior
        eventDetails.innerHTML = '';

        // Obtém os detalhes do evento com base no atributo data-year
        const year = event.getAttribute('data-year');
        const eventName = event.querySelector('h2').textContent;
        const eventDescription = event.querySelector('p').textContent;

        // Cria e exibe os detalhes do evento
        const eventInfo = document.createElement('div');
        eventInfo.innerHTML = `<h2>${eventName} (${year})</h2><p>${eventDescription}</p>`;
        eventDetails.appendChild(eventInfo);
    });
});
