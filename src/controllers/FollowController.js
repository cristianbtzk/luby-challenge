import StartFollowingService from '../services/follows/StartFollowingService';
import StopFollowingService from '../services/follows/StopFollowingService';

export default {
  async create(request, response) {
    const {
      follower_id, followed_id,
    } = request.body;

    const startFollowing = new StartFollowingService();

    const follow = await startFollowing.execute({ followed_id, follower_id });

    return response.json(follow);
  },

  async delete(request, response) {
    const {
      follow_id,
    } = request.params;

    const stopFollowing = new StopFollowingService();

    await stopFollowing.execute(follow_id);

    return response.status(200).json({ message: 'Success' });
  },

};
