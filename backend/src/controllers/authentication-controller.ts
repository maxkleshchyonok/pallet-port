import AuthService from '../services/authentication-service.js';

class AuthController {
    async loginUser(request: any, response: any) {
        try {
            console.log('OK');
            response.json('OK');
        } catch (error) {
            console.error('Login error');
        }
    };

    async registerUser(request: any, response: any) {
        try {
            /* TODO: Register */
        } catch (error) {
            console.error('Register error');
        }
    };

    async logoutUser(request: any, response: any) {
        try {
            /* TODO: Logout */
        } catch (error) {
            console.error('Logout error');
        }
    };
}

export default new AuthController();