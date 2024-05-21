export const alertComponent = {

    verifySuccess: (message: string) => {
        cy.get('.alert-success').should('have.text', message)
    },

    verifyFailure: (message: string) => {
        cy.get('.alert-danger').should('have.text', message)
    }

}