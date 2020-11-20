import AppError from '../../errors/AppError';
import UsersRepository from '../../repositories/users/UsersRepository';

export default class CreateUserService {
  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async execute({
    name, email, address, avatar, username, bio,
  }) {
    const checkEmail = await this.usersRepository.findByEmail(email);

    if (checkEmail) {
      throw new AppError('Email already in use');
    }

    const checkUsername = await this.usersRepository.findByUsername(username);

    if (checkUsername) {
      throw new AppError('Username already in use');
    }

    const user = await this.usersRepository.create({
      name, email, address, avatar, username, bio,
    });

    return user;
  }
}
