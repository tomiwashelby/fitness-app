import React from 'react';
import { CgGym } from "react-icons/cg";

const Navbar = () => {
	return (
		<nav className='h-16 sm:h-20 md:h-24 flex justify-center items-center'>
			<div className="cursor-default flex justify-center items-center gap-2">
				<CgGym className='text-4xl sm:text-5xl text-blue-400'/>
				<div className='text-2xl sm:text-4xl uppercase font-bold'>
					<span>swole</span><span className='text-blue-400'>normous</span>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;