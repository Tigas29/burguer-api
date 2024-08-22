import * as Yup from 'yup';
import User from '../models/User';

class SessionController {
  async store(request, response) {
    const schema = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    const isValid = await schema.isValid(request.body);
    const globalValidation = () => {
      response
        .status(401)
        .json({ error: 'make sure your email or password are correct' });
    };

    if (!isValid) {
      return globalValidation();
    }
    const { email, password } = request.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return globalValidation();
    }

    const isSamePassword = await user.comparePassword(password);

    if (!isSamePassword) {
      return globalValidation();
    }

    return response.status(201).json({
      id: user.id,
      name: user.name,
      email,
      admin: user.admin,
    });
  }
}

export default new SessionController();
