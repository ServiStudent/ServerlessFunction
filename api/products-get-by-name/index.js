const data = require('../shared/exercise-data');

module.exports = async function (context, req) {
  const name = req.params.name;

  try {
    // const exercises = data.getExercisesByName(name);
    context.res.status(200).json(name);
    console.log()
  } catch (error) {
    context.res.status(500).send(error);
  }
};
