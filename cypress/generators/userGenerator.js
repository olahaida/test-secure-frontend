import { generateRandomString } from "./random"

export const getRandomUser = () => {
    return {
        firstName: generateRandomString(5),
        lastName: generateRandomString(5),
        username: generateRandomString(8),
        password: generateRandomString(5),
        email: getEmail(),
        roles: getRoles()
    }
}

export const getRandomUserWithUsername = (username) => {
    return {
        firstName: generateRandomString(5),
        lastName: generateRandomString(5),
        username: username,
        password: generateRandomString(5),
        email: getEmail(),
        roles: getRoles()
    }
}

const getEmail = () => `${generateRandomString(4)}@gmail.com`

const getRoles = () => ["ROLE_ADMIN", "ROLE_CLIENT"]