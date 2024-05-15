/// <reference types="cypress" />

import { alertComponent } from "../components/alert";
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
        alertComponent.verifyError('Username is already in use');
    })

    it('should successfully register', () => {
        // given
        const user = getRandomUser()

        // when
        registerPage.attemptRegister(user)

        // then
        alertComponent.verifySuccess('Registration successful');
        cy.url().should('contain', '/login');
    })

})
