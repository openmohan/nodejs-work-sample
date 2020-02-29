import RegistrationService from '../services/registration';
import Util from '../utils/Utils';
import statusCode from '../utils/status';

const isUUID = require('is-uuid');


const util = new Util();

class RegistrationController {
  static async getAllRegistrations(req, res) {
    try {
      const queryParams = req.query;
      const allRegistrations = await RegistrationService.getAllRegistrations(queryParams);
      if (allRegistrations.length > 0) {
        util.setSuccess(statusCode.OK, 'Registrations retrieved', allRegistrations);
      } else {
        util.setSuccess(statusCode.OK, 'No registration found', allRegistrations);
      }
      return util.send(res);
    } catch (error) {
      util.setError(statusCode.BAD_REQUEST, error);
      return util.send(res);
    }
  }

  static async addRegistration(req, res) {
    if (!req.body.course_id || !req.body.user_id) {
      util.setError(statusCode.BAD_REQUEST, 'Please provide complete details');
      return util.send(res);
    }
    const newRegistration = req.body;
    try {
      const createdRegistration = await RegistrationService.addRegistration(newRegistration);
      util.setSuccess(statusCode.CREATED, 'Registration Added!', createdRegistration);
      return util.send(res);
    } catch (error) {
      util.setError(statusCode.BAD_REQUEST, error.message);
      return util.send(res);
    }
  }

  static async getRegistration(req, res) {
    const { id } = req.params;

    if (!isUUID.v4(id)) {
      util.setError(statusCode.BAD_REQUEST, 'Please input a valid uuid  value');
      return util.send(res);
    }

    try {
      const theRegistration = await RegistrationService.getRegistration(id);

      if (!theRegistration) {
        util.setError(statusCode.NOT_FOUND, `Cannot find registration with the id ${id}`);
      } else {
        util.setSuccess(statusCode.OK, 'Found Registration', theRegistration);
      }
      return util.send(res);
    } catch (error) {
      util.setError(statusCode.NOT_FOUND, error);
      return util.send(res);
    }
  }

  static async deleteRegistration(req, res) {
    const { id } = req.params;

    if (!isUUID.v4(id)) {
      util.setError(statusCode.BAD_REQUEST, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const registrationToDelete = await RegistrationService.deleteRegistration(id);

      if (registrationToDelete) {
        util.setSuccess(statusCode.SUCCESS_NO_CONTENT, 'Registration deleted');
      } else {
        util.setError(statusCode.NOT_FOUND, `Registration with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(statusCode.BAD_REQUEST, error);
      return util.send(res);
    }
  }

  static async updateRegistration(req, res) {
    const alteredRegistration = req.body;
    const { id } = req.params;
    alteredRegistration.id = id;
    if (!isUUID.v4(id)) {
      util.setError(statusCode.BAD_REQUEST, 'Please input a valid uuid  value');
      return util.send(res);
    }
    try {
      const updateRegistration = await RegistrationService.updateRegistration(id, alteredRegistration);
      if (!updateRegistration) {
        util.setError(statusCode.NOT_FOUND, `Cannot find registration with the id: ${id}`);
      } else {
        util.setSuccess(statusCode.SUCCESS_NO_CONTENT, 'Registration updated', updateRegistration);
      }
      return util.send(res);
    } catch (error) {
      util.setError(statusCode.NOT_FOUND, error);
      return util.send(res);
    }
  }
}

export default RegistrationController;
