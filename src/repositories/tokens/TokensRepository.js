import Token from '../../models/Token';

export default class TokensRepository {
  async create(user_id) {
    const token = await Token.create({
      user_id,
    });

    return token;
  }
}
