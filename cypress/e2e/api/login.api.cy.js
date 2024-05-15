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
            expect(response.body.token).not.to.be.undefined
        })
    })

    it('should return HTTP 422 on invalid login', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:4001/users/signin',
            failOnStatusCode: false,
            body: {
                username: 'wrong',
                password: 'wrong'
            }
        }).then((response) => {
            expect(response.status).to.eql(422)
            expect(response.body.message).to.eql('Invalid username/password supplied')
        })
    })

    it('should return HTTP 400 on username too short', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:4001/users/signin',
            failOnStatusCode: false,
            body: {
                username: '123',
                password: 'wrong'
            }
        }).then((response) => {
            expect(response.status).to.eql(400)
            expect(response.body.username).to.eql('Minimum username length: 4 characters')
        })
    })
})
