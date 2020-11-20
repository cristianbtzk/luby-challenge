import AppError from '../../errors/AppError';
import UsersRepository from '../../repositories/users/UsersRepository';

export default class CreateUserService {
  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async execute(id) {
    console.log('Asdas');
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new AppError('User does not exist');
    }

    await this.usersRepository.deleteUser(id);
  }
}
