import Salaisuudet from '../models/Salaisuudet.js';

const loginController = async () => {
  const secret = await Salaisuudet.findOne();
  return secret;
};

export default loginController;
