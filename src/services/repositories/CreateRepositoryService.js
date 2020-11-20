import AppError from '../../errors/AppError';
import RepositoryRepository from '../../repositories/repositories/RepositoriesRepository';
import UsersRepository from '../../repositories/users/UsersRepository';

export default class CreateRepositoryService {
  constructor() {
    this.repositoriesRepository = new RepositoryRepository();
    this.usersRepository = new UsersRepository();
  }

  async execute({
    name, description, isPublic, slug, user_id,
  }) {
    const checkUser = await this.usersRepository.findById(user_id);

    if (!checkUser) {
      throw new AppError('User does not exist');
    }

    const repository = await this.repositoriesRepository.create({
      name,
      description,
      isPublic,
      slug,
      user_id,
    });

    return repository;
  }
}
