import { AxiosResponse } from 'axios';
import $api from '../http';
import { AuthorizationResponse } from '../models/response/AuthorizationResponse';
import { IRegistrationFormData } from '../components/RegistrationForm/RegistrationForm.types';

class AuthorizationService {
  static async registration(
    data: IRegistrationFormData
  ): Promise<AxiosResponse<AuthorizationResponse>> {
    return $api.post<AuthorizationResponse>('user/registration', { ...data });
  }
}

export default AuthorizationService;
