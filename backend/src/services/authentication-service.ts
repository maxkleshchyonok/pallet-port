import User from '../schemas/user.js';

class AuthService {
    async register() {
        return 'Register';
    };

    async login() {
        return 'Login';
    };

    async logout() {
        return 'Logout';
    };
}

export default new AuthService();