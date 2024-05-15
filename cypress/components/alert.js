export const alertComponent = {

    verifySuccess: (message) => {
        cy.get('.alert-success').should('have.text', message)
    },

    verifyError: (message) => {
        cy.get('.alert-danger').should('have.text', message)
    }

}