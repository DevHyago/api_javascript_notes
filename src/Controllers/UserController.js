const CreateUserService = require('../services/user/CreateUserService');
const AuthUserService = require('../services/user/AuthUserService');

class UserController{

   async register(req, res){
      const { name, email, password } = req.body;

      const createUserService = new CreateUserService();

      const user = await createUserService.execute({name, email, password});

      return res.status(201).json(user);
   }

   async login(req, res){
      const { email, password } = req.body;

      const authUserService = new AuthUserService();

      const user = await authUserService.execute({email, password});

      return res.status(200).json(user);
   }

}

module.exports = new UserController();