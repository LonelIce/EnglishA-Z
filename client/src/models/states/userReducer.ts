export interface IUserState {
    isAuthorization: boolean;
    userData: IUserData;
}

export interface IUserData {
    email: string;
    id: string;
    role?: UserRoles;
}

export enum UserRoles {
    SIMPLE = 'SIMPLE',
    VIP = 'VIP',
}
