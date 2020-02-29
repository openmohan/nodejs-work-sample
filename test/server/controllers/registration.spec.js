import sinon from 'sinon';
import RegistrationController from '../../../src/server/controllers/registration';
import registrationService from '../../../src/server/services/registration';


describe('Testing the Registration controller:', () => {
  it('should be able to create registration', (done) => {
    const request = {
      body: {
        id: 'f6859199-400b-48db-9a74-9071514ca3d2',
        course_id: 'f6859199-400b-48db-9a74-9071514ca3d2',
        user_id: 'f6859199-400b-48db-9a74-9071514ca3d4',
        is_faculty: false,
      },
    };


    const response = {
    };

    response.status = function status() { return { json() {} }; };

    // const responseStub = sinon.spy(response);

    const addRegistrationStub = sinon.stub(registrationService, 'addRegistration').resolves(request);

    RegistrationController.addRegistration(request, response);

    sinon.assert.calledWith(addRegistrationStub, request.body);

    // sinon.assert.called(responseStub.status)

    addRegistrationStub.restore();
    done();
  });

  it('should be not able to create registration - bad request', (done) => {
    const request = {
      body: {
        id: 'f6859199-400b-48db-9a74-9071514ca3d2',
        course_id: 'f6859199-400b-48db-9a74-9071514ca3d2',
        is_faculty: false,
      },
    };

    const response = {
    };

    response.status = function status() { return { json() {} }; };


    const addRegistrationStub = sinon.stub(registrationService, 'addRegistration').rejects('error validation');

    try {
      RegistrationController.addRegistration(request, response);
    } catch (error) {
      addRegistrationStub.threw();
    }
    addRegistrationStub.restore();
    done();
  });
});
