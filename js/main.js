import Touit from './Touit.js';
import Utils from './Utils.js';
import Trending from './Trending.js';
import Alert from './Alert.js';
import AddTouit from './AddTouit.js';

const touit = new Touit;
const utils = new Utils;
const trending = new Trending;
const alert = new Alert;

const formTouit = document.querySelector('header form');

formTouit.addEventListener('submit', event => {
    event.preventDefault();
    const formPseudo = document.querySelector('#pseudo').value;
    const formContent = document.querySelector('textarea').value;
    if(formPseudo === '' || formContent === ''){
        const alertError = alert.createAlertBox('alert-danger', 'Les champs pseudo et message sont requis');
        formTouit.prepend(alertError);
        setTimeout(
            () => {
                alert.fadeAlert(alertError);
            }, 5000
        )
        return;
    }
    const addTouit = new AddTouit(formPseudo, formContent);
    addTouit.postTouit()
        .then(
            () => {
                const alertSuccess = alert.createAlertBox('alert-success', 'Votre Touit a bien été envoyé')
                formTouit.prepend(alertSuccess)
                setTimeout(
                    () => {
                        alert.fadeAlert(alertSuccess);
                    }, 5000
                );
            }   
        )
        .catch(
            error => console.error(error)
        )

    return;
});

let ts = 0;

const touitList = () => {
    utils.allTouits(ts)
    .then(
        allTouits => {
            if(allTouits.messages.length > 0){
                ts = allTouits.messages[allTouits.messages.length -1].ts;
            }
            allTouits.messages.map(
                oneTouit => {
                    touit.createContent(oneTouit.name, oneTouit.message, oneTouit.id, oneTouit.comments_count);
                }
            )
        }
    )

}




utils.getTrendingsTags()
        .then(
            trendings => {
                for(const [key, value] of Object.entries(trendings)){
                    if(value > 10) {
                        trending.createTrending(key);
                    }
                }
            }
        );

utils.getTopLikedTouit()
        .then(
            topTouit => {
                const topTouitToCreate = touit.createContent(topTouit.top[0].name, topTouit.top[0].message, `top-${topTouit.top[0].id}`, topTouit.top[0].comments_count);
                utils.topTouit(topTouitToCreate);
            }
        );


const refreshTouits = () => {
    touitList();
    setTimeout(
        () => {
            refreshTouits();
        }, 2000);
}

refreshTouits();


