import React, { Component } from 'react';
import './Hello.css';

//using fat arrow
const Hello = (props) => {
	return(
		<div className='fi tc'>
			<h1>Hello World</h1>
			<p>{props.greeting}</p>
		</div>
	);
}

// class Hello extends Component {
// 	render(){
// 		return (
// 			<div className='fi tc'>
// 				<h1>Hello World</h1>
// 				<p>{this.props.greeting}</p>
// 			</div>
// 		);
// 	}
// }

export default Hello;