import UserService from '../services/users';
import Util from '../utils/Utils';
import statusCode from '../utils/status';

const isUUID = require('is-uuid');


const util = new Util();

class UserController {
  static async getAllUsers(req, res) {
    try {
      const allUsers = await UserService.getAllUsers();
      if (allUsers.length > 0) {
        util.setSuccess(statusCode.OK, 'Users retrieved', allUsers);
      } else {
        util.setSuccess(statusCode.OK, 'No user found', allUsers);
      }
      return util.send(res);
    } catch (error) {
      util.setError(statusCode.BAD_REQUEST, error);
      return util.send(res);
    }
  }

  static async addUser(req, res) {
    if (!req.body.name || !req.body.email) {
      util.setError(statusCode.BAD_REQUEST, 'Please provide complete details');
      return util.send(res);
    }
    const newUser = req.body;
    try {
      const createdUser = await UserService.addUser(newUser);
      util.setSuccess(statusCode.CREATED, 'User Added!', createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(statusCode.BAD_REQUEST, error.message);
      return util.send(res);
    }
  }

  static async updateUser(req, res) {
    const alteredUser = req.body;
    const { id } = req.params;
    if (!isUUID.v4(id)) {
      util.setError(statusCode.BAD_REQUEST, 'Please input a valid uuid  value');
      return util.send(res);
    }
    try {
      const updateUser = await UserService.updateUser(id, alteredUser);
      if (!updateUser) {
        util.setError(statusCode.NOT_FOUND, `Cannot find user with the id: ${id}`);
      } else {
        util.setSuccess(statusCode.SUCCESS_NO_CONTENT, 'User updated', updateUser);
      }
      return util.send(res);
    } catch (error) {
      util.setError(statusCode.NOT_FOUND, error);
      return util.send(res);
    }
  }

  static async getUser(req, res) {
    const { id } = req.params;

    if (!isUUID.v4(id)) {
      util.setError(statusCode.BAD_REQUEST, 'Please input a valid uuid  value');
      return util.send(res);
    }

    try {
      const theUser = await UserService.getUser(id);

      if (!theUser) {
        util.setError(statusCode.NOT_FOUND, `Cannot find user with the id ${id}`);
      } else {
        util.setSuccess(statusCode.OK, 'Found User', theUser);
      }
      return util.send(res);
    } catch (error) {
      util.setError(statusCode.NOT_FOUND, error);
      return util.send(res);
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;

    if (!isUUID.v4(id)) {
      util.setError(statusCode.BAD_REQUEST, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const userToDelete = await UserService.deleteUser(id);

      if (userToDelete) {
        util.setSuccess(statusCode.SUCCESS_NO_CONTENT, 'User deleted');
      } else {
        util.setError(statusCode.NOT_FOUND, `User with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(statusCode.BAD_REQUEST, error);
      return util.send(res);
    }
  }
}

export default UserController;
