import Follow from '../../models/Follow';

export default class FollowsRepository {
  async create({
    follower_id, followed_id,
  }) {
    const follow = await Follow.create({
      followed_id,
      follower_id,
    });

    return follow;
  }

  async findById(id) {
    const follow = await Follow.findByPk(id);

    return follow;
  }

  async delete(follow) {
    await follow.destroy();
  }
}
