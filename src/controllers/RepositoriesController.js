import CreateRepositoryService from '../services/repositories/CreateRepositoryService';
import DeleteRepositoryService from '../services/repositories/DeleteRepositoryService';
import ShowRepositoryService from '../services/repositories/ShowRepositoryService';

export default {
  async create(request, response) {
    const {
      name, description, public: isPublic, slug, user_id,
    } = request.body;

    const createRepository = new CreateRepositoryService();

    const repository = await createRepository.execute({
      name, description, user_id, isPublic, slug,
    });

    return response.json(repository);
  },

  async show(request, response) {
    const { repository_id } = request.params;

    const showRepository = new ShowRepositoryService();

    const repository = await showRepository.execute(repository_id);

    return response.json(repository);
  },

  async delete(request, response) {
    const { repository_id } = request.params;

    const deleteRepository = new DeleteRepositoryService();

    await deleteRepository.execute(repository_id);

    return response.status(200).json({ message: 'Success' });
  },
};
