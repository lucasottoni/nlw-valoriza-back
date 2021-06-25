import { Request, Response } from "express";
import { ListReceivedComplimentsService } from "../services/compliments/ListReceivedComplimentsService";

class ListReceivedComplimentController {

    async handle(request:Request, response: Response) {

        const { user_id } = request;

        const service = new ListReceivedComplimentsService();

        const compliments = await service.execute(user_id);
        
        response.json(compliments);
    }

}

export { ListReceivedComplimentController }