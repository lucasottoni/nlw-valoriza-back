import { Request, Response } from "express";
import { ListSentComplimentsService } from "../services/compliments/ListSentComplimentsService";

class ListSentComplimentController {

    async handle(request:Request, response: Response) {

        const { user_id } = request;

        const service = new ListSentComplimentsService();

        const compliments = await service.execute(user_id);
        
        response.json(compliments);
    }

}

export { ListSentComplimentController }