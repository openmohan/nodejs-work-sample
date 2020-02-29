
import { Router } from 'express';
import UserController from '../controllers/users';

const router = Router();

/**
 * @api {get} /users List Users information
 * @apiName GetUsers
 * @apiGroup UserAPI
 *
 *
 * @apiSuccess {Object[]} User  List of User properties.
 * @apiSuccess {String} User.ID Firstname of the User.
 * @apiSuccess {String} User.Email  Address of user.
 * @apiSuccess {String} User.Name  Name of the user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       'id': 'f6859199-400b-48db-9a74-9071514ca3d2',
 *       'name': 'John',
 *       'email': 'mohan@gmail.com'
 * }]
 *
 *
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/users
 */
router.get('/', UserController.getAllUsers);

/**
 * @api {post} /users Create User
 * @apiName CreateUser
 * @apiGroup UserAPI
 *
 * @apiParamExample {json} Request Body Example:
 *     {
 *       'id': 'f6859199-400b-48db-9a74-9071514ca3d2',
 *       'name': 'John',
 *       'email': 'mohan@gmail.com'
 * }
 * @apiSuccess {UUID} id Unique id of the User.
 * @apiSuccess {String} Name of the User.
 * @apiSuccess {String} Email  of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       'id': 'f6859199-400b-48db-9a74-9071514ca3d2',
 *       'name': 'John',
 *       'email': 'mohan@gmail.com'
 * }
 *
 * @apiError UserNotFound 404 The id of the User was not found.
 *
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/api/v1/users/f6859199-400b-48db-9a74-9071514ca3d2
 */
router.post('/', UserController.addUser);

/**
 * @api {get} /users/:id Request User information
 * @apiName GetUser
 * @apiGroup UserAPI
 *
 * @apiParam {Number} id Users UUID.
 *
 * @apiSuccess {UUID} id Unique id of the User.
 * @apiSuccess {String} Name of the User.
 * @apiSuccess {String} Email  of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       'id': 'f6859199-400b-48db-9a74-9071514ca3d2',
 *       'name': 'John',
 *       'email': 'mohan@gmail.com'
 * }
 *
 * @apiError UserNotFound 404 The id of the User was not found.
 *
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/api/v1/users/f6859199-400b-48db-9a74-9071514ca3d2
 */
router.get('/:id', UserController.getUser);
/**
 * @api {put} /users/:id Update User information
 * @apiName UpdateUser
 * @apiGroup UserAPI
 * 
 * @apiParam {Number} id Users UUID.
 *
 * @apiParamExample {json} Request Body Example:
 *     {
 *       'id': 'f6859199-400b-48db-9a74-9071514ca3d2',
 *       'name': 'John',
 *       'email': 'mohan@gmail.com'
 * }
 * @apiSuccess {UUID} id Unique id of the User.
 * @apiSuccess {String} Name of the User.
 * @apiSuccess {String} Email  of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       'id': 'f6859199-400b-48db-9a74-9071514ca3d2',
 *       'name': 'John',
 *       'email': 'mohan@gmail.com'
 * }
 *
 * @apiError UserNotFound 404 The id of the User was not found.
 *
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/api/v1/users/f6859199-400b-48db-9a74-9071514ca3d2
 */
router.put('/:id', UserController.updateUser);
/**
 * @api {delete} /users/:id Delete User information
 * @apiName deleteUser
 * @apiGroup UserAPI
 *
* @apiParam {Number} id Users UUID.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       'id': 'f6859199-400b-48db-9a74-9071514ca3d2',
 *       'name': 'John',
 *       'email': 'mohan@gmail.com'
 * }
 *
 * @apiError UserNotFound 404 The id of the User was not found.
 *
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/api/v1/users/f6859199-400b-48db-9a74-9071514ca3d2
 */
router.delete('/:id', UserController.deleteUser);

export default router;
