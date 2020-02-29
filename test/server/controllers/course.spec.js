import sinon from 'sinon';
import CourseController from '../../../src/server/controllers/course';
import courseService from '../../../src/server/services/course';


describe('Testing the Course controller:', () => {
  it('should be able to create course', (done) => {
    const request = {
      body: {
        id: 'f6859199-400b-48db-9a74-9071514ca3d2',
        name: 'physics',
      },
    };


    const response = {
    };

    response.status = function status() { return { json() {} }; };

    let responseStub = sinon.spy(response)

    const addCourseStub = sinon.stub(courseService, 'addCourse').resolves(request);

    CourseController.addCourse(request, response);

    sinon.assert.calledWith(addCourseStub, request.body);

    // sinon.assert.called(responseStub.status)

    addCourseStub.restore();
    done();
  });

  it('should be not able to create course - bad request', (done) => {
    const request = {
      body: {
        id: 'f6859199-400b-48db-9a74-9071514ca3d2',
      },
    };


    const response = {
    };

    response.status = function status() { return { json() {} }; };


    const addCourseStub = sinon.stub(courseService, 'addCourse').rejects('error validation');

    try {
      CourseController.addCourse(request, response);
    } catch (error) {
      addCourseStub.threw();
    }
    addCourseStub.restore();
    done();
  });
});
