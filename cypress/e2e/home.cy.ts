/// <reference types="cypress" />

import { getRandomUser } from "../generators/userGenerator"
import { User } from "../types/user"

describe('home page tests', () => {
  let user: User

  beforeEach(() => {
    user = getRandomUser()
    cy.register(user)
    cy.login(user.username, user.password)
  })

  afterEach(() => {
    cy.get('@jwtToken').then((token) => {
      cy.deleteUser(user.username, `${token}`)
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
