const data = require('../shared/exercise-data');

module.exports = async function (context, req) {
  const exercise = {
    id: undefined,
    name: req.body.name,
    description: req.body.description,
  };

  try {
    const newExercise = data.addExercise(exercise);
    context.res.status(201).json(newExercise);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
