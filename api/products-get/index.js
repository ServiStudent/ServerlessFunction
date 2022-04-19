const data = require('../shared/exercise-data');

module.exports = async function (context, req) {

  context.log('JavaScript HTTP trigger function processed a request.');
  context.log(context);
  const exercises = data.getExercises();
  let res = {
    // status: 200, /* Defaults to 200 */
    body: {message: exercises},
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    }
  };
  context.done(null, res);
  // try {
  //
  //   context.res.status(200).json(exercises);
  // } catch (error) {
  //   context.res.status(500).send(error);
  // }
};
