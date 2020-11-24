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

  async findExistentFollow({ followed_id, follower_id }) {
    const follow = await Follow.findOne({
      where: {
        followed_id,
        follower_id,
      },
    });

    return follow;
  }

  async countFollowers(id) {
    const followers = await Follow.count({
      where: {
        followed_id: id,
      },
    });

    return followers;
  }

  async countFollowings(id) {
    const followings = await Follow.count({
      where: {
        follower_id: id,
      },
    });

    return followings;
  }

  async delete(follow) {
    await follow.destroy();
  }

  async listFollowers(followed_id) {
    const followers = Follow.findAll({
      where: {
        followed_id,
      },
    });

    return followers;
  }
}
