import { generateRandomString } from "./random"

export const getRandomEmail = () => {
    return {
        subject: generateRandomString(8),
        message: `${generateRandomString(5)} ${generateRandomString(5)} ${generateRandomString(5)}`,
    }
}