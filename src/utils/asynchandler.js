// This is the wrapper using promises this then

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
      Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
  }
}


export { asyncHandler }


// This is the wrapper using try and catch!
// const asyncHandler = (fun) => async (req, res, next) => {
//   try {
//     await fun(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       sucess: false,
//       message: err.message,
//     });
//   }
// };
