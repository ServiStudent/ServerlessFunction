const data = require('../shared/exercise-data');

module.exports = async function (context, req) {
  try {
    const exercises = data.getExercisesCount();
    context.res.status(200).json(exercises);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
