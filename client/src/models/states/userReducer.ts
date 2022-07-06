export interface IUserState {
  isAuthorization: boolean;
  userData: IUserData | null;
}

export interface IUserData {
  username: string;
  role: UserRoles;
}

export enum UserRoles {
  SIMPLE = 'SIMPLE',
  VIP = 'VIP',
}
