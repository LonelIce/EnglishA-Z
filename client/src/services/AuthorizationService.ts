import { AxiosResponse } from 'axios';
import $api from '../http';
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
}

export default AuthorizationService;
