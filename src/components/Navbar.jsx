import React from 'react';
import { CgGym } from "react-icons/cg";

const Navbar = () => {
	return (
		<nav className='h-[72px] sm:h-20 md:h-24 flex justify-center items-center'>
			<div className="cursor-default flex justify-center items-center gap-2">
				<CgGym className='text-2xl sm:text-2xl md:text-3xl text-blue-400'/>
				<div className='text-lg sm:text-xl md:text-2xl uppercase font-bold'>
					<span>swole</span><span className='text-blue-400'>normous</span>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;