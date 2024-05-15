import { generateRandomString } from "./random"

export const getRandomUser = () => {
    return {
        firstName: generateRandomString(5),
        lastName: generateRandomString(5),
        username: generateRandomString(8),
        password: generateRandomString(5),
        email: `${generateRandomString(4)}@gmail.com`,
        roles: ["ROLE_ADMIN", "ROLE_CLIENT"]
    }
}