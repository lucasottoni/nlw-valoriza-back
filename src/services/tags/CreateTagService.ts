import { getCustomRepository } from "typeorm"
import { TagRepository } from "../../repositories/TagRepository"


class CreateTagService {

    async execute(name: string) {
        if (!name) {
            throw new Error("Invalid name!");
        }

        const tagRepository = getCustomRepository(TagRepository);

        const tagAlreadyExists = await tagRepository.findOne({
            name
        });

        if (tagAlreadyExists) {
            throw new Error("Tag already exists!");
        }

        const tag = tagRepository.create({
            name,
        });

        await tagRepository.save(tag);

        return tag;
    }
}

export { CreateTagService }