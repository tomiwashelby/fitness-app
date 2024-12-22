import React from 'react'
import SectionWrapper from './SectionWrapper';
import ExerciseCard from './ExerciseCard';
import { LuSquareArrowUp } from "react-icons/lu";
const Workout = (props) => {
	const {workout, noExercise, setNoExercise} = props;
	return (
		<SectionWrapper id={'workout'} header={'welcome to'} title={['The', 'DANGER', 'zone']}>
			<div className={'flex flex-col gap-4 p-4'}>
				{
					noExercise ? 
					(
					<div 
						onClick={() => window.location.href = '#generate'} 
						className='text-xl sm:text-2xl md:text-3xl flex justify-center items-center border border-blue-400 duration-200 hover:border-blue-600 px-2 py-3 rounded-lg cursor-pointer w-full'
					>
						<p className='text-center'>Pick your preferred workout<LuSquareArrowUp className=' inline ml-2 sm:ml-3 md:ml-4' /></p>
					</div>
					) :
					(workout.map(
						(exercise, i) => {
						  return (
								<ExerciseCard 
									index={i} 
									exercise={exercise} 
									key={i} 
								/>
							)
						}
					))
				}
			</div>
		</SectionWrapper>
	)
}

export default Workout