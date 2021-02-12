import Collapse from "./Collapse.js";
import Utils from './Utils.js';

class AddComment {

    formPseudo;
    formComment;
    messageId;
    utils;
    collapse;

    constructor(formPseudo, formComment, messageId) {
        this.formPseudo = formPseudo;
        this.formComment = formComment;
        this.messageId = messageId;
        this.utils = new Utils;
        this.collapse = new Collapse;
    }

    createComment = () => {
        const comment = this.collapse.createComment(this.formPseudo, this.formComment);
        const commentsContainer = document.querySelector(`#comments-${this.messageId}`);
        commentsContainer.appendChild(comment);
    }

    postComment = () => {
        const data = new FormData();
        data.append('name', this.formPseudo);
        data.append('comment', this.formComment);
        data.append('message_id', this.messageId.replace('top-', ''));

        return this.utils.sendComment(data);
    }

}

export default AddComment;