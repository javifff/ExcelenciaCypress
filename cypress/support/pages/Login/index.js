
const el = require('./elements').ELEMENTS

class Login {

    LoginUsuario(email, password) {

        cy.get(el.campoLoginEmail).type(email)
        cy.get(el.campoLoginPassword).type(password, {log: false})
        cy.get(el.botonLogin).click()

    }



}

export default Login;