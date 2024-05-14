/// <reference types="cypress" />

import { getRandomUser } from "../generators/userGenerator";

describe('Register page tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8081/register')
    })

    it('should display username already exists alert', () => {
        cy.get('input[name=firstName]').type('Janek');
        cy.get('input[name=lastName]').type('Kowalski');
        cy.get('input[name=username]').type('admin');
        cy.get('input[name=password]').type('password');
        cy.get('input[name=email]').type('any@gmail.com');
        cy.get('button.btn-primary').click();

        cy.get('.alert.alert-danger').should('contain', 'Username is already in use');
    })

    it('should successfully register', () => {
        const user = getRandomUser()
        cy.get('input[name=firstName]').type(user.firstName);
        cy.get('input[name=lastName]').type(user.lastName);
        cy.get('input[name=username]').type(user.username);
        cy.get('input[name=password]').type(user.password);
        cy.get('input[name=email]').type(user.email);
        cy.get('button.btn-primary').click();

        cy.get('.alert.alert-success').should('contain', 'Registration successful');
        cy.url().should('contain', '/login');
    })

})
