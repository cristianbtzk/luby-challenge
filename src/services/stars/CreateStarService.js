import AppError from '../../errors/AppError';

import UsersRepository from '../../repositories/users/UsersRepository';
import RepositoriesRepository from '../../repositories/repositories/RepositoriesRepository';
import StarsRepository from '../../repositories/stars/StarsRepository';

export default class CreateStarService {
  constructor() {
    this.usersRepository = new UsersRepository();
    this.repositoriesRepository = new RepositoriesRepository();
    this.starsRepository = new StarsRepository();
  }

  async execute({ user_id, repository_id }) {
    const checkUser = await this.usersRepository.findById(user_id);

    if (!checkUser) {
      throw new AppError('User does not exist');
    }

    const checkRepository = await this.repositoriesRepository.findById(repository_id);

    if (!checkRepository) {
      throw new AppError('Repository does not exist');
    }

    const checkStarAlreadyExists = await this.starsRepository.findStar({ user_id, repository_id });

    if (checkStarAlreadyExists) {
      throw new AppError('Star already exists');
    }

    const star = await this.starsRepository.create({ user_id, repository_id });

    return star;
  }
}
