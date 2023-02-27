import { validationResult } from 'express-validator';
import authService from '../services/authentication-service.js';
import formatError from '../tools/errorFormatter.js';

class AuthController {
    async loginUser(request: any, response: any) {
        try {
            const token = await authService.login(request.body.email, request.body.password)
            response.json(token);
        } catch (error: any) {
            console.error('Login error');
            response.json(formatError(error));
        }
    };

    async registerUser(request: any, response: any) {
        try {
            const user = await authService.register(request.body);
            response.json(user);
        } catch (error: any) {
            console.error('Register error');
            response.json(formatError(error));
        }
    };

    async logoutUser(request: any, response: any) {
        try {
            /* TODO: Logout */
        } catch (error: any) {
            console.error('Logout error');
            response.json(formatError(error));
        }
    };
}

export default new AuthController();