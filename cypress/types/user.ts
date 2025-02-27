import { Roles } from "./roles";

export interface User {
    username: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string,
    roles: Roles[]
}