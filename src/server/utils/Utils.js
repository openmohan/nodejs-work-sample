import status from './status';

export default class Util {
  constructor() {
    this.statusCode = null;
    this.type = null;
    this.data = null;
    this.message = null;
  }

  setSuccess(statusCode, message, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.type = 'success';
  }

  setError(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.type = 'error';
  }

  send(res) {
    // const result = {
    //   status: this.type,
    //   message: this.message,
    //   data: this.data,
    // };

    switch (this.statusCode) {
      case status.OK:
        return res.status(this.statusCode).json(this.data);
      case status.CREATED:
        return res.status(this.statusCode).end();
      case status.SUCCESS_NO_CONTENT:
        return res.status(this.statusCode).end();
      case status.BAD_REQUEST:
        return res.status(this.statusCode).json({
          status: this.type,
          message: this.message,
        });
      case status.NOT_FOUND:
        return res.status(this.statusCode).end();
      default:
        return res.status(status.INTERNAL_SERVER_ERROR).end();
    }
  }
}
