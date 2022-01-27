/**
 * @file users.ts
 * @brief define all user objects used from and for app.
 */

import { Type } from "./types";

/**
 * @interface Users
 * @brief user entity
 */
export interface User {
    id: number;
    name: string;
    password: string;
    type: Type;
    societe: string;
}

/**
 * @interface UserFromClientDto
 * @brief user request to create, update user.
 */
export interface UserFromClientDto {
    name: string;
    password: string;
    typeId: number;
    societe: string;
}