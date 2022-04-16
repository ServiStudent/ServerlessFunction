const data = require('../shared/exercise-data');

module.exports = async function (context, req) {
  const exercise = {
    id: parseInt(req.params.id, 10),
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
  };

  try {
    const updatedExercise = data.updateExercise(exercise);
    context.res.status(200).json(updatedExercise);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
