const data = require('../shared/exercise-data');

module.exports = async function (context, req) {
  try {
    const exercises = data.getExercises();
    context.res.status(200).headers({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    }).json(exercises);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
