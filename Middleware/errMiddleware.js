//middleware is like a middle man that dictates everything
//it is a callback function that can dictate response,err,request in our application

const errorMiddleware = (err, req, res, next) => {
  console.log("here is an error middleware"); //to show if our middleware works
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

module.exports = errorMiddleware;
