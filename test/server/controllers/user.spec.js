import sinon from 'sinon';
import UserController from '../../../src/server/controllers/user';
import userService from '../../../src/server/services/users';


describe('Testing the User controller:', () => {
  it('should be able to create user', (done) => {
    const request = {
      body: {
        id: 'f6859199-400b-48db-9a74-9071514ca3d2',
        name: 'user1',
        email: 'test',
      },
    };


    const response = {
    };

    response.status = function status() { return { json() {} }; };

    // const responseStub = sinon.spy(response);

    const addUserStub = sinon.stub(userService, 'addUser').resolves(request);

    UserController.addUser(request, response);

    sinon.assert.calledWith(addUserStub, request.body);

    // sinon.assert.called(responseStub.status)

    addUserStub.restore();
    done();
  });

  it('should be not able to create user - bad request', (done) => {
    const request = {
      body: {
        id: 'f6859199-400b-48db-9a74-9071514ca3d2',
      },
    };


    const response = {
    };

    response.status = function status() { return { json() {} }; };


    const addUserStub = sinon.stub(userService, 'addUser').rejects('error validation');

    try {
      UserController.addUser(request, response);
    } catch (error) {
      addUserStub.threw();
    }
    addUserStub.restore();
    done();
  });
});
