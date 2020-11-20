import AppError from '../../errors/AppError';
import UsersRepository from '../../repositories/users/UsersRepository';

export default class DeleteUserService {
  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async execute(user_id) {
    const userExists = await this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new AppError('User does not exist');
    }

    await this.usersRepository.deleteUser(user_id);

    return true;
  }
}
