declare namespace Cypress {
    interface Chainable {
        /**
         * login user via API and set localStorage and cookie
         * @param username user login
         * @param password user password
         */
        login(username: string, password: string): void
    }
}