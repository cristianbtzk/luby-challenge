import CreateUserService from '../services/users/CreateUserService';
import DeleteUserService from '../services/users/DeleteUserService';
import ListProfileService from '../services/users/ListProfileService';

export default {
  async create(request, response) {
    const {
      name, email, address, avatar, username, bio,
    } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name, email, address, avatar, username, bio,
    });

    return response.json(user);
  },

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
  },
};
