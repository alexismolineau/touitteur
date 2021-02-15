import Ajax from './Ajax.js';


class Utils {

    ajax;

    constructor() {
        this.ajax = new Ajax;
    }

    updateCommentsNumber = id => {
        const commentButton = document.querySelector(`[aria-controls=comments-${id}]`);
        const nbComment = parseInt(commentButton.textContent.match(/\d+/)[0]);
        commentButton.textContent = `Commentaires (${nbComment + 1})`;
        commentButton.disabled = !(nbComment + 1);
    }

    createLoadingGif = () => {
        const container = document.createElement('div');
        container.classList.add('loading-container', 'text-center');
        const imgLoading = document.createElement('img');
        imgLoading.src = './loading.gif';
        imgLoading.alt = 'chargement...';
        imgLoading.classList.add('m-auto');
        container.appendChild(imgLoading);
        return container;
    }

    topTouit = touit => {
        document.querySelector('.top-touits').appendChild(touit);
    }


    allTouits = async () => {
        return await this.ajax.getContentFromTouiter("http://touiteur.cefim-formation.org/list");
    }

    getComments = async id => {
        return await this.ajax.getContentFromTouiter(`http://touiteur.cefim-formation.org/comments/list?message_id=${id}`);
    }

    getTrendingsTags = async () => {
        return await this.ajax.getContentFromTouiter('http://touiteur.cefim-formation.org/trending');
    }

    getTopLikedTouit = async () => {
        return await this.ajax.getContentFromTouiter('http://touiteur.cefim-formation.org/likes/top');
    }


    sendTouit = async data => {
        return await this.ajax.postContentToTouiter('http://touiteur.cefim-formation.org/send', data);
    }

    sendComment = async data => {
        return await this.ajax.postContentToTouiter('http://touiteur.cefim-formation.org/comments/send', data);
    }

    sendLike = async data => {
        return await this.ajax.putContentToTouitter('http://touiteur.cefim-formation.org/likes/send', data);
    }

    removeLike = async data => {
        return await this.ajax.deleteContentOnTouitter('http://touiteur.cefim-formation.org/likes/remove', data);
    }

}

export default Utils;