import CreateStarService from '../services/stars/CreateStarService';
import DeleteStarService from '../services/stars/DeleteStarService';

export default {
  async create(request, response) {
    const {
      user_id, repository_id,
    } = request.body;

    const createStar = new CreateStarService();

    const star = await createStar.execute({ repository_id, user_id });

    return response.json(star);
  },

  async delete(request, response) {
    const { star_id } = request.params;

    const deleteStar = new DeleteStarService();

    await deleteStar.execute(star_id);

    return response.status(200).json({ message: 'Success' });
  },
};
