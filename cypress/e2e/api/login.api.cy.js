/// <reference types="cypress" />

describe('Login API tests', () => {

    it('should return HTTP 200 on valid login', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:4001/users/signin',
            body: {
                username: Cypress.env('username'),
                password: Cypress.env('password'),
            },
        }).then((response) => {
            expect(response.status).to.equal(200)
        })
    })
})
