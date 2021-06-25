import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UserRepository"


interface IAuthRequest {
    email: string,
    password: string
}

class AuthService {

    readonly jwtHash: string = "fe007ffcdd853de16be1751eb5ce0338";

    async execute({ email, password }: IAuthRequest) {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password incorrect");
        }

        const isValidPassword = await compare(password, user.password);

        if (!isValidPassword) {
            throw new Error("Email/Password incorrect");
        }

        const token = sign({
            email: user.email
        }, this.jwtHash, {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }

}

export { AuthService }