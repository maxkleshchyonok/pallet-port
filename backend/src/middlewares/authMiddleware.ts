import jwt from "jsonwebtoken";
import config from "../config.js";

export default function checkAuth(request: any, response: any, next: any) {
    try {
        const token = request.headers.authorization.split(' ')[1];
        if (!token) {
            return response.json({message: 'User is not authorized'});
        }

        const userData = jwt.verify(token, config.secret);
        request.user = userData;
        next();
    } catch (error) {
        console.error(error);
    }
}