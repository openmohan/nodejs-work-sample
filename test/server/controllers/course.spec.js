import sinon from 'sinon';
import CourseController from '../../../src/server/controllers/course';
import courseService from '../../../src/server/services/course';
import Util from '../../../src/server/utils/Utils';

describe('Testing the Course controller:', async () => {
  describe('Testing the list courses:', async () => {
    it('success - should be able to get all course with course exists', async () => {
      const response = {};
      const request = {};
      const utilSuccessSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setSuccess = utilSuccessSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };

      const addCourseStub = sinon
        .stub(courseService, 'addCourse')
        .resolves();

      const allCourses = [
        { id: 'f6859199-400b-48db-9a74-9071514ca3d2' },
        { name: 'test' },
      ];

      const getAllCoursesStub = sinon
        .stub(courseService, 'getAllCourses')
        .resolves(allCourses);

      await CourseController.getAllCourses(request, response);
      sinon.assert.calledOnce(utilSuccessSpy);
      sinon.assert.calledOnce(utilSendSpy);

      addCourseStub.restore();
      getAllCoursesStub.restore();
    });

    it('success - should be able to get all course with no course exists', async () => {
      const request = { };

      const response = {};
      const utilSuccessSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setSuccess = utilSuccessSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };

      const addCourseStub = sinon
        .stub(courseService, 'addCourse')
        .resolves(request);

      const allCourses = [
      ];

      const getAllCoursesStub = sinon
        .stub(courseService, 'getAllCourses')
        .resolves(allCourses);

      await CourseController.getAllCourses(request, response);
      sinon.assert.calledOnce(utilSuccessSpy);
      sinon.assert.calledOnce(utilSendSpy);

      addCourseStub.restore();
      getAllCoursesStub.restore();
    });

    it('failure - get all courses failed in call', async () => {
      const request = {};

      const response = {};
      const utilErrorSpy = sinon.spy();
      const utilSendSpy = sinon.spy();

      Util.prototype.setError = utilErrorSpy;
      Util.prototype.send = utilSendSpy;

      response.status = function status() {
        return { json() {} };
      };

      const allCourses = [
        { id: 'f6859199-400b-48db-9a74-9071514ca3d2' },
        { name: 'test' },
      ];

      const getAllCoursesStub = sinon
        .stub(courseService, 'getAllCourses')
        .rejects(allCourses);

      await CourseController.getAllCourses(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);

      getAllCoursesStub.restore();
    });
  });

  describe('Testing the create course:', async () => {
    it('success - should be able to create course', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          name: 'physics',
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


      const allCourses = [
        { id: 'f6859199-400b-48db-9a74-9071514ca3d2' },
        { name: 'test' },
      ];

      const getAllCoursesStub = sinon
        .stub(courseService, 'getAllCourses')
        .resolves(allCourses);

      const addCourseStub = sinon.stub(courseService, 'addCourse').resolves();
      const body = {
        id: 'testID',
        name: 'testName',
      };
      request.body = body;
      await CourseController.addCourse(request, response);
      sinon.assert.calledOnce(utilSuccessSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(addCourseStub);
      addCourseStub.calledOnceWith(body);
      addCourseStub.restore();
      getAllCoursesStub.restore();
    });

    it('failure - should be not able to create course due to bad name', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          name: 'physics',
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


      const allCourses = [
        { id: 'f6859199-400b-48db-9a74-9071514ca3d2' },
        { name: 'test' },
      ];

      const getAllCoursesStub = sinon
        .stub(courseService, 'getAllCourses')
        .resolves(allCourses);

      const addCourseStub = sinon.stub(courseService, 'addCourse').resolves();
      const body = {
        id: 'testID',
        name: '',
      };
      request.body = body;
      await CourseController.addCourse(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      addCourseStub.restore();
      getAllCoursesStub.restore();
    });

    it('failure - should be not able to create course - bad request', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          name: 'physics',
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

      const allCourses = [
        { id: 'f6859199-400b-48db-9a74-9071514ca3d2' },
        { name: 'test' },
      ];

      const getAllCoursesStub = sinon
        .stub(courseService, 'getAllCourses')
        .resolves(allCourses);

      const addCourseStub = sinon.stub(courseService, 'addCourse').rejects();
      const body = {
        id: 'testID',
        name: 'testName',
      };
      request.body = body;
      await CourseController.addCourse(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(addCourseStub);
      addCourseStub.calledOnceWith(body);
      addCourseStub.restore();
      getAllCoursesStub.restore();
    });
  });

  describe('Testing the update course:', async () => {
    it('success - should be able to update course', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          name: 'physics',
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


      const updateCourseStub = sinon.stub(courseService, 'updateCourse').resolves(request.body);
      const body = {
        id: 'testID',
        name: 'testName',
      };
      request.body = body;
      await CourseController.updateCourse(request, response);
      sinon.assert.notCalled(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(updateCourseStub);
      updateCourseStub.calledOnceWith(body);
      updateCourseStub.restore();
    });

    it('failure - failed update course service call', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          name: 'physics',
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


      const updateCourseStub = sinon.stub(courseService, 'updateCourse').resolves(false);
      const body = {
        id: 'testID',
        name: 'testName',
      };
      request.body = body;
      await CourseController.updateCourse(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(updateCourseStub);
      updateCourseStub.calledOnceWith(body);
      updateCourseStub.restore();
    });

    it('failure - should be not able to create course due to bad id', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          name: 'physics',
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


      const updateCourseStub = sinon.stub(courseService, 'updateCourse').resolves();
      const body = {
        id: 'testID',
        name: '',
      };
      request.body = body;
      await CourseController.updateCourse(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      updateCourseStub.restore();
    });

    it('failure - should be not able to update course - bad request', async () => {
      const request = {
        body: {
          id: 'f6859199-400b-48db-9a74-9071514ca3d2',
          name: 'physics',
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


      const updateCourseStub = sinon.stub(courseService, 'updateCourse').rejects();

      await CourseController.updateCourse(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(updateCourseStub);
      updateCourseStub.calledOnceWith(request.params.id, request.body);
      updateCourseStub.restore();
    });
  });

  describe('Testing the get courses:', async () => {
    it('success - should be able to get course', async () => {
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
      const getCourseStub = sinon.stub(courseService, 'getCourse').resolves(body);

      await CourseController.getCourse(request, response);
      sinon.assert.notCalled(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(getCourseStub);
      getCourseStub.calledOnceWith(body);
      getCourseStub.restore();
    });

    it('failure - should be not able to get course due to bad id', async () => {
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


      const getCourseStub = sinon.stub(courseService, 'getCourse').resolves();
      const body = {
        id: 'testID',
        name: '',
      };
      request.body = body;
      await CourseController.getCourse(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      getCourseStub.restore();
    });

    it('failure - should be not able to get course - bad request', async () => {
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


      const getCourseStub = sinon.stub(courseService, 'getCourse').rejects();

      await CourseController.getCourse(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(getCourseStub);
      getCourseStub.calledOnceWith(request.params.id);
      getCourseStub.restore();
    });


    it('failure - should be not able to get course - no course exits', async () => {
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


      const getCourseStub = sinon.stub(courseService, 'getCourse').resolves(null);

      await CourseController.getCourse(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(getCourseStub);
      getCourseStub.calledOnceWith(request.params.id);
      getCourseStub.restore();
    });
  });
  describe('Testing the delete course:', async () => {
    it('success - should be able to delete course', async () => {
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
      const deleteCourseStub = sinon.stub(courseService, 'deleteCourse').resolves(body);
      await CourseController.deleteCourse(request, response);
      sinon.assert.notCalled(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(deleteCourseStub);
      deleteCourseStub.calledOnceWith(body);
      deleteCourseStub.restore();
    });

    it('failure - failed delete course service call', async () => {
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


      const deleteCourseStub = sinon.stub(courseService, 'deleteCourse').resolves(false);
      await CourseController.deleteCourse(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(deleteCourseStub);
      deleteCourseStub.restore();
    });

    it('failure - should be not able to create course due to bad id', async () => {
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


      const deleteCourseStub = sinon.stub(courseService, 'deleteCourse').resolves();
      await CourseController.deleteCourse(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      deleteCourseStub.restore();
    });

    it('failure - should be not able to delete course - bad request', async () => {
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


      const deleteCourseStub = sinon.stub(courseService, 'deleteCourse').rejects();

      await CourseController.deleteCourse(request, response);
      sinon.assert.calledOnce(utilErrorSpy);
      sinon.assert.calledOnce(utilSendSpy);
      sinon.assert.calledOnce(deleteCourseStub);
      deleteCourseStub.calledOnceWith(request.params.id, request.body);
      deleteCourseStub.restore();
    });
  });
});
