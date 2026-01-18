Cypress.Commands.add('buscarListaDeCafes', () => {
  cy.request({
    method: 'GET',
    url: '/list.json',
  }).then((response) => {
    expect(response.status).to.eq(200)

    const cafes = response.body.map(cafe => ({
      name: cafe.name,
      price: cafe.price
    }))

    Cypress.env('cafes', cafes)

  })
})