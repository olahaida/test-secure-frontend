const url = '**/users'

export const usersMocks = {

    success: () => {
        cy.intercept('GET', url, { fixture: 'users.json' })
    }

}