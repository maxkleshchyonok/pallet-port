import userService from '../services/user-service.js';
import formatError from '../tools/errorFormatter.js';

class UserController {
    async createUser(request: any, response: any) {
        try {
            const user = await userService.create(request.body);
            response.json(user);
        } catch (error: any) {
            console.error('Create error');
            response.json(formatError(error));
        }
    };

    async getUser(request: any, response: any) {
        try {
            const user = await userService.get(request.params.id);
            response.json(user);
        } catch (error: any) {
            console.error('Get one error');
            response.json(formatError(error));
        }
    };

    async getUsers(request: any, response: any) {
        try {
            const user = await userService.getAll();
            response.json(user);
        } catch (error: any) {
            console.error('Get all error');
            response.json(formatError(error));
        }
    };

    async updateUser(request: any, response: any) {
        try {
            const user = await userService.update(request.params.id, request.body);
            response.json(user);
        } catch (error: any) {
            console.error('Update error');
            response.json(formatError(error));
        }
    };

    async deleteUser(request: any, response: any) {
        try {
            const user = await userService.delete(request.params.id);
            response.json(user);
        } catch (error: any) {
            console.error('Delete error');
            response.json(formatError(error));
        }
    };
}

export default new UserController();