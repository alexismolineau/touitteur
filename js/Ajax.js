class Ajax {

    getContentFromTouiter = url => {
        return new Promise(
            (resolve, reject) => {
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
                xmlHttp.send();
            }
        )
    }

    postContentToTouiter = (url, data) => {
        return new Promise(
            (resolve, reject) => {
                const xmlHttp = new XMLHttpRequest();
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
                xmlHttp.send(data);
            }
        )
    }

    putContentToTouitter = (url, data) => {
        return new Promise(
            (resolve, reject) => {
                const xmlHttp = new XMLHttpRequest();
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
                xmlHttp.send(data);
            }
        )
    }

    deleteContentOnTouitter = (url, data) => {
        return new Promise(
            (resolve, reject) => {
                const xmlHttp = new XMLHttpRequest();
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
                xmlHttp.send(data);
            }
        )
    }
    


}


export default Ajax;