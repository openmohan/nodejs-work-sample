
import { Router } from 'express';
import CourseController from '../controllers/course';

const router = Router();

/**
 * @api {get} /courses List Courses information
 * @apiName GetCourses
 * @apiGroup CourseAPI
 *
 *
 * @apiSuccess {Object[]} [Courses]  List of Course properties.
 * @apiSuccess {String} [Courses.ID] Firstname of the Course.
 * @apiSuccess {String} [Courses.Name]  Name of the course.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       'id': 'f6859199-400b-48db-9a74-9071514ca3d2',
 *       'name': 'Physics'
 * }]
 *
 *
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/courses
 */
router.get('/', CourseController.getAllCourses);
/**
 * @api {post} /courses Create Course information
 * @apiName CreateCourse
 * @apiGroup CourseAPI
 *
 * @apiParamExample {json} Request Body Example:
 *     {
 *       'id': 'f6859199-400b-48db-9a74-9071514ca3d2',
 *       'name': 'Physics'
 * }
 * @apiSuccess {UUID} id Unique id of the Course.
 * @apiSuccess {String} Name of the Course.
 * @apiSuccess {String} Email  of the Course.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       'id': 'f6859199-400b-48db-9a74-9071514ca3d2',
 *       'name': 'Physics'
 * }
 *
 * @apiError CourseNotFound 404 The id of the Course was not found.
 *
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/api/v1/courses/f6859199-400b-48db-9a74-9071514ca3d2
 */
router.post('/', CourseController.addCourse);

/**
 * @api {get} /courses/:id Request Course information
 * @apiName GetCourse
 * @apiGroup CourseAPI
 *
 * @apiParam {Number} id Courses UUID.
 *
 * @apiSuccess {UUID} id Unique id of the Course.
 * @apiSuccess {String} Name of the Course.
 * @apiSuccess {String} Email  of the Course.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       'id': 'f6859199-400b-48db-9a74-9071514ca3d2',
 *       'name': 'Physics'
 * }
 *
 * @apiError CourseNotFound 404 The id of the Course was not found.
 *
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/api/v1/courses/f6859199-400b-48db-9a74-9071514ca3d2
 */
router.get('/:id', CourseController.getCourse);

/**
 * @api {put} /courses/:id Update Course information
 * @apiName UpdateCourse
 * @apiGroup CourseAPI
 *
 * @apiParam {Number} id Courses UUID.
 *
 * @apiParamExample {json} Request Body Example:
 *     {
 *       'id': 'f6859199-400b-48db-9a74-9071514ca3d2',
 *       'name': 'Physics'
 * }
 * @apiSuccess {UUID} id Unique id of the Course.
 * @apiSuccess {String} Name of the Course.
 * @apiSuccess {String} Email  of the Course.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       'id': 'f6859199-400b-48db-9a74-9071514ca3d2',
 *       'name': 'Physics'
 * }
 *
 * @apiError CourseNotFound 404 The id of the Course was not found.
 *
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/api/v1/courses/f6859199-400b-48db-9a74-9071514ca3d2
 */
router.put('/:id', CourseController.updateCourse);

/**
 * @api {delete} /courses/:id Delete Course information
 * @apiName deleteCourse
 * @apiGroup CourseAPI
 *
* @apiParam {Number} id Courses UUID.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *
 * @apiError CourseNotFound 404 The id of the Course was not found.
 *
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/api/v1/courses/f6859199-400b-48db-9a74-9071514ca3d2
 */
router.delete('/:id', CourseController.deleteCourse);

export default router;
