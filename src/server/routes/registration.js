import { Router } from 'express';
import RegistrationController from '../controllers/registration';

const router = Router();
/**
 * @api {get} /registrations List Registrations information
 * @apiName GetRegistrations
 * @apiGroup RegistrationAPI
 *
 *
 * @apiSuccess {Object[]} Registration  List of Registration properties.
 * @apiSuccess {UUID} Registration.ID id of the Registration.
 * @apiSuccess {UUID} Registration.user_id user id for registration.
 * @apiSuccess {UUID} Registration.course_id  course_id for the registration.
  * @apiSuccess {boolean} Registration.is_faculty faculty status of the use.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       'id': 'f6859199-400b-48db-9a74-9071514ca3d2',
 *       'user_id': 'f6859199-400b-48db-9a74-9071514ca3d3',
 *       'cluster_id': 'f6859199-400b-48db-9a74-9071514ca3d4',
 *       'is_faculty': false
 * }]
 *
 *
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/registrations
 */
router.get('/', RegistrationController.getAllRegistrations);

/**
 * @api {post} /registrations Create Registration information
 * @apiName CreateRegistration
 * @apiGroup RegistrationAPI
 *
 * @apiParamExample {json} Request Body Example:
 *     {
 *       'id': 'f6859199-400b-48db-9a74-9071514ca3d2',
 *       'user_id': 'f6859199-400b-48db-9a74-9071514ca3d3',
 *       'cluster_id': 'f6859199-400b-48db-9a74-9071514ca3d4',
 *       'is_faculty': false
 * }
 * @apiSuccess {UUID} id Unique id of the Registration.
 * @apiSuccess {course_id} course id for the Registration.
 * @apiSuccess {user_id} user id for the Registration.
 * @apiSuccess {is_faculty} faculty status of the user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *
 * @apiError RegistrationNotFound 404 The id of the Registration was not found.
 *
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/api/v1/registrations/f6859199-400b-48db-9a74-9071514ca3d2
 */
router.post('/', RegistrationController.addRegistration);

/**
 * @api {put} /registrations/:id Get Registration information
 * @apiName GetRegistration
 * @apiGroup RegistrationAPI
 *
 * @apiParam {Number} id Registrations UUID.
 *
 * @apiParamExample {json} Request Body Example:
 *     {
 *       'id': 'f6859199-400b-48db-9a74-9071514ca3d2',
 *       'user_id': 'f6859199-400b-48db-9a74-9071514ca3d3',
 *       'cluster_id': 'f6859199-400b-48db-9a74-9071514ca3d4',
 *       'is_faculty': false
 * }
 * @apiSuccess {UUID} id Unique id of the Registration.
 * @apiSuccess {course_id} course id for the Registration.
 * @apiSuccess {user_id} user id for the Registration.
 * @apiSuccess {is_faculty} faculty status of the user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiError RegistrationNotFound 404 The id of the Registration was not found.
 *
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/api/v1/registrations/f6859199-400b-48db-9a74-9071514ca3d2
 */
router.get('/:id', RegistrationController.getRegistration);

/**
 * @api {put} /registrations/:id Update Registration information
 * @apiName UpdateRegistration
 * @apiGroup RegistrationAPI
 *
 * @apiParam {Number} id Registrations UUID.
 *
 * @apiParamExample {json} Request Body Example:
 *     {
 *       'id': 'f6859199-400b-48db-9a74-9071514ca3d2',
 *       'user_id': 'f6859199-400b-48db-9a74-9071514ca3d3',
 *       'cluster_id': 'f6859199-400b-48db-9a74-9071514ca3d4',
 *       'is_faculty': false
 * }
 * @apiSuccess {UUID} id Unique id of the Registration.
 * @apiSuccess {String} Name of the Registration.
 * @apiSuccess {String} Email  of the Registration.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *
 * @apiError RegistrationNotFound 404 The id of the Registration was not found.
 *
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/api/v1/registrations/f6859199-400b-48db-9a74-9071514ca3d2
 */
router.put('/:id', RegistrationController.updateRegistration);

/**
 * @api {delete} /registrations/:id Delete Registration information
 * @apiName deleteRegistration
 * @apiGroup RegistrationAPI
 *
* @apiParam {Number} id Registrations UUID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *
 * @apiError RegistrationNotFound 404 The id of the Registration was not found.
 *
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/api/v1/registrations/f6859199-400b-48db-9a74-9071514ca3d2
 */
router.delete('/:id', RegistrationController.deleteRegistration);

export default router;
