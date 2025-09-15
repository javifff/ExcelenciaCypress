const el = require('./elements').ELEMENTS

class Registro {

    RegistrarUsuario(name, email, password) {
        cy.get(el.campoName).type(name)
        cy.get(el.campoMail).type(email)
        cy.get(el.botonSignup).click()
        cy.url().should('contain', '/signup')
        cy.get(el.campoPassword).type(password, { log: false })
        cy.get(el.campoFirstName).type('Javier')
        cy.get(el.campoLastName).type('Fernandez')
        cy.get(el.campoAddress).type('Corrientes, 123')
        cy.get(el.campoCountry).select(0)
        cy.get(el.campoState).type('CABA')
        cy.get(el.campoCity).type('Buenos Aires')
        cy.get(el.campoZip).type('08080')
        cy.get(el.campoMobileNumber).type('5491112345678')
        cy.get(el.botonCreateAccount).click()
        cy.get(el.mensajeRegistroExitoso).should('contain', 'Account Created!')


    }


}
export default Registro