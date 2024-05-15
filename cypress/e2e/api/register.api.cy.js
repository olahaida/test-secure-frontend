/// <reference types="cypress" />

import { getRandomUser } from "../../generators/userGenerator"

describe('Register API tests', () => {

    it('should return HTTP 201 on valid register', () => {
        const user = getRandomUser()

        // cy.register(user)

        cy.request({
            method: 'POST',
            url: 'http://localhost:4001/users/signup',
            body: user,
        }).then((response) => {
            expect(response.status).to.equal(201)
        })

    })
})
