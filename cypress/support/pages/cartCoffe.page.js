const CAFE_REMOVE_BTN = '.delete'
const TOTAL_BTN = '[data-test="checkout"]'
const LIST_ITEM = '.list-item:visible'

class CartPage {

    validarItensNoCarrinho() {

    const cafesSelecionados = Cypress.env('cafesSelecionados') || [];

    cy.get(LIST_ITEM)
      .should('have.length', cafesSelecionados.length);

    cafesSelecionados.forEach((cafe, index) => {

        const precoFormatado = `$${cafe.price}.00`;

        cy.get(LIST_ITEM).eq(index).contains(cafe.name).should('be.visible');

        cy.get(LIST_ITEM).eq(index).contains(precoFormatado).should('be.visible');
    });

}

  removerCafeAleatorio() {

  cy.get(CAFE_REMOVE_BTN).then($botoes => {

    const total = $botoes.length
    const indice = Cypress._.random(1, total - 1)

    cy.get(CAFE_REMOVE_BTN).eq(indice).click()
  })
}

  clicarTotalBtn(){
    cy.get(TOTAL_BTN).should('be.visible').click()
  }

}

export default new CartPage()