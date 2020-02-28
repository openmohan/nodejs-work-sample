import database from '../../db/models';

class registrationService {
  static async getAllRegistrations(queryParams) {
    const filerObject = {};
    if (queryParams.registration_id) {
      filerObject.registration_id = queryParams.registration_id;
    }
    if (queryParams.user_id) {
      filerObject.registration_id = queryParams.user_id;
    }
    return database.Registration.findAll({ where: filerObject });
  }

  static async getRegistration(id) {
    return database.Registration.findOne({ where: { id } });
  }

  static async addRegistration(newRegistration) {
    return database.Registration.create(newRegistration);
  }

  static async deleteRegistration(id) {
    const registration = await database.Registration.findOne({ where: { id } });

    if (registration) {
      return database.Registration.destroy({
        where: { id },
      });
    }
    return null;
  }

  static async updateRegistration(id, updateRegistration) {
    const registrationToUpdate = await database.Registration.findOne({ where: { id } });
    if (registrationToUpdate) {
      return database.Registration.update(updateRegistration, { where: { id } });
    }
    return null;
  }
}


export default registrationService;
