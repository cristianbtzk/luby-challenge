import AuthenticateService from '../services/sessions/AuthenticateService';

export default {
  async create(request, response) {
    const {
      user_id,
    } = request.body;

    const authenticate = new AuthenticateService();

    const user = await authenticate.execute(user_id);

    return response.json(user);
  },

};
