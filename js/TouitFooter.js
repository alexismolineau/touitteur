import LikeButtons from './LikeButtons.js';
import Modal from './Modal.js';``
import Utils from './Utils.js';
import Collapse from './Collapse.js';

class TouitFooter {

    likeButtons;
    modal;
    utils;
    collapse;

    constructor() {
        this.likeButtons = new LikeButtons;
        this.modal = new Modal;
        this.utils = new Utils;
        this.collapse = new Collapse;
    }



    createFooter = (id, nbComments) => {
        //card footer
        const cardFooter = document.createElement('div');
        cardFooter.classList.add('card-footer', 'bg-secondary');

        //left buttons container
        const cardButtons = document.createElement('div');
        cardButtons.classList.add('card-buttons');

        //right buttons container
        const commentsContainer = document.createElement('div');
        commentsContainer.classList.add('comments-container');

        //like button
        const likeBtn = document.createElement('button');
        likeBtn.classList.add('btn', 'btn-light', 'text-info');

        //comment button
        const addCommentBtn = document.createElement('button');
        addCommentBtn.classList.add('btn', 'btn-info', 'text-light');
        addCommentBtn.setAttribute('data-bs-toggle', "modal");
        addCommentBtn.setAttribute('data-bs-target', `#new-comment-${id}`);
        addCommentBtn.textContent = "Commenter";

        

        //add comment modal
        const modal = this.modal.createModal(id);


        //add comments button
        const commentsButton = document.createElement('button');
        commentsButton.classList.add('display-comments', 'btn', 'btn-info', 'text-light');
        commentsButton.setAttribute('data-bs-toggle', 'collapse');
        commentsButton.setAttribute('data-bs-target', `#comments-${id}`);
        commentsButton.setAttribute('aria-expanded', 'false');
        commentsButton.setAttribute('aria-controls', `comments-${id}`);
        commentsButton.textContent = `Commentaires (${nbComments})`;
        commentsButton.disabled = !nbComments;
        commentsButton.addEventListener('click', () => {
            const commentContainer = document.querySelector(`#comments-${id}`);
            if(commentContainer.childNodes.length === nbComments){
                return;
            }
            else {
                this.utils.getComments(id.replace('top-', ''))
                .then(
                    comments => comments.comments.map(
                        comment => {
                            this.addCommentToCard(id, this.collapse.createComment(comment.name, comment.comment), nbComments);
                        }
                    )
                )
            }
        });


        //appenning components
        cardButtons.appendChild(likeBtn);
        cardButtons.appendChild(addCommentBtn);
        cardButtons.appendChild(modal);
        commentsContainer.appendChild(commentsButton);
        cardFooter.appendChild(cardButtons);
        cardFooter.appendChild(commentsContainer);

        //calling likeButtons methods
        this.likeButtons.createButtons(likeBtn);
        this.likeButtons.addLikeEvent(likeBtn, id);

        return cardFooter;
    }


    addCommentToCard(id, comment, nbComments){
        const commentContainer = document.querySelector(`#comments-${id}`);
        if(commentContainer.childNodes.length <= nbComments){
            commentContainer.appendChild(comment);
        } 
        else {
            return;
        }
    }


}


export default TouitFooter;
