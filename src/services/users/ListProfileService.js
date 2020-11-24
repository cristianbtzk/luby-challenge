import AppError from '../../errors/AppError';
import UsersRepository from '../../repositories/users/UsersRepository';
import RepositoriesRepository from '../../repositories/repositories/RepositoriesRepository';
import FollowsRepository from '../../repositories/follows/FollowsRepository';

export default class CreateUserService {
  constructor() {
    this.followsRepository = new FollowsRepository();
    this.repositoriesRepository = new RepositoriesRepository();
    this.usersRepository = new UsersRepository();
  }

  async execute(id) {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new AppError('User does not exist');
    }

    const followers = await this.followsRepository.countFollowers(id);
    const followings = await this.followsRepository.countFollowings(id);
    const repositories = await this.repositoriesRepository.countRepositoriesFromUser(id);

    return {
      user, followers, followings, repositories,
    };
  }
}
