const NAME = '#name'
const EMAIL = '#email'
const SUBMIT_BTN = '#submit-payment'
const POPUP_SUCESSO = '.snackbar'

class PayPage {

    preencheNome(nome) {
        cy.get(NAME).clear().type(nome)
    }

    preencheEmail(email) {
        cy.get(EMAIL).clear().type(email)
    }

    preencherDados() {
        function gerarHashAleatorio() {
            return Math.floor(1000 + Math.random() * 9000)
        }

        const hashConta = gerarHashAleatorio()
        const nameUser = `Rodrigo${hashConta}`
        const emailUser = `${nameUser.toLowerCase()}@gmail.com`

        this.preencheNome(nameUser)
        this.preencheEmail(emailUser)
    }
    preencherDadosInválidos() { 
        function gerarHashAleatorio() {
            return Math.floor(1000 + Math.random() * 9000)
        }

        const hashConta = gerarHashAleatorio()
        const nameUser = `Rodrigo${hashConta}`
        const emailUser = `${nameUser.toLowerCase()}gmail.com`

        this.preencheNome(nameUser)
        this.preencheEmail(emailUser)
    }

    clicarSubmitBtn(){
        cy.get(SUBMIT_BTN).should('be.visible').click()
    }

    popUpSucesso(textoEsperado) {
        cy.contains(POPUP_SUCESSO, textoEsperado, { timeout: 5000 }).should('exist')
    }


}

export default new PayPage()