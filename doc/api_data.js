define({
  api: [
    {
      type: 'post',
      url: '/courses',
      title: 'Create Course information',
      name: 'CreateCourse',
      group: 'CourseAPI',
      parameter: {
        examples: [
          {
            title: 'Request Body Example:',
            content: "    {\n      'id': 'f6859199-400b-48db-9a74-9071514ca3d2',\n      'name': 'Physics'\n}",
            type: 'json',
          },
        ],
      },
      success: {
        fields: {
          'Success 200': [
            {
              group: 'Success 200',
              type: 'UUID',
              optional: false,
              field: 'id',
              description: '<p>Unique id of the Course.</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'Name',
              description: '<p>of the Course.</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'Email',
              description: '<p>of the Course.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Success-Response:',
            content: "    HTTP/1.1 201 OK\n    {\n      'id': 'f6859199-400b-48db-9a74-9071514ca3d2',\n      'name': 'Physics'\n}",
            type: 'json',
          },
        ],
      },
      error: {
        fields: {
          'Error 4xx': [
            {
              group: 'Error 4xx',
              optional: false,
              field: 'CourseNotFound',
              description: '<p>404 The id of the Course was not found.</p>',
            },
          ],
        },
      },
      examples: [
        {
          title: 'Example usage:',
          content: 'curl -i http://localhost:3000/api/v1/courses/f6859199-400b-48db-9a74-9071514ca3d2',
          type: 'curl',
        },
      ],
      version: '0.0.0',
      filename: 'src/server/routes/course.js',
      groupTitle: 'CourseAPI',
    },
    {
      type: 'get',
      url: '/courses/:id',
      title: 'Request Course information',
      name: 'GetCourse',
      group: 'CourseAPI',
      parameter: {
        fields: {
          Parameter: [
            {
              group: 'Parameter',
              type: 'Number',
              optional: false,
              field: 'id',
              description: '<p>Courses UUID.</p>',
            },
          ],
        },
      },
      success: {
        fields: {
          'Success 200': [
            {
              group: 'Success 200',
              type: 'UUID',
              optional: false,
              field: 'id',
              description: '<p>Unique id of the Course.</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'Name',
              description: '<p>of the Course.</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'Email',
              description: '<p>of the Course.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Success-Response:',
            content: "    HTTP/1.1 200 OK\n    {\n      'id': 'f6859199-400b-48db-9a74-9071514ca3d2',\n      'name': 'Physics'\n}",
            type: 'json',
          },
        ],
      },
      error: {
        fields: {
          'Error 4xx': [
            {
              group: 'Error 4xx',
              optional: false,
              field: 'CourseNotFound',
              description: '<p>404 The id of the Course was not found.</p>',
            },
          ],
        },
      },
      examples: [
        {
          title: 'Example usage:',
          content: 'curl -i http://localhost:3000/api/v1/courses/f6859199-400b-48db-9a74-9071514ca3d2',
          type: 'curl',
        },
      ],
      version: '0.0.0',
      filename: 'src/server/routes/course.js',
      groupTitle: 'CourseAPI',
    },
    {
      type: 'get',
      url: '/courses',
      title: 'List Courses information',
      name: 'GetCourses',
      group: 'CourseAPI',
      success: {
        fields: {
          'Success 200': [
            {
              group: 'Success 200',
              type: 'Object[]',
              optional: true,
              field: 'Courses',
              description: '<p>List of Course properties.</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: true,
              field: 'Courses.ID',
              description: '<p>Firstname of the Course.</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: true,
              field: 'Courses.Name',
              description: '<p>Name of the course.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Success-Response:',
            content: "    HTTP/1.1 200 OK\n    [{\n      'id': 'f6859199-400b-48db-9a74-9071514ca3d2',\n      'name': 'Physics'\n}]",
            type: 'json',
          },
        ],
      },
      examples: [
        {
          title: 'Example usage:',
          content: 'curl -i http://localhost:3000/courses',
          type: 'curl',
        },
      ],
      version: '0.0.0',
      filename: 'src/server/routes/course.js',
      groupTitle: 'CourseAPI',
    },
    {
      type: 'put',
      url: '/courses/:id',
      title: 'Update Course information',
      name: 'UpdateCourse',
      group: 'CourseAPI',
      parameter: {
        fields: {
          Parameter: [
            {
              group: 'Parameter',
              type: 'Number',
              optional: false,
              field: 'id',
              description: '<p>Courses UUID.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Request Body Example:',
            content: "    {\n      'id': 'f6859199-400b-48db-9a74-9071514ca3d2',\n      'name': 'Physics'\n}",
            type: 'json',
          },
        ],
      },
      success: {
        fields: {
          'Success 200': [
            {
              group: 'Success 200',
              type: 'UUID',
              optional: false,
              field: 'id',
              description: '<p>Unique id of the Course.</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'Name',
              description: '<p>of the Course.</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'Email',
              description: '<p>of the Course.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Success-Response:',
            content: "    HTTP/1.1 201 OK\n    {\n      'id': 'f6859199-400b-48db-9a74-9071514ca3d2',\n      'name': 'Physics'\n}",
            type: 'json',
          },
        ],
      },
      error: {
        fields: {
          'Error 4xx': [
            {
              group: 'Error 4xx',
              optional: false,
              field: 'CourseNotFound',
              description: '<p>404 The id of the Course was not found.</p>',
            },
          ],
        },
      },
      examples: [
        {
          title: 'Example usage:',
          content: 'curl -i http://localhost:3000/api/v1/courses/f6859199-400b-48db-9a74-9071514ca3d2',
          type: 'curl',
        },
      ],
      version: '0.0.0',
      filename: 'src/server/routes/course.js',
      groupTitle: 'CourseAPI',
    },
    {
      type: 'delete',
      url: '/courses/:id',
      title: 'Delete Course information',
      name: 'deleteCourse',
      group: 'CourseAPI',
      parameter: {
        fields: {
          Parameter: [
            {
              group: 'Parameter',
              type: 'Number',
              optional: false,
              field: 'id',
              description: '<p>Courses UUID.</p>',
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: 'Success-Response:',
            content: 'HTTP/1.1 201 OK',
            type: 'json',
          },
        ],
      },
      error: {
        fields: {
          'Error 4xx': [
            {
              group: 'Error 4xx',
              optional: false,
              field: 'CourseNotFound',
              description: '<p>404 The id of the Course was not found.</p>',
            },
          ],
        },
      },
      examples: [
        {
          title: 'Example usage:',
          content: 'curl -i http://localhost:3000/api/v1/courses/f6859199-400b-48db-9a74-9071514ca3d2',
          type: 'curl',
        },
      ],
      version: '0.0.0',
      filename: 'src/server/routes/course.js',
      groupTitle: 'CourseAPI',
    },
    {
      type: 'post',
      url: '/registrations',
      title: 'Create Registration information',
      name: 'CreateRegistration',
      group: 'RegistrationAPI',
      parameter: {
        examples: [
          {
            title: 'Request Body Example:',
            content: "    {\n      'id': 'f6859199-400b-48db-9a74-9071514ca3d2',\n      'user_id': 'f6859199-400b-48db-9a74-9071514ca3d3',\n      'cluster_id': 'f6859199-400b-48db-9a74-9071514ca3d4',\n      'is_faculty': false\n}",
            type: 'json',
          },
        ],
      },
      success: {
        fields: {
          'Success 200': [
            {
              group: 'Success 200',
              type: 'UUID',
              optional: false,
              field: 'id',
              description: '<p>Unique id of the Registration.</p>',
            },
            {
              group: 'Success 200',
              type: 'course_id',
              optional: false,
              field: 'course',
              description: '<p>id for the Registration.</p>',
            },
            {
              group: 'Success 200',
              type: 'user_id',
              optional: false,
              field: 'user',
              description: '<p>id for the Registration.</p>',
            },
            {
              group: 'Success 200',
              type: 'is_faculty',
              optional: false,
              field: 'faculty',
              description: '<p>status of the user.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Success-Response:',
            content: 'HTTP/1.1 201 OK',
            type: 'json',
          },
        ],
      },
      error: {
        fields: {
          'Error 4xx': [
            {
              group: 'Error 4xx',
              optional: false,
              field: 'RegistrationNotFound',
              description: '<p>404 The id of the Registration was not found.</p>',
            },
          ],
        },
      },
      examples: [
        {
          title: 'Example usage:',
          content: 'curl -i http://localhost:3000/api/v1/registrations/f6859199-400b-48db-9a74-9071514ca3d2',
          type: 'curl',
        },
      ],
      version: '0.0.0',
      filename: 'src/server/routes/registration.js',
      groupTitle: 'RegistrationAPI',
    },
    {
      type: 'put',
      url: '/registrations/:id',
      title: 'Get Registration information',
      name: 'GetRegistration',
      group: 'RegistrationAPI',
      parameter: {
        fields: {
          Parameter: [
            {
              group: 'Parameter',
              type: 'Number',
              optional: false,
              field: 'id',
              description: '<p>Registrations UUID.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Request Body Example:',
            content: "    {\n      'id': 'f6859199-400b-48db-9a74-9071514ca3d2',\n      'user_id': 'f6859199-400b-48db-9a74-9071514ca3d3',\n      'cluster_id': 'f6859199-400b-48db-9a74-9071514ca3d4',\n      'is_faculty': false\n}",
            type: 'json',
          },
        ],
      },
      success: {
        fields: {
          'Success 200': [
            {
              group: 'Success 200',
              type: 'UUID',
              optional: false,
              field: 'id',
              description: '<p>Unique id of the Registration.</p>',
            },
            {
              group: 'Success 200',
              type: 'course_id',
              optional: false,
              field: 'course',
              description: '<p>id for the Registration.</p>',
            },
            {
              group: 'Success 200',
              type: 'user_id',
              optional: false,
              field: 'user',
              description: '<p>id for the Registration.</p>',
            },
            {
              group: 'Success 200',
              type: 'is_faculty',
              optional: false,
              field: 'faculty',
              description: '<p>status of the user.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Success-Response:',
            content: 'HTTP/1.1 200 OK',
            type: 'json',
          },
        ],
      },
      error: {
        fields: {
          'Error 4xx': [
            {
              group: 'Error 4xx',
              optional: false,
              field: 'RegistrationNotFound',
              description: '<p>404 The id of the Registration was not found.</p>',
            },
          ],
        },
      },
      examples: [
        {
          title: 'Example usage:',
          content: 'curl -i http://localhost:3000/api/v1/registrations/f6859199-400b-48db-9a74-9071514ca3d2',
          type: 'curl',
        },
      ],
      version: '0.0.0',
      filename: 'src/server/routes/registration.js',
      groupTitle: 'RegistrationAPI',
    },
    {
      type: 'get',
      url: '/registrations',
      title: 'List Registrations information',
      name: 'GetRegistrations',
      group: 'RegistrationAPI',
      success: {
        fields: {
          'Success 200': [
            {
              group: 'Success 200',
              type: 'Object[]',
              optional: false,
              field: 'Registration',
              description: '<p>List of Registration properties.</p>',
            },
            {
              group: 'Success 200',
              type: 'UUID',
              optional: false,
              field: 'Registration.ID',
              description: '<p>id of the Registration.</p>',
            },
            {
              group: 'Success 200',
              type: 'UUID',
              optional: false,
              field: 'Registration.user_id',
              description: '<p>user id for registration.</p>',
            },
            {
              group: 'Success 200',
              type: 'UUID',
              optional: false,
              field: 'Registration.course_id',
              description: '<p>course_id for the registration.</p>',
            },
            {
              group: 'Success 200',
              type: 'boolean',
              optional: false,
              field: 'Registration.is_faculty',
              description: '<p>faculty status of the use.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Success-Response:',
            content: "    HTTP/1.1 200 OK\n    [{\n      'id': 'f6859199-400b-48db-9a74-9071514ca3d2',\n      'user_id': 'f6859199-400b-48db-9a74-9071514ca3d3',\n      'cluster_id': 'f6859199-400b-48db-9a74-9071514ca3d4',\n      'is_faculty': false\n}]",
            type: 'json',
          },
        ],
      },
      examples: [
        {
          title: 'Example usage:',
          content: 'curl -i http://localhost:3000/registrations',
          type: 'curl',
        },
      ],
      version: '0.0.0',
      filename: 'src/server/routes/registration.js',
      groupTitle: 'RegistrationAPI',
    },
    {
      type: 'put',
      url: '/registrations/:id',
      title: 'Update Registration information',
      name: 'UpdateRegistration',
      group: 'RegistrationAPI',
      parameter: {
        fields: {
          Parameter: [
            {
              group: 'Parameter',
              type: 'Number',
              optional: false,
              field: 'id',
              description: '<p>Registrations UUID.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Request Body Example:',
            content: "    {\n      'id': 'f6859199-400b-48db-9a74-9071514ca3d2',\n      'user_id': 'f6859199-400b-48db-9a74-9071514ca3d3',\n      'cluster_id': 'f6859199-400b-48db-9a74-9071514ca3d4',\n      'is_faculty': false\n}",
            type: 'json',
          },
        ],
      },
      success: {
        fields: {
          'Success 200': [
            {
              group: 'Success 200',
              type: 'UUID',
              optional: false,
              field: 'id',
              description: '<p>Unique id of the Registration.</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'Name',
              description: '<p>of the Registration.</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'Email',
              description: '<p>of the Registration.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Success-Response:',
            content: 'HTTP/1.1 201 OK',
            type: 'json',
          },
        ],
      },
      error: {
        fields: {
          'Error 4xx': [
            {
              group: 'Error 4xx',
              optional: false,
              field: 'RegistrationNotFound',
              description: '<p>404 The id of the Registration was not found.</p>',
            },
          ],
        },
      },
      examples: [
        {
          title: 'Example usage:',
          content: 'curl -i http://localhost:3000/api/v1/registrations/f6859199-400b-48db-9a74-9071514ca3d2',
          type: 'curl',
        },
      ],
      version: '0.0.0',
      filename: 'src/server/routes/registration.js',
      groupTitle: 'RegistrationAPI',
    },
    {
      type: 'delete',
      url: '/registrations/:id',
      title: 'Delete Registration information',
      name: 'deleteRegistration',
      group: 'RegistrationAPI',
      parameter: {
        fields: {
          Parameter: [
            {
              group: 'Parameter',
              type: 'Number',
              optional: false,
              field: 'id',
              description: '<p>Registrations UUID.</p>',
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: 'Success-Response:',
            content: 'HTTP/1.1 201 OK',
            type: 'json',
          },
        ],
      },
      error: {
        fields: {
          'Error 4xx': [
            {
              group: 'Error 4xx',
              optional: false,
              field: 'RegistrationNotFound',
              description: '<p>404 The id of the Registration was not found.</p>',
            },
          ],
        },
      },
      examples: [
        {
          title: 'Example usage:',
          content: 'curl -i http://localhost:3000/api/v1/registrations/f6859199-400b-48db-9a74-9071514ca3d2',
          type: 'curl',
        },
      ],
      version: '0.0.0',
      filename: 'src/server/routes/registration.js',
      groupTitle: 'RegistrationAPI',
    },
    {
      type: 'post',
      url: '/users',
      title: 'Create User',
      name: 'CreateUser',
      group: 'UserAPI',
      parameter: {
        examples: [
          {
            title: 'Request Body Example:',
            content: "    {\n      'id': 'f6859199-400b-48db-9a74-9071514ca3d2',\n      'name': 'John',\n      'email': 'mohan@gmail.com'\n}",
            type: 'json',
          },
        ],
      },
      success: {
        fields: {
          'Success 200': [
            {
              group: 'Success 200',
              type: 'UUID',
              optional: false,
              field: 'id',
              description: '<p>Unique id of the User.</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'Name',
              description: '<p>of the User.</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'Email',
              description: '<p>of the User.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Success-Response:',
            content: "    HTTP/1.1 201 OK\n    {\n      'id': 'f6859199-400b-48db-9a74-9071514ca3d2',\n      'name': 'John',\n      'email': 'mohan@gmail.com'\n}",
            type: 'json',
          },
        ],
      },
      error: {
        fields: {
          'Error 4xx': [
            {
              group: 'Error 4xx',
              optional: false,
              field: 'UserNotFound',
              description: '<p>404 The id of the User was not found.</p>',
            },
          ],
        },
      },
      examples: [
        {
          title: 'Example usage:',
          content: 'curl -i http://localhost:3000/api/v1/users/f6859199-400b-48db-9a74-9071514ca3d2',
          type: 'curl',
        },
      ],
      version: '0.0.0',
      filename: 'src/server/routes/user.js',
      groupTitle: 'UserAPI',
    },
    {
      type: 'get',
      url: '/users/:id',
      title: 'Request User information',
      name: 'GetUser',
      group: 'UserAPI',
      parameter: {
        fields: {
          Parameter: [
            {
              group: 'Parameter',
              type: 'Number',
              optional: false,
              field: 'id',
              description: '<p>Users UUID.</p>',
            },
          ],
        },
      },
      success: {
        fields: {
          'Success 200': [
            {
              group: 'Success 200',
              type: 'UUID',
              optional: false,
              field: 'id',
              description: '<p>Unique id of the User.</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'Name',
              description: '<p>of the User.</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'Email',
              description: '<p>of the User.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Success-Response:',
            content: "    HTTP/1.1 200 OK\n    {\n      'id': 'f6859199-400b-48db-9a74-9071514ca3d2',\n      'name': 'John',\n      'email': 'mohan@gmail.com'\n}",
            type: 'json',
          },
        ],
      },
      error: {
        fields: {
          'Error 4xx': [
            {
              group: 'Error 4xx',
              optional: false,
              field: 'UserNotFound',
              description: '<p>404 The id of the User was not found.</p>',
            },
          ],
        },
      },
      examples: [
        {
          title: 'Example usage:',
          content: 'curl -i http://localhost:3000/api/v1/users/f6859199-400b-48db-9a74-9071514ca3d2',
          type: 'curl',
        },
      ],
      version: '0.0.0',
      filename: 'src/server/routes/user.js',
      groupTitle: 'UserAPI',
    },
    {
      type: 'get',
      url: '/users',
      title: 'List Users information',
      name: 'GetUsers',
      group: 'UserAPI',
      success: {
        fields: {
          'Success 200': [
            {
              group: 'Success 200',
              type: 'Object[]',
              optional: false,
              field: 'User',
              description: '<p>List of User properties.</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'User.ID',
              description: '<p>Firstname of the User.</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'User.Email',
              description: '<p>Address of user.</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'User.Name',
              description: '<p>Name of the user.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Success-Response:',
            content: "    HTTP/1.1 200 OK\n    [{\n      'id': 'f6859199-400b-48db-9a74-9071514ca3d2',\n      'name': 'John',\n      'email': 'mohan@gmail.com'\n}]",
            type: 'json',
          },
        ],
      },
      examples: [
        {
          title: 'Example usage:',
          content: 'curl -i http://localhost:3000/users',
          type: 'curl',
        },
      ],
      version: '0.0.0',
      filename: 'src/server/routes/user.js',
      groupTitle: 'UserAPI',
    },
    {
      type: 'put',
      url: '/users/:id',
      title: 'Update User information',
      name: 'UpdateUser',
      group: 'UserAPI',
      parameter: {
        fields: {
          Parameter: [
            {
              group: 'Parameter',
              type: 'Number',
              optional: false,
              field: 'id',
              description: '<p>Users UUID.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Request Body Example:',
            content: "    {\n      'id': 'f6859199-400b-48db-9a74-9071514ca3d2',\n      'name': 'John',\n      'email': 'mohan@gmail.com'\n}",
            type: 'json',
          },
        ],
      },
      success: {
        fields: {
          'Success 200': [
            {
              group: 'Success 200',
              type: 'UUID',
              optional: false,
              field: 'id',
              description: '<p>Unique id of the User.</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'Name',
              description: '<p>of the User.</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'Email',
              description: '<p>of the User.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Success-Response:',
            content: "    HTTP/1.1 201 OK\n    {\n      'id': 'f6859199-400b-48db-9a74-9071514ca3d2',\n      'name': 'John',\n      'email': 'mohan@gmail.com'\n}",
            type: 'json',
          },
        ],
      },
      error: {
        fields: {
          'Error 4xx': [
            {
              group: 'Error 4xx',
              optional: false,
              field: 'UserNotFound',
              description: '<p>404 The id of the User was not found.</p>',
            },
          ],
        },
      },
      examples: [
        {
          title: 'Example usage:',
          content: 'curl -i http://localhost:3000/api/v1/users/f6859199-400b-48db-9a74-9071514ca3d2',
          type: 'curl',
        },
      ],
      version: '0.0.0',
      filename: 'src/server/routes/user.js',
      groupTitle: 'UserAPI',
    },
    {
      type: 'delete',
      url: '/users/:id',
      title: 'Delete User information',
      name: 'deleteUser',
      group: 'UserAPI',
      parameter: {
        fields: {
          Parameter: [
            {
              group: 'Parameter',
              type: 'Number',
              optional: false,
              field: 'id',
              description: '<p>Users UUID.</p>',
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: 'Success-Response:',
            content: "    HTTP/1.1 201 OK\n    {\n      'id': 'f6859199-400b-48db-9a74-9071514ca3d2',\n      'name': 'John',\n      'email': 'mohan@gmail.com'\n}",
            type: 'json',
          },
        ],
      },
      error: {
        fields: {
          'Error 4xx': [
            {
              group: 'Error 4xx',
              optional: false,
              field: 'UserNotFound',
              description: '<p>404 The id of the User was not found.</p>',
            },
          ],
        },
      },
      examples: [
        {
          title: 'Example usage:',
          content: 'curl -i http://localhost:3000/api/v1/users/f6859199-400b-48db-9a74-9071514ca3d2',
          type: 'curl',
        },
      ],
      version: '0.0.0',
      filename: 'src/server/routes/user.js',
      groupTitle: 'UserAPI',
    },
  ],
});
