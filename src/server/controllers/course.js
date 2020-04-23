import CourseService from '../services/course';
import Util from '../utils/Utils';
import statusCode from '../utils/status';

const isUUID = require('is-uuid');

const util = new Util();

class CourseController {
  static async getAllCourses(req, res) {
    try {
      const allCourses = await CourseService.getAllCourses();
      if (allCourses.length > 0) {
        util.setSuccess(statusCode.OK, 'Courses retrieved', allCourses);
      } else {
        util.setSuccess(statusCode.OK, 'No course found', allCourses);
      }
      const p = util.send(res);

      return p;
    } catch (error) {
      util.setError(statusCode.BAD_REQUEST, error);
      return util.send(res);
    }
  }

  static async addCourse(req, res) {
    const utiln = new Util();

    if (!req.body.name) {
      utiln.setError(statusCode.BAD_REQUEST, 'Please provide complete details');
      return utiln.send(res);
    }
    const newCourse = req.body;
    try {
      const createdCourse = await CourseService.addCourse(newCourse);
      utiln.setSuccess(statusCode.CREATED, 'Course Added!', createdCourse);
      return utiln.send(res);
    } catch (error) {
      utiln.setError(statusCode.BAD_REQUEST, error.message);
      return utiln.send(res);
    }
  }

  static async updateCourse(req, res) {
    const alteredCourse = req.body;
    const { id } = req.params;
    if (!isUUID.v4(id)) {
      util.setError(statusCode.BAD_REQUEST, 'Please input a valid uuid  value');
      return util.send(res);
    }
    try {
      const updateCourse = await CourseService.updateCourse(id, alteredCourse);
      if (!updateCourse) {
        util.setError(
          statusCode.NOT_FOUND,
          `Cannot find course with the id: ${id}`
        );
      } else {
        util.setSuccess(
          statusCode.SUCCESS_NO_CONTENT,
          'Course updated',
          updateCourse
        );
      }
      return util.send(res);
    } catch (error) {
      util.setError(statusCode.NOT_FOUND, error);
      return util.send(res);
    }
  }

  static async getCourse(req, res) {
    const { id } = req.params;

    if (!isUUID.v4(id)) {
      util.setError(statusCode.BAD_REQUEST, 'Please input a valid uuid  value');
      return util.send(res);
    }

    try {
      const theCourse = await CourseService.getCourse(id);

      if (!theCourse) {
        util.setError(
          statusCode.NOT_FOUND,
          `Cannot find course with the id ${id}`
        );
      } else {
        util.setSuccess(statusCode.OK, 'Found Course', theCourse);
      }
      return util.send(res);
    } catch (error) {
      util.setError(statusCode.NOT_FOUND, error);
      return util.send(res);
    }
  }

  static async deleteCourse(req, res) {
    const { id } = req.params;

    if (!isUUID.v4(id)) {
      util.setError(statusCode.BAD_REQUEST, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const courseToDelete = await CourseService.deleteCourse(id);

      if (courseToDelete) {
        util.setSuccess(statusCode.SUCCESS_NO_CONTENT, 'Course deleted');
      } else {
        util.setError(
          statusCode.NOT_FOUND,
          `Course with the id ${id} cannot be found`
        );
      }
      return util.send(res);
    } catch (error) {
      util.setError(statusCode.BAD_REQUEST, error);
      return util.send(res);
    }
  }
}

export default CourseController;
