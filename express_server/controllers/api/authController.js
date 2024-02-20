const { registerService } = require("../../services/register.service");
const prisma = require("../../utils/prisma");

class authController {
  // GET /auth
  static async Register(req, res) {
    const createAccount = await registerService(req.body);

    if (createAccount.error) {
      return res.status(400).json({ error: createAccount.error });
    }

    return res.status(200).json({ message: "Account created successfully" });
  }
}
module.exports = authController;
