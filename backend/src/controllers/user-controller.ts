import userService from '../services/user-service.js';

class UserController {
    async createUser(request: any, response: any) {
        try {
            const user = await userService.create(request.body);
            response.json(user);
        } catch (error) {
            console.error('Create error');
        }
    };

    async getUser(request: any, response: any) {
        try {
            const user = await userService.get(request.params.id);
            response.json(user);
        } catch (error) {
            console.error('Get one error');
        }
    };

    async getUsers(request: any, response: any) {
        try {
            const user = await userService.getAll();
            response.json(user);
        } catch (error) {
            console.error('Get all error');
        }
    };

    async updateUser(request: any, response: any) {
        try {
            const user = await userService.update(request.params.id, request.body);
            response.json(user);
        } catch (error) {
            console.error('Update error');
        }
    };

    async deleteUser(request: any, response: any) {
        try {
            const user = await userService.delete(request.params.id);
            response.json(user);
        } catch (error) {
            console.error('Delete error');
        }
    };
}

export default new UserController();