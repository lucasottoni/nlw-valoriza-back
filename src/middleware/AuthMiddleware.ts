import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AuthService } from "../services/AuthService";


class IToken {
    sub: string
}

class AuthMiddleware {
    handle(request: Request, response: Response, next: NextFunction) {
        // get token
        const authToken = request.headers.authorization;

        if (!authToken) {
            return response.status(401).json({
                error: "Missing Token"
            }).end();
        }

        // is valid token
        const [, token] = authToken.split(" ");
        const authService = new AuthService();
        try {
            const decode = verify(token, authService.jwtHash) as IToken

            const { sub } = decode;
            // get token info
            request.user_id = sub;

            return next();
        } catch (err) {
            response.status(401).json({
                error: "Invalid Token"
            }).end();
        }
    }
}

const middleware = new AuthMiddleware()

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) { middleware.handle(request, response, next); }