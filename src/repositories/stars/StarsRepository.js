import Star from '../../models/Star';

export default class StarsRepository {
  async create({ user_id, repository_id }) {
    const star = await Star.create({ user_id, repository_id });

    return star;
  }

  async findStar({ user_id, repository_id }) {
    const star = await Star.findOne({
      where: {
        user_id,
        repository_id,
      },
    });

    return star;
  }

  async delete(star) {
    await star.destroy();
  }

  async findById(id) {
    const star = await Star.findByPk(id);

    return star;
  }
}
