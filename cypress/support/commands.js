// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


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