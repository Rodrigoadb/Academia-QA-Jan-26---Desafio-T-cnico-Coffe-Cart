import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
import SelectCoffe from "../pages/selectCoffeCart.page"
import Cart from "../pages/navBar.page"
import CartPage from "../pages/cartCoffe.page"
import PayPage from '../pages/pay.page'
 
Before(() => {
  cy.buscarListaDeCafes()
})
 
Given('que acesso o Coffee Cart', () =>{
    cy.visit('/')
 
});

And('seleciono três cafés diferentes',() =>{
    SelectCoffe.SelecionaCoffe()
})

And('aceito a oferta promocional',() =>{
    SelectCoffe.VerificaModalOferta()
    SelectCoffe.AceitaOferta()
})

And('acesso o carrinho de compras',() =>{
    Cart.acessarCart()
})

And('visualizo os valores corretos no carrinho', () =>{
    CartPage.validarItensNoCarrinho()
})

When('removo um café do carrinho',() =>{
    CartPage.removerCafeAleatorio()
})

And('clico no total para efetuar o pagamento',() => {
    CartPage.clicarTotalBtn()
})

And('informo nome e email para pagamento',() =>{
    PayPage.preencherDados()
})

And('seleciono em submit', () =>{
    PayPage.clicarSubmitBtn()
})

Then('devo ver a mensagem de pagamento realizado com sucesso', () =>{
    PayPage.popUpSucesso("Thanks for your purchase. Please check your email for payment.")
    
})

//Step de Erro Email Inválido
And('informo nome e email inválido para pagamento', () =>{
    PayPage.preencherDadosInválidos()
})