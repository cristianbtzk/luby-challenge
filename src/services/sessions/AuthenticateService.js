import AppError from '../../errors/AppError';
import TokensRepository from '../../repositories/tokens/TokensRepository';
import UsersRepository from '../../repositories/users/UsersRepository';

export default class AuthenticateService {
  constructor() {
    this.tokensRepository = new TokensRepository();
    this.usersRepository = new UsersRepository();
  }

  async execute(user_id) {
    const checkUser = await this.usersRepository.findById(user_id);

    if (!checkUser) {
      throw new AppError('Cannot authenticate non-existent user');
    }

    const { id, createdAt: date } = await this.tokensRepository.create(user_id);

    return { token: id, date };
  }
}
