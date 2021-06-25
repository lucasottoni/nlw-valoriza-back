import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";


class AuthUserController {

    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const authService = new AuthService();

        const tag = await authService.execute({ email, password });

        return response.json(tag);
    }

}

export { AuthUserController }