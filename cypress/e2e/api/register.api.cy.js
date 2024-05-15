/// <reference types="cypress" />

import { getRandomUser } from "../../generators/userGenerator"

describe('Register API tests', () => {

    it('should return HTTP 201 on valid register', () => {
        const user = getRandomUser()
        cy.register(user)
    })
})
