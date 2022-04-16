const data = {
  exercises: [
    {
      id: 10,
      name: 'Strawberries',
      description: '16oz package of fresh organic strawberries',
      quantity: '1',
    },
    {
      id: 20,
      name: 'Sliced bread',
      description: 'Loaf of fresh sliced wheat bread',
      quantity: 1,
    },
    {
      id: 30,
      name: 'Apples',
      description: 'Bag of 7 fresh McIntosh apples',
      quantity: 1,
    },
  ],
};

const getRandomInt = () => {
  const max = 1000;
  const min = 100;
  return Math.floor(Math.random() * Math.floor(max) + min);
};

const addExercise = (exercise) => {
  exercise.id = getRandomInt();
  data.exercises.push(exercise);
  return exercise;
};

const updateExercise = (exercise) => {
  const index = data.exercises.findIndex((v) => v.id === exercise.id);
  console.log(exercise);
  data.exercises.splice(index, 1, exercise);
  return exercise;
};

const deleteExercise = (id) => {
  const value = parseInt(id, 10);
  data.exercises = data.exercises.filter((v) => v.id !== value);
  return true;
};

const getExercises = () => {
  return data.exercises;
};

module.exports = { addExercise, updateExercise, deleteExercise, getExercises };
