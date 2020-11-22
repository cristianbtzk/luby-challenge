import AppError from '../../errors/AppError';

import StarsRepository from '../../repositories/stars/StarsRepository';

export default class DeleteStarService {
  constructor() {
    this.starsRepository = new StarsRepository();
  }

  async execute(id) {
    const star = await this.starsRepository.findById(id);

    if (!star) {
      throw new AppError('Star does not exist');
    }

    await this.starsRepository.delete(star);

    return true;
  }
}
