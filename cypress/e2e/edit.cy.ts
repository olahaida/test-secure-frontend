/// <reference types="cypress" />

import { alertComponent } from "../components/alert"
import { getRandomUser } from "../generators/userGenerator"
import { editPage } from "../pages/editPageObject"
import { homePage } from "../pages/homePageObject"
import { User } from "../types/user"

describe('Edit page tests', () => {
    let user: User

    beforeEach(() => {
        user = getRandomUser()
        cy.register(user)
        cy.login(user.username, user.password)
        homePage.clickEditOnUser(user)
    })

    afterEach(() => {
        cy.get('@jwtToken').then((token) => {
            cy.deleteUser(user.username, `${token}`)
        })
    })

    it('should correctly autofill user data', () => {
        // then
        editPage.verifyAutocompletion(user)
    })

    it('should successfully edit an user', () => {
        // given
        const newUser = getRandomUser()

        // when
        editPage.attemptToEditUserData(newUser)

        // then
        alertComponent.verifySuccess('Updating user successful')
        performFrontendAssertions(user, newUser)
        assertUserEditServerSide(user, newUser)
    })

})

const performFrontendAssertions = (user: User, newUser: User) => {
    alertComponent.verifySuccess('Updating user successful')
    cy.get('li').contains(`${newUser.firstName} ${newUser.lastName}`).should('exist')
    cy.get('li').contains(`${user.firstName} ${user.lastName}`).should('not.exist')
}

const assertUserEditServerSide = (user: User, newUser: User) => {
    cy.get('@jwtToken').then((token) => {
        cy.getUserDetails(user.username, `${token}`).then((response) => {
            expect(response.body.username).to.eq(user.username)
            expect(response.body.roles).to.deep.eq(user.roles)
            expect(response.body.firstName).to.eq(newUser.firstName)
            expect(response.body.lastName).to.eq(newUser.lastName)
            expect(response.body.email).to.eq(newUser.email)
        })
    })
}