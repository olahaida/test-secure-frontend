import { faker } from '@faker-js/faker';
import { User } from '../types/user';
import { Roles } from '../types/roles';

export const getRandomUser = (): User => {
    return {
        username: faker.internet.userName(),
        password: faker.internet.password(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        roles: [Roles.ROLE_ADMIN, Roles.ROLE_CLIENT]
    }
}