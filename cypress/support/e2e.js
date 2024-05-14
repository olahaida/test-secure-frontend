import './commands'

beforeEach(() => {
    if (Cypress.env('isMobile')) {
        cy.viewport(393, 852)
    }
})