export interface AuthorizationResponse {
    tokens: Tokens;
    user: UserDataResponse;
}

interface Tokens {
    accessToken: string;
    refreshToken: string;
}

interface UserDataResponse {
    email: string;
    id: string;
}
