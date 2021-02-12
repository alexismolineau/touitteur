class Alert {

    createAlertBox = (classType, content) => {
        const alertContainer = document.createElement('div');
        alertContainer.classList.add('alert', 'alert-new-touit', 'alert-dismissible', 'fade', 'show', classType);
        alertContainer.textContent = content;
        const alertCloseBtn = document.createElement('button');
        alertCloseBtn.setAttribute('type', 'button');
        alertCloseBtn.setAttribute('data-bs-dismiss', 'alert');
        alertCloseBtn.setAttribute('aria-label', 'Close');
        alertCloseBtn.classList.add('btn-close');
        alertContainer.appendChild(alertCloseBtn);

        return alertContainer;
    }

    fadeAlert = alert => {
        let op = 1;  // initial opacity
        const timer = setInterval( () => {
            if (op <= 0.1){
                clearInterval(timer);
                alert.remove();
            }
            alert.style.opacity = op;
            alert.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }

}

export default Alert;
