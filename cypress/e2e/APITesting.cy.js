import API from '../support/pages/API';

describe('Excelencia Cypress - Testing API', () => {

    // Cenário 4: Registro, verificação e exclusão de 10 usuários por meio de chamadas à API.
    // Boas práticas: Comandos e práticas não estritamente recomendadas, mas com uso de 
    // ferramentas abordadas durante o treinamento (uso de loops ao chamar it() e chamadas a APIs).

    const random4Digits = Math.floor(Math.random() * 9000) + 1000; // Genera un número aleatorio de 4 dígitos
    for (let n = 0; n < 10; n++) {

        it('E4: API CVE: excelenciacypress' + (random4Digits + n) + '@example.com', () => {

            const api = new API();

            console.log('Usuario a registrar: ' + 'excelenciacypress' + (random4Digits + n) + '@example.com');

            api.registraUsuario('excelenciacypress' + (random4Digits + n) + '@example.com', 'fakePassword123');
            api.verificaUsuario('excelenciacypress' + (random4Digits + n) + '@example.com', 'fakePassword123');
            api.eliminaUsuario('excelenciacypress' + (random4Digits + n) + '@example.com', 'fakePassword123');

        })
    }



});