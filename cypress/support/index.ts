import { User } from "../types/user"

declare global {
    namespace Cypress {
        interface Chainable {
            login(username: string, password: string): void
            register(user: User): Chainable<Response<any>>
            deleteUser(username: string, token: string): void
        }
    }
}