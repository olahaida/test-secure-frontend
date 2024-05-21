/// <reference types="cypress" />

import { getRandomUser } from "../generators/userGenerator"

describe('home page tests', () => {
  beforeEach(() => {
    const user = getRandomUser()
    cy.register(user)
    cy.login(user.username, user.password)
  })

  afterEach(() => {
    cy.get('@jwtToken').then((token) => {
      cy.log(`${token}`)
    })
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
