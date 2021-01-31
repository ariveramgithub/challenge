const get = require('./challenge');

const randomNumber = Math.floor((Math.random() * 100) + 1);

// Test creado a base de JEST
test('Use random number = ' + randomNumber, async () => {

    // Envía valor numérico aleatorio y espera respuesta
    const data = await get(randomNumber);

    // Según las condiciones se espera la salida que corresponda
    if ( randomNumber % 3 === 0 && randomNumber % 5 === 0 ){
        expect(data).toBe('Integraciones');
    }
    else if ( randomNumber % 3 === 0 ){
        expect(data).toBe('Falabella');
    }
    else if ( randomNumber % 5 === 0 ){
        expect(data).toBe('IT');
    }
    else {
        expect(data).toBe(randomNumber.toString());
    }

    // Nos muestra el valor que retorno el servicio
    console.log('Response = ', data);
});