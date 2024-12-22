import React, { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/function'
import Navbar from './components/Navbar'

const App = () => {
  const [noExercise, setNoExercise] = useState(true);
  const [workout, setWorkout] = useState([]);
  const [poison, setPoison] = useState('individual');
	const [muscles, setMuscles] = useState([]);
	const [goal, setGoal] = useState('strength_power');

  const updateWorkout = () => {
    if (muscles.length < 1) {
      return;
    }
    const newWorkout = generateWorkout({poison, muscles, goal});
    console.log(newWorkout);
    setWorkout(newWorkout);
    setNoExercise(false);
    window.location.href = '#workout';
  };

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-sm sm:text-base text-white'>
      <Navbar/>
      <Hero/>
      <Generator 
        poison={poison}
        setPoison={setPoison} 
        muscles={muscles} 
        setMuscles={setMuscles}
        goal={goal} 
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && 
        <Workout 
          workout={workout} 
          setWorkout={setWorkout} 
          noExercise={noExercise} 
          setNoExercise={setNoExercise} 
        />
      }
    </main>
  )
}

export default App;