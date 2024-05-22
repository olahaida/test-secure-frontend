import { User } from "../types/user";

const url = '**/users/signin'

export const loginMocks = {

    success: (user: User) => {
        const { password, ...rest } = user
        const responseBody = {
            ...rest,
            token: 'fakeJwtToken'
        }

        cy.intercept('POST', url, (req) => {
            req.reply({
                statusCode: 200,
                body: responseBody
            })
        })
    }

}