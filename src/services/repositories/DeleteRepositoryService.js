import AppError from '../../errors/AppError';
import RepositoryRepository from '../../repositories/repositories/RepositoriesRepository';

export default class DeleteRepositoryService {
  constructor() {
    this.repositoriesRepository = new RepositoryRepository();
  }

  async execute(id) {
    const repository = await this.repositoriesRepository.findById(id);

    if (!repository) {
      throw new AppError('Repository does not exist');
    }

    await this.repositoriesRepository.delete(repository);

    return true;
  }
}
