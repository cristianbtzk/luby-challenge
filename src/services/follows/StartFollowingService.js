import AppError from '../../errors/AppError';
import FollowsRepository from '../../repositories/follows/FollowsRepository';
import UsersRepository from '../../repositories/users/UsersRepository';

export default class StartFollowingService {
  constructor() {
    this.followsRepository = new FollowsRepository();
    this.usersRepository = new UsersRepository();
  }

  async execute({ follower_id, followed_id }) {
    const checkFollower = await this.usersRepository.findById(follower_id);
    const checkFollowed = await this.usersRepository.findById(followed_id);

    if (!checkFollower || !checkFollowed) {
      throw new AppError('Error while creating follow.');
    }

    const follow = await this.followsRepository.create({ followed_id, follower_id });

    return follow;
  }
}
