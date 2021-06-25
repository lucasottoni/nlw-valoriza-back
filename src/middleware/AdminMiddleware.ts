import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";


class AdminMiddleware {
    async handle(request: Request, response: Response, next: NextFunction) {
        const { user_id } = request;

        const userRepository = getCustomRepository(UserRepository);

        const {admin} = await userRepository.findOne(user_id);

        if (!admin) {
            return response.status(401).json({
                error: "User not authorized",
            });
        }

        return next();
        
    }
}

const middleware = new AdminMiddleware()

export function ensureAdmin(request: Request, response: Response, next: NextFunction) { middleware.handle(request, response, next); }