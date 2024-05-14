export const getRandomUser = () => {
    return {
        firstName: generateRandomString(5),
        lastName: generateRandomString(5),
        username: generateRandomString(8),
        password: generateRandomString(5),
        email: `${generateRandomString(4)}@gmail.com`
    }
}

const generateRandomString = (length) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
};