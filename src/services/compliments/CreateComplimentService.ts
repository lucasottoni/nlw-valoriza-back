import { getCustomRepository } from "typeorm"
import { ComplimentRepository } from "../../repositories/Compliment"
import { UserRepository } from "../../repositories/UserRepository";

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {

    async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
        if (user_sender == user_receiver) {
            throw new Error("Cannot send to yourself");
        }

        const complimentRepository = getCustomRepository(ComplimentRepository);
        const userRepository = getCustomRepository(UserRepository);

        const userReceiver = await userRepository.findOne(user_receiver);

        if (!userReceiver) {
            throw new Error("User receiver does not exist!");
        }

        const compliment = complimentRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });

        await complimentRepository.save(compliment);

        return compliment;
    }
}

export { CreateComplimentService }