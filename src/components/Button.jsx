import React from 'react'

const Button = (props) => {
	const {text, func} = props;
	return (
		<button onClick={func} className='px-8 py-4 rounded-md border-2 bg-slate-950 border-solid border-blue-400 blueShadow duration-200 mx-auto'>
			<p>{text}</p>
		</button>
	)
}

export default Button