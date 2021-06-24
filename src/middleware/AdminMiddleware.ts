import { NextFunction, Request, Response } from "express";


class AdminMiddleware {
    handle(request: Request, response: Response, next: NextFunction) {
        const admin = true;

        if (admin) {
            return next();
        }

        return response.status(401).json({
            error: "User not authorized",
        });
    }
}

const middleware = new AdminMiddleware()

export function ensureAdmin(request: Request, response: Response, next: NextFunction) { middleware.handle(request, response, next); }