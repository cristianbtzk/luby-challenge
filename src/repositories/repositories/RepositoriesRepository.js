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

  async delete(repository) {
    await repository.destroy();
  }
}
