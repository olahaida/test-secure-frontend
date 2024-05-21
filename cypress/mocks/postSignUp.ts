const url = '**/users/signup'

export const signUpMocks = {

    success: () => {
        cy.intercept('POST', url, (req) => {
            req.reply({
                statusCode: 201,
                body: {
                    token: 'fakeToken'
                },
            })
        })
    },

    usernameExists: (errorMessage: string) => {
        cy.intercept('POST', url, (req) => {
            req.reply({
                statusCode: 422,
                body: {
                    message: errorMessage,
                },
            })
        })
    }

}