/// <reference types="cypress" />

describe('home page tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081')
    cy.get('[name=username]').type('admin')
    cy.get('[name=password]').type('admin')
    cy.get('.btn-primary').click()
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
