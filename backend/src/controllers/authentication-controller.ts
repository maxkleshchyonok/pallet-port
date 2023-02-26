import authService from '../services/authentication-service.js';

class AuthController {
    async loginUser(request: any, response: any) {
        try {
            const token = await authService.login(request.body.email, request.body.password)
            response.json(token);
        } catch (error) {
            console.error('Login error');
        }
    };

    async registerUser(request: any, response: any) {
        try {
            const user = await authService.register(request.body);
            response.json(user);
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