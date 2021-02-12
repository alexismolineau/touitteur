import Collapse from './Collapse.js';
import TouitFooter from './TouitFooter.js';
import Utils from './Utils.js';

class Touit {

    touitFooter;
    commentsCollapse;
    utils;

    constructor() {
        this.touitFooter = new TouitFooter;
        this.commentsCollapse = new Collapse;
        this.utils = new Utils;
    }



    getTouitContainer = () => {
        const touitContainer = document.querySelector('.row.text-start.flex-column-reverse.align-items-center');
        return touitContainer;
    }

    createContent = (pseudo, content, id, nbComments) => {
        const card = document.createElement('div');
        card.classList.add('card', 'col-12', 'mb-3');
        card.id = id;
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        const cardTitle = document.createElement('div');
        cardTitle.classList.add('card-title', 'mb-2', 'text-muted', 'h5');
        cardTitle.innerText = pseudo;
        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.innerText = content;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);

        const touitContainer = this.getTouitContainer();

        /* card footer */
        const footer = this.touitFooter.createFooter(id, nbComments);
        card.appendChild(footer);


        /* card comments */
        const commentContainer = document.createElement('div');
        commentContainer.classList.add("collapse");
        commentContainer.id = `comments-${id}`;

        card.appendChild(commentContainer);  


        touitContainer.appendChild(card);

        return card;
    }


}

export default Touit;
