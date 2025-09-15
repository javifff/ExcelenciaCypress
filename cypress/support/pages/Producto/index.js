const el = require('./elements').ELEMENTS

class Producto {

     accederCategoriaMenJeans() {
          cy.get(el.categoriaMen).click()
          cy.get(el.categoriaJeans).click()
          cy.get(el.listaItems).should('contain', 'Men - Jeans Products')

     }

     agregarPrimerProductoCarritoNveces(cantidad) {
          cy.get(el.listaItems).find(el.elementosListaItems).first().contains('View Product').click()
          cy.url().should('contain', 'product_detail')
          cy.get(el.cantidad).clear().type(cantidad)
          cy.get(el.botonAddToCart).click()
          cy.get(el.mensajeAddedItem).should('contain', 'Your product has been added to cart.')

     }

     verificarCantidadEnCarrito(cantidad) {
          cy.get(el.enlaceIrACart).click()
          cy.url().should('contain','view_cart')
          cy.get(el.cantidadEnCarrito).should('contain.text',cantidad)
     
     }



}

export default Producto