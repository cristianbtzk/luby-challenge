import { Sequelize } from 'sequelize';
import Repository from '../../models/Repository';

export default class RepositoryRepository {
  async create({
    name, description, isPublic, slug, user_id,
  }) {
    const repository = await Repository.create({
      name, description, public: isPublic, slug, user_id,
    });

    return repository;
  }

  async findById(id) {
    const repository = await Repository.findByPk(id);

    return repository;
  }

  async countRepositoriesFromUser(id) {
    const repositories = await Repository.count({
      where: {
        user_id: id,
      },
    });

    return repositories;
  }

  async delete(repository) {
    await repository.destroy();
  }

  async list(user_id) {
    const repositories = await Repository.findAll({
      where: {
        user_id,
      },
      attributes: ['id', 'name', 'description', 'public', 'slug', 'created_at', [Sequelize.fn('COUNT', Sequelize.col('Stars.repository_id')), 'starsCount']],
      include: {
        association: 'Stars',
        attributes: [],
      },
      group: ['Stars.id', 'Repository.id'],

    });

    return repositories;
  }
}
