import AppError from '../../errors/AppError';
import FollowsRepository from '../../repositories/follows/FollowsRepository';
import UsersRepository from '../../repositories/users/UsersRepository';

export default class ListFollowersFromUserService {
  constructor() {
    this.followsRepository = new FollowsRepository();
    this.usersRepository = new UsersRepository();
  }

  async execute(id) {
    const checkUser = await this.usersRepository.findById(id);

    if (!checkUser) {
      throw new AppError('User does not exist.');
    }

    const followers = await this.followsRepository.listFollowers(id);

    const count = followers.length;

    return { followers, count };
  }
}
