import API from "../support/pages/API"
import Cabecera from "../support/pages/Cabecera"
import Registro from "../support/pages/Registro"
import Login from "../support/pages/Login"
import Producto from "../support/pages/Producto"


describe('Excelencia Cypress - Testing pages', () => {

    //
    // Cenários 1, 2 e 3. Descrição em cada teste.
    //

    beforeEach(() => {
        cy.visit('/')
    })

    const api = new API()
    const cabecera = new Cabecera()
    const registro = new Registro()
    const login = new Login()
    const producto = new Producto()

    const name = Cypress.env().name
    const email = Cypress.env().email
    const password = Cypress.env().password

    it('E1 - Register User', () => {

        // Cenário 1: Registro bem-sucedido
        //
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


    it('E2 - Login User with correct email and password', () => {

        // Cenário 2: Login bem-sucedido
        //
        // Boas práticas: testes em navegador, comandos personalizados, 
        // Page Object Model (POM), independência dos testes com chamadas à API,
        // uso de variáveis de ambiente e ocultação de dados sensíveis durante 
        // a execução dos testes.


        cabecera.clickLoginRegistro()

        // Elimino y Creo el usuario mediante API 
        cy.eliminaUsuarioCommand(email, password)
        cy.registraUsuarioCommand(email, password)

        // Login de usuario
        login.LoginUsuario(email, password)
        cabecera.compruebaUsuarioLogueado(name)

    })

    it('E3 - Verify Product quantity in Cart', () => {


        // Cenário 3: Verifica a quantidade de produtos no carrinho de compras
        //
        // Boas práticas: testes em navegador, comandos personalizados, 
        // Page Object Model (POM), independência dos testes com chamadas à API,
        // uso de variáveis de ambiente e ocultação de dados sensíveis durante 
        // a execução dos testes.

        const cantidad = 5

        cabecera.clickLoginRegistro()

        // Elimino y Creo el usuario mediante API 
        cy.eliminaUsuarioCommand(email, password)
        cy.registraUsuarioCommand(email, password)

        // Login de usuario
        login.LoginUsuario(email, password)
        cabecera.compruebaUsuarioLogueado(name)

        // Accede a categoria Jeans Men
        producto.accederCategoriaMenJeans()

        // Añade al carrito el primer producto de la categoria N veces
        producto.agregarPrimerProductoCarritoNveces(cantidad)

        // Verifica que la cantidad en el carrito es la que se agregó en la compra
        producto.verificarCantidadEnCarrito(cantidad)




    })
})

