import apiError from '../error/apiError.js';

const errorHandler = (err, req, res, next) => {
  if (err instanceof apiError) {
    return res.status(err.status).json({message: err.message});
  }
  return res.status(500).json({message: 'Непредвиденная ошибка'});
}

export default errorHandler;