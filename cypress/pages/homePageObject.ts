import { User } from "../types/user";

export const homePage = {

    clickEditOnUser: (user: User) => {
        cy.get('li').contains(`${user.firstName} ${user.lastName}`).find('.edit').click()
    }

}