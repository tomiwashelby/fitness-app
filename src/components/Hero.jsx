import React from 'react'
import Button from './Button'

const Hero = () => {
	return (
		<div className='h-fit md:h-[500px] flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-8 sm:p-10 md:p-16'>
			<div className="flex flex-col gap-4">
				<p>IT'S TIME TO GET</p>
				<h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'><span className='mr-4'>Swoley</span><span className='text-blue-400'>fit</span></h1>
			</div>
			<p className='text-sm sm:text-base font-light'>I hereby acknowledge that I may become <span className='text-blue-400 font-medium'>unbelievably swolenormous</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass monstrosity</span>, afflicted with severe body dismorphia unable to fit through doors.</p>
			<Button func={() => window.location.href = '#generate'} text={"Agree & Begin"} />
		</div>
	)
}

export default Hero;