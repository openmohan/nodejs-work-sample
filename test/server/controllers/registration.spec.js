import sinon from 'sinon';
import RegistrationController from '../../../src/server/controllers/registration';
import registrationService from '../../../src/server/services/registration';
import Util from '../../../src/server/utils/Utils';


describe('Testing the Registration controller:', () => {
  describe('Testing the list registrations:', async () => {
    it('success - should be able to get all registration with registration exists', async () => {
      const response = {};
      const request = {};
      const utilSuccessSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setSuccess = utilSuccessSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };

      const addRegistrationStub = sinon
        .stub(registrationService, 'addRegistration')
        .resolves();

      const allRegistrations = [
        { id: 'f6859199-400b-48db-9a74-9071514ca3d1' ,
         course_id: 'f6859199-400b-48db-9a74-9071513ca3d2',
 user_id:"f6859199-400b-48db-9a74-9071514ca3d4"},
      ];

      const getAllRegistrationsStub = sinon
        .stub(registrationService, 'getAllRegistrations')
        .resolves(allRegistrations);

      await RegistrationController.getAllRegistrations(request, response);
      sinon.assert.calledOnce(utilSuccessSpy);
      sinon.assert.calledOnce(utilSendSpy);

      addRegistrationStub.restore();
      getAllRegistrationsStub.restore();
    });

    it('success - should be able to get all registration with course id and user id in param', async () => {
      const response = {};
      const request = {
        query:{
          course_id:"f6859199-400b-48db-9a74-9071514ca3d5",
          user_id:"f6859199-400b-48db-9a74-9071514ca3d7",
        }
      };
      const utilSuccessSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setSuccess = utilSuccessSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };

      const addRegistrationStub = sinon
        .stub(registrationService, 'addRegistration')
        .resolves();

      const allRegistrations = [
        { id: 'f6859199-400b-48db-9a74-9071514ca3d1' ,
         course_id: 'f6859199-400b-48db-9a74-9071513ca3d2',
 user_id:"f6859199-400b-48db-9a74-9071514ca3d4"},
      ];

      const getAllRegistrationsStub = sinon
        .stub(registrationService, 'getAllRegistrations')
        .resolves(allRegistrations);

      await RegistrationController.getAllRegistrations(request, response);
      sinon.assert.calledOnce(utilSuccessSpy);
      sinon.assert.calledOnce(utilSendSpy);

      addRegistrationStub.restore();
      getAllRegistrationsStub.restore();
    });

    it('success - should be able to get all registration with no registration exists', async () => {
      const request = { };

      const response = {};
      const utilSuccessSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setSuccess = utilSuccessSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };

      const addRegistrationStub = sinon
        .stub(registrationService, 'addRegistration')
        .resolves(request);

      const allRegistrations = [
      ];

      const getAllRegistrationsStub = sinon
        .stub(registrationService, 'getAllRegistrations')
        .resolves(allRegistrations);

      await RegistrationController.getAllRegistrations(request, response);
      sinon.assert.calledOnce(utilSuccessSpy);
      sinon.assert.calledOnce(utilSendSpy);

      addRegistrationStub.restore();
      getAllRegistrationsStub.restore();
    });

    it('failure - get all registrations failed in call', async () => {
      const request = {};

      const response = {};
      const utilErrorSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setError = utilErrorSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };

      const allRegistrations = [
        { id: 'f6859199-400b-48db-9a74-9071514ca3d1' ,
         course_id: 'f6859199-400b-48db-9a74-9071513ca3d2',
 user_id:"f6859199-400b-48db-9a74-9071514ca3d4"},
      ];

      const getAllRegistrationsStub = sinon
        .stub(registrationService, 'getAllRegistrations')
        .rejects(allRegistrations);

      await RegistrationController.getAllRegistrations(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);

      getAllRegistrationsStub.restore();
    });
  });

  describe('Testing the create registration:', async () => {
    it('success - should be able to create registration', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          course_id: 'f6859199-400b-48db-9a74-9071514ca3d3',
          user_id: 'f6859199-400b-48db-9a74-9071514ca3d4',
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


      const allRegistrations = [
        { course_id: 'f6859199-400b-48db-9a74-9071514ca3d3',
          user_id: 'f6859199-400b-48db-9a74-9071514ca3d4',id: 'f6859199-400b-48db-9a74-9071514ca3d1' },
        
      ];

      const getAllRegistrationsStub = sinon
        .stub(registrationService, 'getAllRegistrations')
        .resolves(allRegistrations);

      const addRegistrationStub = sinon.stub(registrationService, 'addRegistration').resolves();

      await RegistrationController.addRegistration(request, response);
      sinon.assert.calledOnce(utilSuccessSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(addRegistrationStub);
      addRegistrationStub.calledOnceWith(request.body);
      addRegistrationStub.restore();
      getAllRegistrationsStub.restore();
    });

    it('failure - should be not able to create registration due to course id missing', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          course_id: 'f6859199-400b-48db-9a74-9071514ca3d3',
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


      const allRegistrations = [
        { course_id: 'f6859199-400b-48db-9a74-9071514ca3d3',
          user_id: 'f6859199-400b-48db-9a74-9071514ca3d4',id: 'f6859199-400b-48db-9a74-9071514ca3d1' },
        
      ];

      const getAllRegistrationsStub = sinon
        .stub(registrationService, 'getAllRegistrations')
        .resolves(allRegistrations);

      const addRegistrationStub = sinon.stub(registrationService, 'addRegistration').resolves();

      await RegistrationController.addRegistration(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      addRegistrationStub.restore();
      getAllRegistrationsStub.restore();
    });

    it('failure - should be not able to create registration - bad request', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          course_id: 'f6859199-400b-48db-9a74-9071514ca3d3',
          user_id: 'f6859199-400b-48db-9a74-9071514ca3d4',
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

      const allRegistrations = [
        { course_id: 'f6859199-400b-48db-9a74-9071514ca3d3',
          user_id: 'f6859199-400b-48db-9a74-9071514ca3d4',id: 'f6859199-400b-48db-9a74-9071514ca3d1' },
        
      ];

      const getAllRegistrationsStub = sinon
        .stub(registrationService, 'getAllRegistrations')
        .resolves(allRegistrations);

      const addRegistrationStub = sinon.stub(registrationService, 'addRegistration').rejects();

      await RegistrationController.addRegistration(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(addRegistrationStub);
      addRegistrationStub.calledOnceWith(request.body);
      addRegistrationStub.restore();
      getAllRegistrationsStub.restore();
    });
  });

  describe('Testing the update registration:', async () => {
    it('success - should be able to update registration', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          course_id: 'f6859199-400b-48db-9a74-9071514ca3d3',
          user_id: 'f6859199-400b-48db-9a74-9071514ca3d4',
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


      const updateRegistrationStub = sinon.stub(registrationService, 'updateRegistration').resolves(request.body);

      await RegistrationController.updateRegistration(request, response);
      sinon.assert.notCalled(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(updateRegistrationStub);
      updateRegistrationStub.calledOnceWith(request.body);
      updateRegistrationStub.restore();
    });

    it('failure - failed update registration service call', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          course_id: 'f6859199-400b-48db-9a74-9071514ca3d3',
          user_id: 'f6859199-400b-48db-9a74-9071514ca3d4',
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


      const updateRegistrationStub = sinon.stub(registrationService, 'updateRegistration').resolves(false);

      await RegistrationController.updateRegistration(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(updateRegistrationStub);
      updateRegistrationStub.calledOnceWith(request.body);
      updateRegistrationStub.restore();
    });

    it('failure - should be not able to create registration due to bad id', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          course_id: 'f6859199-400b-48db-9a74-9071514ca3d3',
          user_id: 'f6859199-400b-48db-9a74-9071514ca3d4',
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


      const updateRegistrationStub = sinon.stub(registrationService, 'updateRegistration').resolves();

      await RegistrationController.updateRegistration(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      updateRegistrationStub.restore();
    });

    it('failure - should be not able to update registration - bad request', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          course_id: 'f6859199-400b-48db-9a74-9071514ca3d3',
          user_id: 'f6859199-400b-48db-9a74-9071514ca3d4',
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


      const updateRegistrationStub = sinon.stub(registrationService, 'updateRegistration').rejects();

      await RegistrationController.updateRegistration(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(updateRegistrationStub);
      updateRegistrationStub.calledOnceWith(request.params.id, request.body);
      updateRegistrationStub.restore();
    });
  });

  describe('Testing the get registrations:', async () => {
    it('success - should be able to get registration', async () => {
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
      const getRegistrationStub = sinon.stub(registrationService, 'getRegistration').resolves(body);

      await RegistrationController.getRegistration(request, response);
      sinon.assert.notCalled(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(getRegistrationStub);
      getRegistrationStub.calledOnceWith(request.body);
      getRegistrationStub.restore();
    });

    it('failure - should be not able to get registration due to bad id', async () => {
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


      const getRegistrationStub = sinon.stub(registrationService, 'getRegistration').resolves();

      await RegistrationController.getRegistration(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      getRegistrationStub.restore();
    });

    it('failure - should be not able to get registration - bad request', async () => {
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


      const getRegistrationStub = sinon.stub(registrationService, 'getRegistration').rejects();

      await RegistrationController.getRegistration(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(getRegistrationStub);
      getRegistrationStub.calledOnceWith(request.params.id);
      getRegistrationStub.restore();
    });


    it('failure - should be not able to get registration - no registration exits', async () => {
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


      const getRegistrationStub = sinon.stub(registrationService, 'getRegistration').resolves(null);

      await RegistrationController.getRegistration(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(getRegistrationStub);
      getRegistrationStub.calledOnceWith(request.params.id);
      getRegistrationStub.restore();
    });
  });
  describe('Testing the delete registration:', async () => {
    it('success - should be able to delete registration', async () => {
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
      const deleteRegistrationStub = sinon.stub(registrationService, 'deleteRegistration').resolves(body);
      await RegistrationController.deleteRegistration(request, response);
      sinon.assert.notCalled(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(deleteRegistrationStub);
      deleteRegistrationStub.calledOnceWith(request.body);
      deleteRegistrationStub.restore();
    });

    it('failure - failed delete registration service call', async () => {
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


      const deleteRegistrationStub = sinon.stub(registrationService, 'deleteRegistration').resolves(false);
      await RegistrationController.deleteRegistration(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(deleteRegistrationStub);
      deleteRegistrationStub.restore();
    });

    it('failure - should be not able to create registration due to bad id', async () => {
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


      const deleteRegistrationStub = sinon.stub(registrationService, 'deleteRegistration').resolves();
      await RegistrationController.deleteRegistration(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      deleteRegistrationStub.restore();
    });

    it('failure - should be not able to delete registration - bad request', async () => {
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


      const deleteRegistrationStub = sinon.stub(registrationService, 'deleteRegistration').rejects();

      await RegistrationController.deleteRegistration(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(deleteRegistrationStub);
      deleteRegistrationStub.calledOnceWith(request.params.id, request.body);
      deleteRegistrationStub.restore();
    });
  });
});
