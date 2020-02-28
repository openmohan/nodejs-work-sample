import database from '../../db/models';

class userService {
  static async getAllUsers() {
    return database.User.findAll();
  }

  static async getUser(id) {
    return database.User.findOne({ where: { id } });
  }

  static async addUser(newUser) {
    return database.User.create(newUser);
  }

  static async deleteUser(id) {
    const user = await database.User.findOne({ where: { id } });

    if (user) {
      return database.User.destroy({
        where: { id },
      });
    }
    return null;
  }


  static async updateUser(id, updateUser) {
    const userToUpdate = await database.User.findOne({ where: { id } });
    if (userToUpdate) {
      return database.User.update(updateUser, { where: { id } });
    }
    return null;
  }
}


export default userService;
