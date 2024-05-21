/// <reference types="cypress" />

import { getRandomUser } from "../generators/userGenerator"
import { User } from "../types/user"

describe('Edit page tests', () => {
    let user: User

    beforeEach(() => {
        user = getRandomUser()
        cy.register(user)
        cy.login(user.username, user.password)
        cy.get('li').contains(`${user.firstName} ${user.lastName}`).find('.edit').click()
    })

    afterEach(() => {
        cy.get('@jwtToken').then((token) => {
            cy.deleteUser(user.username, `${token}`)
        })
    })

    it('should correctly autofill user data', () => {
        // then
        cy.get("input[name='firstName']").should('have.value', user.firstName);
        cy.get("input[name='lastName']").should('have.value', user.lastName);
        cy.get("input[name='email']").should('have.value', user.email);
        cy.get("input[name='username']").should('have.value', user.username);
        cy.get("input[name='roles']").should('have.value', user.roles.join(','));
    })

    it('should successfully edit an user', () => {
        // given
        const newUser = getRandomUser()

        // when
        cy.get("input[name='firstName']").clear().type(newUser.firstName)
        cy.get("input[name='lastName']").clear().type(newUser.lastName)
        cy.get("input[name='email']").clear().type(newUser.email)
        cy.get('.btn-primary').click()

        // then
        cy.get('.alert-success').should('have.text', 'Updating user successful')
        cy.get('li').contains(`${newUser.firstName} ${newUser.lastName}`).should('exist')
        cy.get('li').contains(`${user.firstName} ${user.lastName}`).should('not.exist')

        cy.get('@jwtToken').then((token) => {
            cy.request({
                method: 'GET',
                url: `http://localhost:4001/users/${user.username}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                expect(response.body.username).to.eq(user.username)
                expect(response.body.roles).to.deep.eq(user.roles)
                expect(response.body.firstName).to.eq(newUser.firstName)
                expect(response.body.lastName).to.eq(newUser.lastName)
                expect(response.body.email).to.eq(newUser.email)
            })  
        })
              
    })

})
