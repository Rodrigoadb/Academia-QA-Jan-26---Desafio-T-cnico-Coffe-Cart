const CART = 'a[href="/cart"]'
class Cart {
 
    acessarCart(){
        cy.get(CART).click()
    }
 
}
 
export default new Cart()