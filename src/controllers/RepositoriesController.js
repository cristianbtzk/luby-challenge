import CreateRepositoryService from '../services/repositories/CreateRepositoryService';
import DeleteRepositoryService from '../services/repositories/DeleteRepositoryService';
import ShowRepositoryService from '../services/repositories/ShowRepositoryService';
import ListRepositoriesFromUserService from '../services/repositories/ListRepositoriesFromUserService';

export default {
  async create(request, response) {
    const {
      name, description, public: isPublic, user_id,
    } = request.body;

    const createRepository = new CreateRepositoryService();

    const repository = await createRepository.execute({
      name, description, user_id, isPublic,
    });

    return response.json(repository);
  },

  async show(request, response) {
    const { repository_id } = request.params;

    const showRepository = new ShowRepositoryService();

    const repository = await showRepository.execute(repository_id);

    return response.json(repository);
  },

  async index(request, response) {
    const { user_id } = request.params;

    const listRepositoriesFromUser = new ListRepositoriesFromUserService();

    const repositories = await listRepositoriesFromUser.execute(user_id);

    return response.json(repositories);
  },

  async delete(request, response) {
    const { repository_id } = request.params;

    const deleteRepository = new DeleteRepositoryService();

    await deleteRepository.execute(repository_id);

    return response.status(200).json({ message: 'Success' });
  },
};
