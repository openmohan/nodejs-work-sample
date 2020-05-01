import sinon from 'sinon';
import UserController from '../../../src/server/controllers/user';
import userService from '../../../src/server/services/users';
import Util from '../../../src/server/utils/Utils';


describe('Testing the User controller:', () => {
  describe('Testing the list users:', async () => {
    it('success - should be able to get all user with user exists', async () => {
      const response = {};
      const request = {};
      const utilSuccessSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setSuccess = utilSuccessSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };

      const addUserStub = sinon
        .stub(userService, 'addUser')
        .resolves();

      const allUsers = [
        { email: 'mohan@test.com', user_id: 'mohan',id: 'f6859199-400b-48db-9a74-9071514ca3d2' },
      ];

      const getAllUsersStub = sinon
        .stub(userService, 'getAllUsers')
        .resolves(allUsers);

      await UserController.getAllUsers(request, response);
      sinon.assert.calledOnce(utilSuccessSpy);
      sinon.assert.calledOnce(utilSendSpy);

      addUserStub.restore();
      getAllUsersStub.restore();
    });

    it('success - should be able to get all user with no user exists', async () => {
      const request = { };

      const response = {};
      const utilSuccessSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setSuccess = utilSuccessSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };

      const addUserStub = sinon
        .stub(userService, 'addUser')
        .resolves(request);

      const allUsers = [
      ];

      const getAllUsersStub = sinon
        .stub(userService, 'getAllUsers')
        .resolves(allUsers);

      await UserController.getAllUsers(request, response);
      sinon.assert.calledOnce(utilSuccessSpy);
      sinon.assert.calledOnce(utilSendSpy);

      addUserStub.restore();
      getAllUsersStub.restore();
    });

    it('failure - get all users failed in call', async () => {
      const request = {};

      const response = {};
      const utilErrorSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setError = utilErrorSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };

      const allUsers = [
        { email: 'mohan@test.com', user_id: 'mohan',id: 'f6859199-400b-48db-9a74-9071514ca3d2' },
      ];

      const getAllUsersStub = sinon
        .stub(userService, 'getAllUsers')
        .rejects(allUsers);

      await UserController.getAllUsers(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);

      getAllUsersStub.restore();
    });
  });

  describe('Testing the create user:', async () => {
    it('success - should be able to create user', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          name: 'mohan',
          email: 'mohan@test.com',
        },
      };

      const response = {};
      const utilSuccessSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setSuccess = utilSuccessSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };


      const allUsers = [
        { email: 'mohan@test.com', user_id: 'mohan',id: 'f6859199-400b-48db-9a74-9071514ca3d2' },
      ];

      const getAllUsersStub = sinon
        .stub(userService, 'getAllUsers')
        .resolves(allUsers);

      const addUserStub = sinon.stub(userService, 'addUser').resolves();

      await UserController.addUser(request, response);
      sinon.assert.calledOnce(utilSuccessSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(addUserStub);
      addUserStub.calledOnceWith(request.body);
      addUserStub.restore();
      getAllUsersStub.restore();
    });

    it('failure - should be not able to create user due to bad name', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          name: 'mohan',
          email: 'mohan@test.com',
        },
      };

      const response = {};
      const utilErrorSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setError = utilErrorSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };


      const allUsers = [
        { email: 'mohan@test.com', user_id: 'mohan',id: 'f6859199-400b-48db-9a74-9071514ca3d2' },
        
      ];

      const getAllUsersStub = sinon
        .stub(userService, 'getAllUsers')
        .resolves(allUsers);

      const addUserStub = sinon.stub(userService, 'addUser').resolves();
      const body = {
        id: 'testID',
        name: '',
      };
      request.body = body;
      await UserController.addUser(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      addUserStub.restore();
      getAllUsersStub.restore();
    });

    it('failure - should be not able to create user - bad request', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          name: 'mohan',
          email: 'mohan@test.com',
        },
      };

      const response = {};
      const utilErrorSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setError = utilErrorSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };

      const allUsers = [
        { email: 'mohan@test.com', user_id: 'mohan',id: 'f6859199-400b-48db-9a74-9071514ca3d2' },
        
      ];

      const getAllUsersStub = sinon
        .stub(userService, 'getAllUsers')
        .resolves(allUsers);

      const addUserStub = sinon.stub(userService, 'addUser').rejects();

      await UserController.addUser(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(addUserStub);
      addUserStub.calledOnceWith(request.body);
      addUserStub.restore();
      getAllUsersStub.restore();
    });
  });

  describe('Testing the update user:', async () => {
    it('success - should be able to update user', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          name: 'mohan',
          email: 'mohan@test.com',
        },
        params: { id: 'f6859199-400b-48db-9a74-9071514ca3d2' },
      };

      const response = {};
      const utilErrorSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setError = utilErrorSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };


      const updateUserStub = sinon.stub(userService, 'updateUser').resolves(request.body);

      await UserController.updateUser(request, response);
      sinon.assert.notCalled(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(updateUserStub);
      updateUserStub.calledOnceWith(request.body);
      updateUserStub.restore();
    });

    it('failure - failed update user service call', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          name: 'mohan',
          email: 'mohan@test.com',
        },
        params: { id: 'f6859199-400b-48db-9a74-9071514ca3d2' },
      };

      const response = {};
      const utilErrorSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setError = utilErrorSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };


      const updateUserStub = sinon.stub(userService, 'updateUser').resolves(false);

      await UserController.updateUser(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(updateUserStub);
      updateUserStub.calledOnceWith(request.body);
      updateUserStub.restore();
    });

    it('failure - should be not able to create user due to bad id', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          name: 'mohan',
          email: 'mohan@test.com',
        },
        params: { id: 'ftest3d2' },
      };

      const response = {};
      const utilErrorSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setError = utilErrorSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };


      const updateUserStub = sinon.stub(userService, 'updateUser').resolves();
      const body = {
        id: 'testID',
        name: '',
      };
      request.body = body;
      await UserController.updateUser(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      updateUserStub.restore();
    });

    it('failure - should be not able to update user - bad request', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          name: 'mohan',
          email: 'mohan@test.com',
        },
        params: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
        },
      };

      const response = {};
      const utilErrorSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setError = utilErrorSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };


      const updateUserStub = sinon.stub(userService, 'updateUser').rejects();

      await UserController.updateUser(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(updateUserStub);
      updateUserStub.calledOnceWith(request.params.id, request.body);
      updateUserStub.restore();
    });
  });

  describe('Testing the get users:', async () => {
    it('success - should be able to get user', async () => {
      const request = {
        params: { id: 'f6859199-400b-48db-9a74-9071514ca3d2' },
      };

      const response = {};
      const utilErrorSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setError = utilErrorSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };
      const body = {
        id: 'testID',
        name: 'testName',
      };
      const getUserStub = sinon.stub(userService, 'getUser').resolves(body);

      await UserController.getUser(request, response);
      sinon.assert.notCalled(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(getUserStub);
      getUserStub.calledOnceWith(request.body);
      getUserStub.restore();
    });

    it('failure - should be not able to get user due to bad id', async () => {
      const request = {
        params: { id: 'ftest3d2' },
      };

      const response = {};
      const utilErrorSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setError = utilErrorSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };


      const getUserStub = sinon.stub(userService, 'getUser').resolves();
      const body = {
        id: 'testID',
        name: '',
      };
      request.body = body;
      await UserController.getUser(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      getUserStub.restore();
    });

    it('failure - should be not able to get user - bad request', async () => {
      const request = {
        params: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
        },
      };

      const response = {};
      const utilErrorSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setError = utilErrorSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };


      const getUserStub = sinon.stub(userService, 'getUser').rejects();

      await UserController.getUser(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(getUserStub);
      getUserStub.calledOnceWith(request.params.id);
      getUserStub.restore();
    });


    it('failure - should be not able to get user - no user exits', async () => {
      const request = {
        params: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
        },
      };

      const response = {};
      const utilErrorSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setError = utilErrorSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };


      const getUserStub = sinon.stub(userService, 'getUser').resolves(null);

      await UserController.getUser(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(getUserStub);
      getUserStub.calledOnceWith(request.params.id);
      getUserStub.restore();
    });
  });
  describe('Testing the delete user:', async () => {
    it('success - should be able to delete user', async () => {
      const request = {
        params: { id: 'f6859199-400b-48db-9a74-9071514ca3d2' },
      };

      const response = {};
      const utilErrorSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setError = utilErrorSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };

      const body = {
        id: 'testID',
        name: 'testName',
      };
      const deleteUserStub = sinon.stub(userService, 'deleteUser').resolves(body);
      await UserController.deleteUser(request, response);
      sinon.assert.notCalled(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(deleteUserStub);
      deleteUserStub.calledOnceWith(request.body);
      deleteUserStub.restore();
    });

    it('failure - failed delete user service call', async () => {
      const request = {
        params: { id: 'f6859199-400b-48db-9a74-9071514ca3d2' },
      };

      const response = {};
      const utilErrorSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setError = utilErrorSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };


      const deleteUserStub = sinon.stub(userService, 'deleteUser').resolves(false);
      await UserController.deleteUser(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(deleteUserStub);
      deleteUserStub.restore();
    });

    it('failure - should be not able to create user due to bad id', async () => {
      const request = {
        params: { id: 'ftest3d2' },
      };

      const response = {};
      const utilErrorSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setError = utilErrorSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };


      const deleteUserStub = sinon.stub(userService, 'deleteUser').resolves();
      await UserController.deleteUser(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      deleteUserStub.restore();
    });

    it('failure - should be not able to delete user - bad request', async () => {
      const request = {
        params: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
        },
      };

      const response = {};
      const utilErrorSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setError = utilErrorSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };


      const deleteUserStub = sinon.stub(userService, 'deleteUser').rejects();

      await UserController.deleteUser(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(deleteUserStub);
      deleteUserStub.calledOnceWith(request.params.id, request.body);
      deleteUserStub.restore();
    });
  });
});
