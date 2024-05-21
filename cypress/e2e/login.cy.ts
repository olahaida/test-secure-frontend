/// <reference types="cypress" />

import { loginPage } from "../pages/LoginPageClass"

describe('login page tests', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('should successfully login', () => {
    // when
    loginPage.attemptLogin('admin', 'admin')

    // then
    cy.get('h1').should('contain.text', 'Slawomir')
  })

})
