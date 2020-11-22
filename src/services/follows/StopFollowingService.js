import AppError from '../../errors/AppError';
import FollowsRepository from '../../repositories/follows/FollowsRepository';

export default class StopFollowingService {
  constructor() {
    this.followsRepository = new FollowsRepository();
  }

  async execute(id) {
    const follow = await this.followsRepository.findById(id);

    if (!follow) {
      throw new AppError('Follow does not exist.');
    }

    await this.followsRepository.delete(follow);

    return true;
  }
}
