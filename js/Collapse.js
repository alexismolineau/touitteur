class Collapse {

    createComment = (pseudo, content) => {
        const card = document.createElement('div');
        card.classList.add("card");

        const cardBody = document.createElement('div');
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement('div');
        cardTitle.classList.add("card-title", "mb-2", "text-muted", "h5");
        cardTitle.textContent = pseudo;

        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = content;

        card.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);

        return card;
    }

}

export default Collapse;

