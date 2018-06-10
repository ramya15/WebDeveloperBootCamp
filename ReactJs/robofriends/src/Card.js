import React from 'react';

const Card = ({id, name, email}) => {
	// const {id, name, email} = props;
	return (
		/*Always can return only 1 element*/
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${id}?80x80`} alt='robots'/>
			<div>
				<h1>{name}</h1>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;
