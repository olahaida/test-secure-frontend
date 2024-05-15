/// <reference types="cypress" />

import { getRandomUser, getRandomUserWithUsername } from "../generators/userGenerator";
import { registerPage } from "../pages/registerPage";

describe('Register page tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8081/register')
    })

    it('should display username already exists alert', () => {
        // given
        const adminUser = getRandomUserWithUsername('admin')

        // when
        registerPage.attemptRegister(adminUser)

        // alert
        cy.get('.alert.alert-danger').should('contain', 'Username is already in use');
    })

    it('should successfully register', () => {
        // given
        const user = getRandomUser()

        // when
        registerPage.attemptRegister(user)

        // then
        cy.get('.alert.alert-success').should('contain', 'Registration successful');
        cy.url().should('contain', '/login');
    })

})
