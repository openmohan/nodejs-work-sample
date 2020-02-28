import database from '../../db/models';

class courseService {
  static async getAllCourses() {
    return database.Course.findAll();
  }

  static async getCourse(id) {
    return database.Course.findOne({ where: { id } });
  }

  static async addCourse(newCourse) {
    return database.Course.create(newCourse);
  }

  static async deleteCourse(id) {
    const course = await database.Course.findOne({ where: { id } });

    if (course) {
      return database.Course.destroy({
        where: { id },
      });
    }
    return null;
  }


  static async updateCourse(id, updateCourse) {
    const courseToUpdate = await database.Course.findOne({ where: { id } });
    if (courseToUpdate) {
      return database.Course.update(updateCourse, { where: { id } });
    }
    return null;
  }
}


export default courseService;
