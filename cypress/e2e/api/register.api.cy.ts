/// <reference types="cypress" />

import { getRandomUserWithUsername, getRandomUsername } from "../../generators/userGenerator"

describe('register api tests', () => {

    it('should fail to register if user already exists', () => {
        // given
        const existingUsername = getRandomUsername()
        const existingUser = getRandomUserWithUsername(existingUsername)
        cy.register(existingUser)

        // when + then
        const newUser = getRandomUserWithUsername(existingUsername)
        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: 'http://localhost:4001/users/signup',
            body: newUser
        }).then((response) => {
            expect(response.status).to.eq(422)
            expect(response.body.message).to.eq("Username is already in use")
        })

    })

  })
  