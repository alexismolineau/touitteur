class Ajax {

    getContentFromTouiter = url => {
        return new Promise(
            (resolve, reject) => {
                /*
                const xmlHttp = new XMLHttpRequest();
                xmlHttp.responseType = "json";
                xmlHttp.open( "GET", url, true);
                xmlHttp.onload = () => {
                    if(xmlHttp.status === 200){
                        resolve(xmlHttp.response);
                    }else {
                        reject(new Error(xmlHttp.statusText));
                    }
                }
                xmlHttp.error = error => {
                    reject(error);
                }
                xmlHttp.send();*/
                fetch(url)
                    .then(response => resolve(response.json()))
                    .catch(response => reject(response.json()));
            }
        )
    }

    postContentToTouiter = (url, data) => {
        return new Promise(
            (resolve, reject) => {
                /*const xmlHttp = new XMLHttpRequest();
                xmlHttp.open( "POST", url, true);
                xmlHttp.onload = () => {
                    if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
                        if(xmlHttp.response.includes('error')){
                            reject(xmlHttp.response)
                        }else {
                            resolve(xmlHttp.response);
                        }
                    }else {
                        reject(new Error(xmlHttp.statusText));
                    }
                }
                xmlHttp.error = error => {
                    reject(error);
                }
                xmlHttp.send(data);*/
                const options = {
                    method: 'POST',
                    body: data
                }
                fetch(url, options)
                    .then(response => resolve(response.json()))
                    .catch(response => reject(response.json()));
            }
        )
    }

    putContentToTouitter = (url, data) => {
        return new Promise(
            (resolve, reject) => {
                /*const xmlHttp = new XMLHttpRequest();
                xmlHttp.open( "PUT", url, true);
                xmlHttp.onload = () => {
                    if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
                        if(xmlHttp.response.includes('error')){
                            reject(xmlHttp.response)
                        }else {
                            resolve(xmlHttp.response);
                        }
                    }else {
                        reject(new Error(xmlHttp.statusText));
                    }
                }
                xmlHttp.error = error => {
                    reject(error);
                }
                xmlHttp.send(data);*/
                const options = {
                    method: 'PUT',
                    body: data
                }
                fetch(url, options)
                    .then(response => resolve(response.json()))
                    .catch(response => reject(response.json()));
            }
        )
    }

    deleteContentOnTouitter = (url, data) => {
        return new Promise(
            (resolve, reject) => {
                /*const xmlHttp = new XMLHttpRequest();
                xmlHttp.open( "DELETE", url, true);
                xmlHttp.onload = () => {
                    if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
                        if(xmlHttp.response.includes('error')){
                            reject(xmlHttp.response);
                        }else {
                            resolve(xmlHttp.response);
                        }
                    }else {
                        reject(new Error(xmlHttp.statusText));
                    }
                }
                xmlHttp.error = error => {
                    reject(error);
                }
                xmlHttp.send(data);*/
                const options = {
                    method: 'DELETE',
                    body: data
                }
                fetch(url, options)
                    .then(response => resolve(response.json()))
                    .catch(response => reject(response.json()));
            }
        )
    }
    


}


export default Ajax;