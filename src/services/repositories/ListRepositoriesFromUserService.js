import RepositoryRepository from '../../repositories/repositories/RepositoriesRepository';

export default class ListRepositoriesFromUserService {
  constructor() {
    this.repositoriesRepository = new RepositoryRepository();
  }

  async execute(user_id) {
    const repositories = await this.repositoriesRepository.list(user_id);

    const count = repositories.length;

    return { repositories, count };
  }
}
