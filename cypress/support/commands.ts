Cypress.Commands.add('login', (username, password) => {
    cy.visit('http://localhost:8081')
    cy.get('[name=username]').type(username)
    cy.get('[name=password]').type(password)
    cy.get('.btn-primary').click()
})
