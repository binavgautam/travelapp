// Console.logger and Console.error from one place to keep track of logs
const info = (...params) => {
  console.log(params);
};

const error = (...params) => {
  console.error(params);
};

module.exports = {
  info,
  error,
};
