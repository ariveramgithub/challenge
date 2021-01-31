
const fetch = require('node-fetch');

// Módulo NodeJS utilizado para test unitario
const get = async (number) => {
    try {
        const response = await fetch('http://challenge.local.com/index.php?number=' + number); // Utilizar nombre del host donde se levante la demo
        const json = await response.json();

        for(key in json){
            return json[key];
        }
        
    } catch (error) {
        return error;
    }
}

module.exports = get;