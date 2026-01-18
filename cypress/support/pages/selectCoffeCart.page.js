const BTN_ACCEPT_OFFER = 'button.yes'
const MODAL = '.promo'

class SelectCoffe {
    
    gerarSeletoresDeCafe() {
        const cafes = Cypress.env('cafes')

        const cafesValidos = cafes.filter(cafe =>!cafe.name.includes('(Discounted)'))

        const cafesSorteados = [...cafesValidos].sort(() => 0.5 - Math.random()).slice(0, 3)

        return cafesSorteados
    }

    normalizarDataCy(nomeCafe) {
      const partes = nomeCafe.split(' ')

      if (partes.length <= 2) {
         return partes.join('-')
        }

      // 3 ou mais palavras
      return `${partes[0]}-${partes.slice(1).join(' ')}`
    }

    SelecionaCoffe() {
      const cafesSorteados = this.gerarSeletoresDeCafe()

       const cafe1 = this.normalizarDataCy(cafesSorteados[0].name)
       const cafe2 = this.normalizarDataCy(cafesSorteados[1].name)
       const cafe3 = this.normalizarDataCy(cafesSorteados[2].name)

        cy.get(`[data-cy="${cafe1}"]`).should('be.visible').click()
        cy.get(`[data-cy="${cafe2}"]`).should('be.visible').click()
        cy.get(`[data-cy="${cafe3}"]`).should('be.visible').click()

           Cypress.env('cafesSelecionados', cafesSorteados)
    }
    VerificaModalOferta(){
        cy.get(MODAL).should('be.visible')
    }

   AceitaOferta(){

    cy.get(MODAL)
        .should('be.visible')
        .contains("It's your lucky day! Get an extra cup of Mocha for $4.")
        .then(() => {

            const cafesSelecionados = Cypress.env('cafesSelecionados') || [];

            const cafesOrdenados = cafesSelecionados.sort((a, b) =>
                a.name.localeCompare(b.name)
            );

            const cafePromocao = { name: "(Discounted) Mocha", price: 4 };

            const cafesComPromocao = [cafePromocao, ...cafesOrdenados];

            Cypress.env('cafesSelecionados', cafesComPromocao);
        });

    cy.get(BTN_ACCEPT_OFFER).should('be.visible').click()
}
}

export default new SelectCoffe()