import API from "../support/pages/API"
import Cabecera from "../support/pages/Cabecera"
import Registro from "../support/pages/Registro"
import Login from "../support/pages/Login"


describe('Excelencia Cypress - Testing pages', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    const api = new API()
    const cabecera = new Cabecera()
    const registro = new Registro()
    const login = new Login()

    const name = Cypress.env().name
    const email = Cypress.env().email
    const password = Cypress.env().password

    it('E1 - Registro exitoso', () => {

        // Cenário 1: Registro bem-sucedido
        // Boas práticas: testes em navegador, comandos personalizados, 
        // Page Object Model (POM), independência dos testes com chamadas à API,
        // uso de variáveis de ambiente e ocultação de dados sensíveis durante 
        // a execução dos testes.


        cabecera.clickLoginRegistro()

        // Elimino el usuario mediante API por si ya existe
        cy.eliminaUsuarioCommand(email, password)

        // Completa formulario de registro, registra al usuario y comprueba mensaje exitoso
        registro.RegistrarUsuario(name, email, password)

        // Comprueba mediante API que el usuario se registró correctamente
        api.verificaUsuario(email, password)

    })


    it('E2 - Login exitoso', () => {

        // Cenário 2: Login bem-sucedido
        // Boas práticas: testes em navegador, comandos personalizados, 
        // Page Object Model (POM), independência dos testes com chamadas à API,
        // uso de variáveis de ambiente e ocultação de dados sensíveis durante 
        // a execução dos testes.


        cabecera.clickLoginRegistro()

        // Creo el usuario mediante API por si no existe
        cy.registraUsuarioCommand(email, password)

        // Login de usuario
        login.LoginUsuario(email, password)
        cabecera.compruebaUsuarioLogueado(name)

    })

})

