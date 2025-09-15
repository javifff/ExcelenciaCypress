// Crea usuario mediante API
Cypress.Commands.add('registraUsuarioCommand', (usermail, password) => {
    const urlCreate = '/api/createAccount';
    return cy.request({
            method: 'POST',
            url: urlCreate,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                name: 'excelenciacypress123',
                email: usermail,
                password: password,
                title: 'Sr.',
                birth_date: '15',
                birth_month: '09',
                birth_year: '1985',
                firstname: 'Excelencia',
                lastname: 'Cypress',
                company: 'Tech Solutions SA',
                address1: 'Av. Corrientes 1234',
                address2: 'Piso 5, Oficina 502',
                country: 'Argentina',
                zipcode: '1043',
                state: 'Buenos Aires',
                city: 'CABA',
                mobile_number: '5491112345678'
            }).toString()
        });
});


// Elimina usuario mediante API
Cypress.Commands.add('eliminaUsuarioCommand', (usermail, password) => {
    const urlDelete = '/api/deleteAccount';
    return cy.request({
        method: 'DELETE',
        url: urlDelete,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            email: usermail,
            password: password
        }).toString()
    });
});