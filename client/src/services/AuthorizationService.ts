import axios, { AxiosResponse } from 'axios';
import $api, { API_URL } from '../http';
import { AuthorizationResponse } from '../models/response/AuthorizationResponse';
import { IRegistrationFormData } from '../components/RegistrationForm/RegistrationForm.types';
import { ILoginFormData } from '../components/LoginForm/LoginForm.types';

class AuthorizationService {
    static async registration(
        data: IRegistrationFormData
    ): Promise<AxiosResponse<AuthorizationResponse>> {
        return $api.post<AuthorizationResponse>('user/registration', {
            ...data,
        });
    }

    static async login(
        data: ILoginFormData
    ): Promise<AxiosResponse<AuthorizationResponse>> {
        return $api.post('user/login', { ...data });
    }

    static async logout(): Promise<AxiosResponse> {
        return $api.get('/user/logout');
    }

    static async checkAuthorization(): Promise<
        AxiosResponse<AuthorizationResponse>
    > {
        return axios.get(`${API_URL}user/refresh`, {
            withCredentials: true,
        });
    }
}

export default AuthorizationService;
