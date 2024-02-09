const prisma = require("../../utils/prisma");

class authController {
  // GET /auth
  static async Register(req, res) {
    const { email, password, fullname, phone, country, username } = req.body;
    try {
      const user = await prisma.user.create({
        data: {
          email,
          password,
          fullname,
          phone,
          country,
          username,
        },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
module.exports = authController;
