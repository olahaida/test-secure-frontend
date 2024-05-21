/// <reference types="cypress" />

describe('home page tests', () => {
  beforeEach(() => {
    cy.login('admin', 'admin')
  })

  it('should display at least one user', () => {
    cy.get('li').should('have.length.at.least', 1)
  })

  it('should logout', () => {
    cy.get('#logout').click()

    cy.url().should('contain', '/login')
    cy.get('h2').should('have.text', 'Login')
  })

})
