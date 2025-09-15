const el = require('./elements').ELEMENTS

class Cabecera {

    clickLoginRegistro() {
        cy.contains('a',' Signup / Login').should('have.attr','href','/login')
        cy.get(el.botonLoginRegistro).click()
        cy.url().should('contain', '/login')
    }

    comprobarExisteBotonLogout() {
        cy.get(el.botonLogout).should('exist')
        cy.get(el.botonLogout).should('contain', 'Logout')
    }

    compruebaUsuarioLogueado(name) {
        cy.get(el.botonLogout).should('exist').and('be.visible')
        cy.get(el.usuarioLogueado).should('contain', name)
 
    }

}

export default Cabecera;