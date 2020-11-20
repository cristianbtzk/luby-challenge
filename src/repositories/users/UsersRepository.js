import User from '../../models/User';

export default class UsersRepository {
  async findByEmail(email) {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  async create({
    name, email, address, avatar, username, bio,
  }) {
    const user = await User.create({
      name, email, address, avatar, username, bio,
    });

    return user;
  }

  async findByUsername(username) {
    const user = await User.findOne({
      where: {
        username,
      },
    });

    return user;
  }

  async findById(id) {
    const user = await User.findByPk(id);

    return user;
  }

  async deleteUser(id) {
    await User.destroy({
      where: {
        id,
      },
    });
  }
}
