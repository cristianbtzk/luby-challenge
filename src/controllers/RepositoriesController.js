import CreateRepositoryService from '../services/repositories/CreateRepositoryService';
import DeleteUserService from '../services/users/DeleteUserService';
import ListProfileService from '../services/users/ListProfileService';

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
/*
  async show(request, response) {
    const { user_id } = request.params;

    const listProfile = new ListProfileService();

    const user = await listProfile.execute(user_id);

    return response.json(user);
  },

  async delete(request, response) {
    const { user_id } = request.params;

    const deleteUser = new DeleteUserService();

    await deleteUser.execute(user_id);

    return response.status(200).json({ message: 'Success' });
  }, */
};
