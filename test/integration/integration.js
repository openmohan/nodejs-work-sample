import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../../src/app';
import statusCode from '../../src/server/utils/status';


chai.use(chatHttp);
const { expect } = chai;

describe('Testing the user endpoints:', () => {
  const goodUser = {
    id: 'f6859199-400b-48db-9a74-9071514ca3d0',
    name: 'First Awesome user',
    email: 'a@b.com',
  };
  const goodUser2 = {
    id: 'f6859199-400b-48db-9a74-9071514ca3d1',
    name: 'Second Awesome user',
    email: 'c@b.com',
  };
  it('It should create a user', (done) => {
    chai.request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .send(goodUser)
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.CREATED);
        expect(res.body).to.eql(goodUser);
        done();
      });
  });

  it('It should not create a user', (done) => {
    const user = {
      name: 'First Awesome user',
    };
    chai.request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.BAD_REQUEST);
        done();
      });
  });

  it('It should get a particular user', (done) => {
    chai.request(app)
      .get(`/users/${goodUser.id}`)
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.OK);
        expect(res.body).to.eql(goodUser);
        done();
      });
  });

  it('It should update the user', (done) => {
    goodUser.name = 'easyName';
    chai.request(app)
      .put(`/users/${goodUser.id}`)
      .send(goodUser)
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.SUCCESS_NO_CONTENT);
        done();
      });
  });

  it('It should create second user', (done) => {
    chai.request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .send(goodUser2)
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.CREATED);
        expect(res.body).to.eql(goodUser2);
        done();
      });
  });

  it('It should list all user', (done) => {
    chai.request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .send(goodUser2)
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.OK);
        expect(res.body).to.eql([goodUser, goodUser2]);
        done();
      });
  });

  it('It should delete the user', (done) => {
    goodUser.name = 'easyName';
    chai.request(app)
      .delete(`/users/${goodUser.id}`)
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.SUCCESS_NO_CONTENT);
        done();
      });
  });
});

describe('Testing the course endpoints:', () => {
  const goodCourse = {
    id: 'f6859199-400b-48db-9a74-9071514ca3d2',
    name: 'physics',
  };
  const goodCourse2 = {
    id: 'f6859199-400b-48db-9a74-9071514ca3d3',
    name: 'maths',
  };
  it('It should create a course', (done) => {
    chai.request(app)
      .post('/courses')
      .set('Accept', 'application/json')
      .send(goodCourse)
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.CREATED);
        expect(res.body).to.eql(goodCourse);
        done();
      });
  });

  it('It should not create a course', (done) => {
    const course = {};
    chai.request(app)
      .post('/courses')
      .set('Accept', 'application/json')
      .send(course)
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.BAD_REQUEST);
        done();
      });
  });

  it('It should get a particular course', (done) => {
    chai.request(app)
      .get(`/courses/${goodCourse.id}`)
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.OK);
        expect(res.body).to.eql(goodCourse);
        done();
      });
  });

  it('It should update the course', (done) => {
    goodCourse.name = 'easyName';
    chai.request(app)
      .put(`/courses/${goodCourse.id}`)
      .send(goodCourse)
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.SUCCESS_NO_CONTENT);
        done();
      });
  });

  it('It should create second course', (done) => {
    chai.request(app)
      .post('/courses')
      .set('Accept', 'application/json')
      .send(goodCourse2)
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.CREATED);
        expect(res.body).to.eql(goodCourse2);
        done();
      });
  });

  it('It should list all course', (done) => {
    chai.request(app)
      .get('/courses')
      .set('Accept', 'application/json')
      .send(goodCourse2)
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.OK);
        expect(res.body).to.eql([goodCourse, goodCourse2]);
        done();
      });
  });

  it('It should delete the course', (done) => {
    goodCourse.name = 'easyName';
    chai.request(app)
      .delete(`/courses/${goodCourse.id}`)
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.SUCCESS_NO_CONTENT);
        done();
      });
  });
});

describe('Testing the registration endpoints:', () => {
  // create resources
  const goodUser3 = {
    id: 'f6859199-400b-48db-9a74-9071514ca322',
    name: 'Second Awesome user',
    email: 'd@b.com',
  };
  it('It should create a user', (done) => {
    chai.request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .send(goodUser3)
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.CREATED);
        expect(res.body).to.eql(goodUser3);
        done();
      });
  });

  const goodCourse3 = {
    id: 'f6859199-400b-48db-9a74-9071514ca323',
    name: 'biology',
  };
  it('It should create a course', (done) => {
    chai.request(app)
      .post('/courses')
      .set('Accept', 'application/json')
      .send(goodCourse3)
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.CREATED);
        expect(res.body).to.eql(goodCourse3);
        done();
      });
  });

  const goodRegistration = {
    id: 'f6859199-400b-48db-9a74-9071514ca3e1',
    course_id: 'f6859199-400b-48db-9a74-9071514ca3d3',
    user_id: 'f6859199-400b-48db-9a74-9071514ca3d1',
    is_faculty: false,
  };
  const goodRegistration2 = {
    id: 'f6859199-400b-48db-9a74-9071514ca3e5',
    course_id: 'f6859199-400b-48db-9a74-9071514ca323',
    user_id: 'f6859199-400b-48db-9a74-9071514ca322',
    is_faculty: true,
  };
  const goodRegistration3 = {
    id: 'f6859199-400b-48db-9a74-9071514ca3e6',
    course_id: 'f6859199-400b-48db-9a74-9071514ca323',
    user_id: 'f6859199-400b-48db-9a74-9071514ca3d1',
    is_faculty: true,
  };
  const goodRegistration4 = {
    id: 'f6859199-400b-48db-9a74-9071514ca3e9',
    course_id: 'f6859199-400b-48db-9a74-9071514ca3d3',
    user_id: 'f6859199-400b-48db-9a74-9071514ca322',
    is_faculty: true,
  };


  it('It should create a registration', (done) => {
    chai.request(app)
      .post('/registrations')
      .set('Accept', 'application/json')
      .send(goodRegistration)
      .end((err, res) => {
        expect(res.body).to.eql(goodRegistration);
        done();
      });
  });

  it('It should create second registration- different user, different course', (done) => {
    chai.request(app)
      .post('/registrations')
      .set('Accept', 'application/json')
      .send(goodRegistration2)
      .end((err, res) => {
        expect(res.body).to.eql(goodRegistration2);
        done();
      });
  });

  it('It should create third registration- different user, different course', (done) => {
    chai.request(app)
      .post('/registrations')
      .set('Accept', 'application/json')
      .send(goodRegistration3)
      .end((err, res) => {
        expect(res.body).to.eql(goodRegistration3);
        done();
      });
  });

  it('It should create fourth registration- different user, different course', (done) => {
    chai.request(app)
      .post('/registrations')
      .set('Accept', 'application/json')
      .send(goodRegistration4)
      .end((err, res) => {
        expect(res.body).to.eql(goodRegistration4);
        done();
      });
  });

  it('It should not create a registration', (done) => {
    const registration = {};
    chai.request(app)
      .post('/registrations')
      .set('Accept', 'application/json')
      .send(registration)
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.BAD_REQUEST);
        done();
      });
  });

  it('It should get a particular registration', (done) => {
    chai.request(app)
      .get(`/registrations/${goodRegistration.id}`)
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.OK);
        expect(res.body).to.eql(goodRegistration);
        done();
      });
  });

  it('It should update the registration', (done) => {
    goodRegistration.is_faculty = true;
    chai.request(app)
      .put(`/registrations/${goodRegistration.id}`)
      .send(goodRegistration)
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.SUCCESS_NO_CONTENT);
        done();
      });
  });


  it('It should list all registration', (done) => {
    chai.request(app)
      .get('/registrations')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.OK);
        expect(res.body).to.eql([goodRegistration2, goodRegistration3, goodRegistration4, goodRegistration]);
        done();
      });
  });

  it('It should list all registration respective to course_id', (done) => {
    chai.request(app)
      .get('/registrations?course_id=f6859199-400b-48db-9a74-9071514ca323')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.OK);
        expect(res.body).to.eql([goodRegistration2, goodRegistration3]);
        done();
      });
  });

  it('It should delete the registration', (done) => {
    goodRegistration.name = 'easyName';
    chai.request(app)
      .delete(`/registrations/${goodRegistration.id}`)
      .end((err, res) => {
        expect(res.status).to.equal(statusCode.SUCCESS_NO_CONTENT);
        done();
      });
  });
});
