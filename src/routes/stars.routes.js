import { Router } from 'express';
import StarsController from '../controllers/StarsController';

const starsRouter = Router();

starsRouter.post('/', StarsController.create);
starsRouter.delete('/:star_id', StarsController.delete);

export default starsRouter;
