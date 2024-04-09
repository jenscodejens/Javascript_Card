document.getElementById('cardbutton').addEventListener('click', function () {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
        .then(response => response.json())
        .then(data => {
            if (data.success && data.cards.length > 0) {
                const cardImageUrl = data.cards[0].image;

                const imgElement = document.createElement('img');
                imgElement.setAttribute('src', cardImageUrl);
                imgElement.setAttribute('alt', 'Card Image');
                const container = document.getElementById('imageContainer');
                container.innerHTML = '';

                container.appendChild(imgElement);
            } else {
                console.log('No card found in the response.');
            }
        })
        .catch(err => {
            console.error(err);
        });
});
