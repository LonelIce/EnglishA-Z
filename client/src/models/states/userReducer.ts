export interface IUserState {
  isAuthorization: boolean;
  userData: IUserData;
}

export interface IUserData {
  username: string | null;
  role: UserRoles;
}

export enum UserRoles {
  SIMPLE = 'SIMPLE',
  VIP = 'VIP',
  NONE = 'NONE',
}
